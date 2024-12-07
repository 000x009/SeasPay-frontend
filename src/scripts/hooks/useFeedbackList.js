import { useInfiniteQuery } from "@tanstack/react-query";
import { FeedbackAPI } from "../backend/api/feedback";

export function useFeedbackList() {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['feedbacks'],
        queryFn: async ({ pageParam }) => {
            const feedbackList = await FeedbackAPI.getFeedbackList({ page: pageParam });
            return feedbackList.data;
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            console.log("lastPage", lastPage);
            if (lastPage.feedbacks.length === 0) {
                return undefined
            }
            return lastPageParam + 1;
        },
        select: (result) => ({
            items: result.pages.flatMap(page => page.feedbacks),
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