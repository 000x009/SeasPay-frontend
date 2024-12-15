import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInfiniteQuery } from "@tanstack/react-query";
import { OrderAPI } from "@/scripts/backend/api/order";


/**
 * @returns {Object}
 */
export function useTransactions() {
    const { initDataRaw } = retrieveLaunchParams();

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['orders'],
        queryFn: async ({ pageParam }) => {
            const transactions = await OrderAPI.list({ page: pageParam }, initDataRaw);
            return transactions.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.orders.length === 0) {
                return undefined
            }
            return lastPageParam + 1;
        },
        select: (result) => ({
            items: result.pages.flatMap(page => page.orders),
            total: result.pages[0]?.total || 0
        }),
    })

    return {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    };
}