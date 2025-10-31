import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "./Link";
import logo from "../assets/logo.jpg";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<header className='py-6'>
			<div className='flex items-center justify-between max-w-[var(--container-main)] mx-auto px-[var(--spacing-main)]'>
				<div className='flex items-center gap-3 font-bold'>
					<img
						className='w-7 h-7 object-cover rounded-3xl'
						src={logo}
						alt='logo'
					/>
					<h1>Ticketly</h1>
				</div>

				<nav className='hidden md:block'>
					<ul className='text-md font-bold flex items-center gap-7'>
						<li>
							<RouterLink to='/'>Home</RouterLink>
						</li>
						<li>
							<RouterLink to='/dashboard'>Dashboard</RouterLink>
						</li>
					</ul>
				</nav>

				{/* Desktop Auth Buttons */}
				<div className='hidden md:flex items-center gap-3'>
					<Link
						to='/login'
						bgColor='bg-transparent'
						textColor='text-accent'
						className='border-2 border-solid border-accent'>
						Login
					</Link>
					<Link to='/signup'>Get Started</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMobileMenu}
					className='md:hidden p-2 focus:outline-none'
					aria-label='Toggle menu'>
					{!isMobileMenuOpen ? (
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					) : (
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden mt-4 px-[var(--spacing-main)] pb-4 animate-slideFadeIn'>
					<nav className='mb-4'>
						<ul className='flex flex-col gap-4 font-bold'>
							<li>
								<RouterLink to='/' onClick={closeMobileMenu}>
									Home
								</RouterLink>
							</li>
							<li>
								<RouterLink to='/dashboard' onClick={closeMobileMenu}>
									Dashboard
								</RouterLink>
							</li>
						</ul>
					</nav>

					<div className='flex flex-col gap-3'>
						<Link
							to='/login'
							bgColor='bg-transparent'
							textColor='text-accent'
							className='border-2 border-solid border-accent text-center'
							onClick={closeMobileMenu}>
							Login
						</Link>
						<Link
							to='/signup'
							className='text-center'
							onClick={closeMobileMenu}>
							Get Started
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;
