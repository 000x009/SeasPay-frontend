import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { MainCellList } from '@/react/components/ui/MainCellList/MainCellList';
import { TransactionSection } from '@/react/sections/TransactionSection/TransactionSection';
import { useTransactions } from '@/scripts/hooks/useTransactions';
import { Progress } from '@/react/components/ui/Progress/Progress';
import './MainPage.css';

/**
 * 
 * @returns {JSX.Element}
 */
export function MainPage() {
    const {
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        items,
    } = useTransactions();

    if (isLoading) {
        return <Progress />
    }

    return (
        <>
            <MainHeader/>
            <MainCellList/>
            <TransactionSection
                isLoading={isLoading}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                items={items[0]}
            />
        </>
    )
}