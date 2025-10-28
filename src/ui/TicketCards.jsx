import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTicketApi } from "../servers/actions";
import Button from "./Button";
import UpdateTicket from "./UpdateTicket";
import { useState } from "react";
import toast from "react-hot-toast";

function TicketCards({ tickets }) {
	const queryClient = useQueryClient();
	const [selectedId, setSelectedId] = useState(null);

	const { isPending: isDeleting, mutate: deleteTicket } = useMutation({
		mutationFn: deleteTicketApi,
		onSuccess: () => {
			toast.success("Ticket Successfully Deleted ✅");
			queryClient.invalidateQueries({ queryKey: ["tickets"] });
		},
		onError: () => {
			toast.error("Error Deleting Ticket ❌");
		},
	});

	return (
		<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 items-start'>
			{tickets.map((ticket) => (
				<div key={ticket?.id} className='grid gap-3'>
					<div
						className={`bg-primary shadow-md rounded-xl p-6 flex flex-col gap-3 border-t-4 
							${
								ticket.status === "open"
									? "border-green-500"
									: ticket.status === "in progress"
									? "border-amber-400"
									: "border-gray-400"
							}`}>
						<h3 className='text-lg font-semibold text-gray-800'>
							{ticket.title}
						</h3>
						<p className='text-gray-600 text-sm'>{ticket.description}</p>
						<span className='inline-block w-max px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full'>
							{ticket.status}
						</span>
						<div className='flex justify-end gap-3 mt-4'>
							<Button
								bgColor='bg-green-400'
								onClick={() =>
									setSelectedId((id) => (id === ticket.id ? null : ticket.id))
								}>
								Edit
							</Button>
							<Button
								bgColor='bg-red-400'
								onClick={() => deleteTicket(ticket.id)}
								disabled={isDeleting}>
								{isDeleting ? "Deleting..." : "Delete"}
							</Button>
						</div>
					</div>

					{selectedId === ticket.id && (
						<UpdateTicket
							titleValue={ticket.title}
							descriptionValue={ticket.description}
							selectedId={selectedId}
							setSelectedId={setSelectedId}
						/>
					)}
				</div>
			))}
		</section>
	);
}

export default TicketCards;
