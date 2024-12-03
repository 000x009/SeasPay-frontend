import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInfiniteQuery } from "@tanstack/react-query";
import { OrderAPI } from "@/scripts/backend/api/order";

const DEFAULT_PAGE_SIZE = 5;


/**
 * @returns {Object}
 */
export function useTransactions() {
    const { initDataRaw } = retrieveLaunchParams();
    console.log("initDataRaw", initDataRaw)

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
        isError,
    } = useInfiniteQuery({
        queryKey: ['orders'],
        queryFn: async ({ pageParam }) => {
            const transactions = await OrderAPI.list(DEFAULT_PAGE_SIZE, pageParam, initDataRaw);
            return transactions.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage?.length ? allPages?.length + 1 : undefined;
            return nextPage;
        },
    })

    return {
        data,
        items: data?.pages?.flat(),
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
        isError,
    };
}