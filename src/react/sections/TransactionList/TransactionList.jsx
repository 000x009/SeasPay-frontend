import { Caption } from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import { TransactionCard } from "@/react/components/cards/TransactionCard/TransactionCard";
import { TransactionListSkeleton } from "../TransactionListSkeleton/TransactionListSkeleton";
import "./TransactionList.css"

export function TransactionList({transactions, isFetchingNextPage, isLoading, total }) {
    const navigate = useNavigate();

    return (
        <>
            {total > 0 && (
                <div className="transaction_section__caption">
                    <Caption level={3} plain className="transaction_section__headline">Транзакции</Caption>
                </div>
            )}
            <div className="transaction_cards_container">
                {transactions.map((transaction) => (
                    <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                        onClick={() => navigate(`/transaction/${transaction.id}`)}
                    />
                ))}
                {(isFetchingNextPage || isLoading) && <TransactionListSkeleton remaining={total - (transactions?.length || 0)} />}
            </div>
        </>
    )
}

