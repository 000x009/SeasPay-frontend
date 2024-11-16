import { useState } from 'react';
import MainIcon from '@/assets/images/main.png';
import { Progress } from '@/react/components/ui/Progress/Progress';
import { MainHeader } from '@/react/components/ui/MainHeader/MainHeader';
import { Image } from '@telegram-apps/telegram-ui';
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
            <Image
            src={MainIcon}
            className='image'
            style={{
                width: "130px",
                height: "130px",
                margin: "0 auto",
                bottom: "-40px",
                mozUserSelect: "none",
                webkitUserSelect: "none",
                userSelect: "none",
                msUserSelect: "none",
            }}
            />
        </div>
    )
}