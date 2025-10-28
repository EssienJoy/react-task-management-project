import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Label from "../ui/Label";
import toast from "react-hot-toast";
import { signUpApi } from "../auth/signUp";

function SignupForm() {
	const navigate = useNavigate();

	const { register, handleSubmit, reset } = useForm();

	const { mutate: signUp, isPending } = useMutation({
		mutationFn: signUpApi,
		onSuccess: () => {
			toast.success("Account Successfully Created ✅");
			reset();
			navigate("/login");
		},
	});

	function onSubmit({ userName, email, password, confirmPassword }) {
		if (password !== confirmPassword) {
			toast.error("Password does not match");
			return;
		}

		if (password.length < 4) {
			toast.error("Password must be 4 didgit numbers orleters");
			return;
		}

		if (userName.length < 3) {
			toast.error("Username must not be less than 3 letters");
			return;
		}

		if (email.includes("@") && email.includes(".com")) {
			signUp(
				{ userName, email, password, role: "user" },
				{
					onSettled: () => reset(),
				}
			);
		} else {
			toast.error("❌ Incorrect, email must include @ and .com");
		}
	}
	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Label>User Name</Label>
				<Input
					{...register("userName")}
					type='text'
					placeholder='Enter your name'
				/>
			</div>

			<div>
				<Label className='block text-sm font-medium text-gray-700 mb-1'>
					Email
				</Label>
				<Input
					{...register("email")}
					type='email'
					placeholder='Enter your email'
				/>
			</div>

			<div>
				<Label>Password</Label>
				<Input
					{...register("password")}
					type='password'
					placeholder='Create a password'
				/>
			</div>

			<div>
				<Label>Confirm Password</Label>
				<Input
					{...register("confirmPassword")}
					type='password'
					placeholder='Confirm your password'
				/>
			</div>

			<button
				type='submit'
				className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition'
				disabled={isPending}>
				{isPending ? "Signing Up" : "Sign Up"}
			</button>
		</form>
	);
}

export default SignupForm;
