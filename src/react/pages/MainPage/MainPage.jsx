import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { MainCellList } from '@/react/components/ui/MainCellList/MainCellList';
import './MainPage.css';

/**
 * 
 * @returns {JSX.Element}
 */
export function MainPage() {
    return (
        <div>
            <MainHeader/>
            <MainCellList/>
        </div>
    )
}