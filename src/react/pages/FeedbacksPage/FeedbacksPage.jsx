import { useNavigate } from "react-router-dom";

import { MainButton } from "@vkruglikov/react-telegram-web-app";

import { FeedbackCards } from "@/react/sections/FeedbackCards/FeedbackCards";
import { InfiniteScroll } from "@/react/sections/InfiniteScroll/InfiniteScroll";
import { FeedbackHeader } from "@/react/sections/FeedbackHeader/FeedbackHeader";
import { useFeedbackList } from "@/scripts/hooks/useFeedbackList";

import "./FeedbacksPage.css"

export function FeedbacksPage() {
    const navigate = useNavigate();
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
    } = useFeedbackList();

    const handleMainButtonClick = () => {
        navigate("/feedbacks/post");
    }

    return (
        <>
            <FeedbackHeader />
            <InfiniteScroll
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={() => hasNextPage && fetchNextPage()}
            >
                <FeedbackCards
                    feedbacks={data?.items ?? []}
                    total={data?.total}
                    isFetchingNextPage={isFetchingNextPage}
                    isLoading={isLoading}
                />
            </InfiniteScroll>
            <MainButton
                text="Оставить отзыв"
                onClick={handleMainButtonClick}
            />
        </>
    );
}
