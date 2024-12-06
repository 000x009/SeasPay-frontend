import { FeedbackCard } from "@/react/components/cards/FeedbackCard/FeedbackCard";
import { FeedbackCardsSkeleton } from "../FeedbackListSkeleton/FeedbackCardsSkeleton";
import "./FeedbackCards.css"

export function FeedbackCards({
    feedbacks,
    isFetchingNextPage,
    isLoading,
    total
}) {
    return (
        <div className="feedbacks_cards_container">
            {total > 0 && feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
            {
                (isFetchingNextPage || isLoading) &&
                <FeedbackCardsSkeleton
                    remaining={total - (feedbacks?.length || 0)}
                    isLoading={isLoading}
                />
            }
        </div>
    );
}