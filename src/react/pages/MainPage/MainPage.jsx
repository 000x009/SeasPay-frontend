import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { MainCellList } from '@/react/components/ui/MainCellList/MainCellList';
import { TransactionList } from '@/react/sections/TransactionList/TransactionList';
import { InfiniteScroll } from '@/react/sections/InfiniteScroll/InfiniteScroll';
import { useTransactions } from '@/scripts/hooks/useTransactions';
import { Progress } from '@/react/components/ui/Progress/Progress';
import './MainPage.css';

/**
 * 
 * @returns {JSX.Element}
 */
export function MainPage() {
    const {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useTransactions();

    if (isLoading) {
        return <Progress />
    }

    return (
        <>
            <MainHeader/>
            <MainCellList/>
            <InfiniteScroll
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={() => hasNextPage && fetchNextPage()}
            >
                <TransactionList
                    transactions={data?.items ?? []}
                    total={data?.total}
                    isFetchingNextPage={isFetchingNextPage}
                    isLoading={isLoading}
                />
            </InfiniteScroll>
        </>
    )
}