import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Label from "../ui/Label";
import { useEffect, useState } from "react";
import { createTicketApi } from "../servers/actions";
import toast from "react-hot-toast";

function TicketsForm() {
	const queryClient = useQueryClient();

	const { register, handleSubmit, reset, watch } = useForm();
	const [titleError, setTitleError] = useState("");
	const [descError, setDescError] = useState("");

	const { isPending: isCreating, mutate: createTicket } = useMutation({
		mutationFn: createTicketApi,
		onSuccess: () => {
			toast.success("Ticket Successfully Created ✅");
			queryClient.invalidateQueries({ queryKey: ["tickets"] });
			reset();
			setTitleError("");
			setDescError("");
		},
		onError: () => {
			toast.error("Error Creating Ticket ❌");
		},
	});

	const title = watch("title", "");
	const description = watch("description", "");

	useEffect(() => {
		if (title.length > 70)
			setTitleError("Title must not exceed 70 characters.");
		else setTitleError("");

		if (description.length > 200)
			setDescError("Description must not exceed 200 characters.");
		else setDescError("");
	}, [title, description]);

	function onSubmit({ title, description }) {
		if (title.length > 70 || description.length > 200) {
			return;
		}

		if (title.length < 4 || description.length < 4) {
			toast.error("Title and Description must not be less than 4 letters");
			return;
		}

		const newTicket = {
			id: Math.floor(1000 + Math.random() * 9000),
			title,
			description,
			status: "open",
			userId: localStorage.getItem("userId"),
			date: new Date().toISOString(),
		};

		createTicket(newTicket);
	}

	return (
		<form
			className='bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 max-w-2xl'
			onSubmit={handleSubmit(onSubmit)}>
			<h2 className='text-xl font-semibold text-gray-800'>
				Create a New Ticket
			</h2>

			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Title <span className='text-red-500'>*</span>
				</label>
				<Input
					type='text'
					{...register("title")}
					placeholder='Enter ticket title'
					className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
						titleError
							? "border-red-400 focus:ring-red-300"
							: "border-gray-300 focus:ring-blue-400"
					}`}
				/>
				<p className='text-sm text-gray-500 mt-1'>
					{title.length}/70 characters
				</p>
				{titleError && (
					<p className='text-sm text-red-500 mt-1'>{titleError}</p>
				)}
			</div>

			<div>
				<Label>Description</Label>
				<textarea
					{...register("description")}
					placeholder='Describe the issue...'
					className={`w-full border rounded-lg p-2 h-24 focus:outline-none focus:ring-2 ${
						descError
							? "border-red-400 focus:ring-red-300"
							: "border-gray-300 focus:ring-blue-400"
					}`}></textarea>
				<p className='text-sm text-gray-500 mt-1'>
					{description.length}/200 characters
				</p>
				{descError && <p className='text-sm text-red-500 mt-1'>{descError}</p>}
			</div>

			<button
				type='submit'
				className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition'
				disabled={isCreating}>
				{isCreating ? "Creating..." : "Create Ticket"}
			</button>
		</form>
	);
}

export default TicketsForm;
