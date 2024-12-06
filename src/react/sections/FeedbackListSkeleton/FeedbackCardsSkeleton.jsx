import { FeedbackSkeleton } from "@/react/components/cards/FeedbackSkeleton/FeedbackSkeleton";

export function FeedbackCardsSkeleton() {
    return Array.from({length: 2}).map((_, index) => (
        <FeedbackSkeleton key={index} />
    ));
}
