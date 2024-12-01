import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useInfiniteQuery } from "@tanstack/react-query";
import { RequisiteAPI } from "../backend/api/requisite";

export function useRequisiteList() {
    const { initDataRaw } = retrieveLaunchParams();

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['requisites'],
        queryFn: async ({ pageParam }) => {
            const requisites = await RequisiteAPI.listRequisites(10, pageParam, initDataRaw);
            return requisites.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    })

    return {
        data,
        items: data?.pages?.flat()[0],
        total: data?.pages[0].total,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    };
}