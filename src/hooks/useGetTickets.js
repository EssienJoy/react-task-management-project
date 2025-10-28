import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../servers/actions";

export function useGetTickets() {
    const { data: tickets, isLoading } = useQuery({
        queryKey: ["tickets"],
        queryFn: getTickets,
    });

    return { tickets, isLoading };
}