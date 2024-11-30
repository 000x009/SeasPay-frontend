import { FeedbackCard } from "@/react/components/cards/FeedbackCard/FeedbackCard";
import { FeedbackCardsSkeleton } from "../FeedbackListSkeleton/FeedbackCardsSkeleton";
import "./FeedbackCards.css"

export function FeedbackCards({feedbacks, isFetchingNextPage, hasNextPage}) {
    return (
        <div className="feedbacks_cards_container">
            {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
            {isFetchingNextPage && hasNextPage && <FeedbackCardsSkeleton />}
        </div>
    );
}