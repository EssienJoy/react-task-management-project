import { useState } from "react";
import Button from "../ui/Button";
import { useGetTickets } from "../hooks/useGetTickets";
import { useAuth } from "../contexts/FakeAuthContext";
import Link from "../ui/Link";

function Dashboard() {
	const { logout } = useAuth();
	const { tickets, isLoading } = useGetTickets();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	if (isLoading)
		return (
			<p className='text-xl sm:text-2xl h-dvh grid place-items-center'>
				Loading...
			</p>
		);

	const totalTickets = tickets?.length || 0;
	const openTickets = tickets?.filter((t) => t.status === "open") || [];
	const resolvedTickets = tickets?.filter((t) => t.status === "resolved") || [];

	return (
		<section className='min-h-dvh bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col'>
			<header className='bg-white shadow-sm'>
				<div className='max-w-[var(--container-main)] mx-auto px-[var(--spacing-main)] py-4 flex items-center justify-between'>
					<h1 className='text-xl sm:text-2xl font-bold text-gray-900'>
						<Link to='/' bgColor='bg-transparent' textColor='text-secondary'>
							🎫 Ticketly
						</Link>
					</h1>

					<nav className='hidden md:flex items-center gap-6'>
						<Link to='/tickets'>Manage Tickets</Link>
						<Button onClick={logout}>Logout</Button>
					</nav>

					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className='md:hidden p-2 focus:outline-none'
						aria-label='Toggle menu'>
						{isMobileMenuOpen ? (
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
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className='md:hidden border-t border-gray-200 bg-white'>
						<nav className='px-[var(--spacing-main)] py-4 flex flex-col gap-3'>
							<Link
								to='/tickets'
								onClick={() => setIsMobileMenuOpen(false)}
								className='text-center'>
								Manage Tickets
							</Link>
							<Button
								onClick={() => {
									setIsMobileMenuOpen(false);
									logout();
								}}
								className='w-full'>
								Logout
							</Button>
						</nav>
					</div>
				)}
			</header>

			<main className='flex-1 max-w-[var(--container-main)] mx-auto px-[var(--spacing-main)] py-6 sm:py-8 md:py-10'>
				<h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center'>
					Welcome Back 👋
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
					<div className='bg-white shadow-lg rounded-2xl p-5 sm:p-6 text-center'>
						<h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>
							Total Tickets
						</h3>
						<p className='text-3xl sm:text-4xl font-bold text-accent'>
							{totalTickets}
						</p>
					</div>
					<div className='bg-white shadow-lg rounded-2xl p-5 sm:p-6 text-center'>
						<h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>
							Open Tickets
						</h3>
						<p className='text-3xl sm:text-4xl font-bold text-yellow-500'>
							{openTickets.length}
						</p>
					</div>
					<div className='bg-white shadow-lg rounded-2xl p-5 sm:p-6 text-center'>
						<h3 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>
							Resolved Tickets
						</h3>
						<p className='text-3xl sm:text-4xl font-bold text-green-500'>
							{resolvedTickets.length}
						</p>
					</div>
				</div>

				<div className='mt-8 sm:mt-12 text-center'>
					<Link to='/tickets' className='inline-block w-full sm:w-auto'>
						Go to Ticket Management
					</Link>
				</div>
			</main>
		</section>
	);
}

export default Dashboard;
