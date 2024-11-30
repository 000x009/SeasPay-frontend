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
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    })

    return {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    };
}