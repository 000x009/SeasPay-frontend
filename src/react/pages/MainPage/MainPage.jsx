import { Progress } from '@/react/components/ui/Progress/Progress';
import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { MainCellList } from '@/react/components/ui/MainCellList/MainCellList';
import { useTransactions } from '@/scripts/hooks/useTransactions';
import './MainPage.css';

/**
 * 
 * @returns {JSX.Element}
 */
export function MainPage() {
    const {transactions, isLoading} = useTransactions({ limit: 5, offset: 0 });

    if (isLoading) {
        return <Progress/>
    }

    return (
        <div>
            <MainHeader/>
            <MainCellList/>
        </div>
    )
}