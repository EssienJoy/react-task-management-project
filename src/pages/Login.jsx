import { Link } from "react-router-dom";
import LoginForm from "../ui/LoginForm";

function Login() {
	return (
		<section className='min-h-dvh  flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50'>
			<div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md max-w-[var(--container-main)] mx-auto px-[var(--spacing-main)]'>
				<h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
					Welcome Back
				</h1>

				<LoginForm />

				<p className='text-sm text-center text-gray-600 mt-4'>
					Don’t have an account?
					<Link to='/signup' className='text-blue-600 hover:underline'>
						Sign up
					</Link>
				</p>
			</div>
		</section>
	);
}

export default Login;
