import Link from "./Link";

function Hero() {
	return (
		<section className='relative h-dvh flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50'>
			<div className='absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-60'></div>
			<div className='absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-50'></div>

			<div className='max-w-[var(--container-main)] mx-auto px-[var(--spacing-main)] z-100 flex-1 flex flex-col gap-4 md:gap-6 items-center justify-center '>
				<h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center text-gray-900 leading-tight px-4'>
					Simplify Ticket Tracking with Ease
				</h1>

				<p className='text-center text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl px-4'>
					Manage customer issues, track progress, and resolve faster — all in
					one place
				</p>

				<div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-2 md:mt-4 w-full sm:w-auto px-4'>
					<Link
						to='/login'
						className='border-2 border-solid border-accent w-full sm:w-auto'
						bgColor='bg-transparent'
						textColor='text-accent'>
						Login
					</Link>
					<Link to='/signup' className='w-full sm:w-auto'>
						Get Started
					</Link>
				</div>
			</div>

			<svg
				className='absolute bottom-0 left-0 w-full h-auto'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'>
				<path
					fill='#0099ff'
					fillOpacity='1'
					d='M0,128L80,154.7C160,181,320,235,480,234.7C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
			</svg>
		</section>
	);
}

export default Hero;
