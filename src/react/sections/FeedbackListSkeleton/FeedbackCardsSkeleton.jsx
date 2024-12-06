import { FeedbackSkeleton } from "@/react/components/cards/FeedbackSkeleton/FeedbackSkeleton";

export function FeedbackCardsSkeleton({remaining, isLoading}) {
    return Array.from({ length: isLoading ? 2 : remaining }).map((_, index) => (
        <FeedbackSkeleton key={index} />
    ));
}
