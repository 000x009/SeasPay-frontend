import { Caption } from "@telegram-apps/telegram-ui";
import { TransactionCard } from "@/react/components/cards/TransactionCard/TransactionCard";
import { TransactionListSkeleton } from "../TransactionListSkeleton/TransactionListSkeleton";
import "./TransactionList.css"

export function TransactionList({transactions, isFetchingNextPage, isLoading, total }) {
    return (
        <>
            <div className="transaction_section__caption">
                <Caption level={3} plain className="transaction_section__headline">Транзакции</Caption>
            </div>
            <div className="transaction_cards_container">
                {transactions.map((transaction) => (
                    <>
                        <TransactionCard key={transaction.id} transaction={transaction} />
                    </>
                ))}
                {(isFetchingNextPage || isLoading) && <TransactionListSkeleton remaining={total - (transactions?.length || 0)} />}
            </div>
        </>
    )
}

