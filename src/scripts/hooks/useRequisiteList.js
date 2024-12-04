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
            const requisites = await RequisiteAPI.listRequisites(5, pageParam, initDataRaw);
            return requisites.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
        select: (result) => ({
            requisites: result.pages.flatMap(page => page.requisites),
            total: result.pages[0]?.total || 0
        }),
        staleTime: 0,
        gcTime: 0,
    })

    return {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    };
}