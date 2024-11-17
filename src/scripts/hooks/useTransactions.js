import { useQuery } from "@tanstack/react-query";
import { OrderAPI } from "@/scripts/backend/api/order";
import WebApp from '@twa-dev/sdk';


/**
 * @param {number} param0.limit
 * @param {number} param0.offset
 * @returns {Object}
 */
export function useTransactions({ limit, offset }) {
    const {data, isLoading} = useQuery({
        queryKey: ['transactions', limit, offset],
        queryFn: async () => {
            console.log("Calling OrderAPI.list");
            const response = await OrderAPI.list(limit, offset, WebApp.initData);
            console.log("OrderAPI.list response:", response);
            return response.data;
        },
    });

    return { transactions: data, isLoading };
}