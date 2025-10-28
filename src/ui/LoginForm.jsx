import { useForm } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import { useAuth } from "../contexts/FakeAuthContext";

function LoginForm() {
	const { handleSubmit, register } = useForm();
	const { login } = useAuth();

	return (
		<form onSubmit={handleSubmit(login)} className='flex flex-col gap-4'>
			<div>
				<Label>Email</Label>
				<Input
					type='email'
					{...register("email")}
					className='w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400'
					placeholder='Enter your email'
				/>
			</div>

			<div>
				<Label>Password</Label>
				<Input
					type='password'
					name='password'
					{...register("password")}
					placeholder='Enter your password'
				/>
			</div>

			<button
				type='submit'
				className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition'>
				Login
			</button>
		</form>
	);
}

export default LoginForm;
