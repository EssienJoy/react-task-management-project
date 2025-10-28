import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function NotFound() {
	const navigate = useNavigate();

	return (
		<section className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-6'>
			<h1 className='text-[6rem] font-extrabold text-indigo-600 mb-4'>404</h1>

			<h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-2'>
				Page Not Found
			</h2>

			<p className='text-gray-600 mb-8 max-w-md'>
				Oops! The page you’re looking for doesn’t exist or may have been moved.
			</p>

			<button
				onClick={() => navigate(-1)}
				className='flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition'>
				<FaArrowLeft className='text-lg' />
				Go Back
			</button>
		</section>
	);
}

export default NotFound;
