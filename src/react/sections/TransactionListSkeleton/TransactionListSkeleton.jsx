import { TransactionSkeleton } from "@/react/components/cards/TransactionSkeleton/TransactionSkeleton";

export function TransactionListSkeleton({remaining}) {
    return Array.from({length: remaining}).map((_, index) => (
        <TransactionSkeleton key={index} />
    ));
}