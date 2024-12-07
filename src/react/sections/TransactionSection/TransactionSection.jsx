import { InfiniteScroll } from "@/react/sections/InfiniteScroll/InfiniteScroll";
import { TransactionList } from "../TransactionList/TransactionList";
import "./TransactionSection.css";

export function TransactionSection({
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    items,
}) {
    return (
        <div className="transaction_section__container">
            <div className="transaction_section__list">
                <InfiniteScroll
                    isLoading={isLoading}
                    isFetchingNextPage={isFetchingNextPage}
                    fetchNextPage={() => hasNextPage && fetchNextPage()}
                >
                    <TransactionList
                        transactions={items?.items ?? []}
                        total={items?.total}
                        isFetchingNextPage={isFetchingNextPage}
                        isLoading={isLoading}
                    />
                </InfiniteScroll>
            </div>
        </div>
    )
}