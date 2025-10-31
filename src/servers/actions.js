export async function getTickets() {
    const userId = localStorage.getItem('userId');
    const res = await fetch(`https://eazy-mart-users-data.onrender.com/tickets?userId=${userId}`);
    if (!res.ok) throw new Error("Failed to fetch tickets");
    const data = await res.json();
    return data ?? {};
};

export async function createTicketApi(ticketData) {
    return await fetch("https://eazy-mart-users-data.onrender.com/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
    });
}

export async function deleteTicketApi(ticketId) {
    return await fetch(`https://eazy-mart-users-data.onrender.com/tickets/${ticketId}`, {
        method: "DELETE",
    });


}


export async function editTicketApi(ticketData, id) {
    const res = await fetch(`https://eazy-mart-users-data.onrender.com/tickets/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
    });

    if (!res.ok) {
        console.error("❌ Failed to update ticket");
        throw new Error("Failed to update ticket");
    }

    const data = await res.json();
    return data;
}
