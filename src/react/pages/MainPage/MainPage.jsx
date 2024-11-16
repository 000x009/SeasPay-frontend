import { useState } from 'react';
import { Progress } from '@/react/components/ui/Progress/Progress';
import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { MainCellList } from '@/react/components/ui/MainCellList/MainCellList';
import './MainPage.css';

/**
 * 
 * @returns {JSX.Element}
 */
export function MainPage() {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <Progress/>
    }

    return (
        <div>
            <MainHeader/>
            <MainCellList/>
        </div>
    )
}