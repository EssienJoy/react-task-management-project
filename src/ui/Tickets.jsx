import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import { useGetTickets } from "../hooks/useGetTickets";
import TicketsForm from "./TicketsForm";
import { useNavigate } from "react-router-dom";
import TicketCards from "./TicketCards";
import Button from "./Button";

function Tickets() {
	const [showForm, setShowForm] = useState(false);

	const { tickets, isLoading } = useGetTickets();

	useEffect(() => {
		document.title = "Ticket Management | TicketApp";
	}, []);

	const navigate = useNavigate();

	if (isLoading)
		return (
			<p className='text-xl sm:text-2xl h-dvh grid place-items-center'>
				Loading...
			</p>
		);

	return (
		<section className='relative min-h-dvh flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden'>
			<div className='max-w-[var(--container-main)] mx-auto w-full px-[var(--spacing-main)] py-6 sm:py-8 md:py-12 flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10'>
				<header className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4'>
					<div className='flex items-center gap-2 sm:gap-3'>
						<Button
							onClick={() => navigate(-1)}
							bgColor='bg-transparent'
							textColor='text-secondary'
							className='p-2'>
							<FaArrowLeft size='1.25rem' className='sm:text-[1.5rem]' />
						</Button>

						<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
							Ticket Management 🎫
						</h1>
					</div>

					<Button
						onClick={() => setShowForm((prev) => !prev)}
						bgColor='bg-green-400'
						className='w-full sm:w-auto'>
						{showForm ? "Close" : "+ New Ticket"}
					</Button>
				</header>

				{showForm && <TicketsForm />}
				<TicketCards tickets={tickets} />
			</div>
		</section>
	);
}

export default Tickets;
