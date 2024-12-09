import { IconButton, Image } from "@telegram-apps/telegram-ui"
import AccountIcon from "@/assets/icons/account.svg?react"
import MoneyGIF from "@/assets/gif/money.gif";

import { MainActions } from '@/react/components/ui/MainActions/MainActions';
import { Link } from "../Link/Link";

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainHeader.css"

export function MainHeader() {
    return (
        <div>
            <div className="header">
                <div className="account_container">
                    <Link to="/profile">
                        <IconButton size="l" mode="plain" className="icon_button__account">
                            <AccountIcon/>
                        </IconButton>
                    </Link>
                </div>
                <div className="main_header__image_container">
                    <Image
                        src={MoneyGIF}
                        className='main_header__image'
                        style={{
                            width: "120px",
                            height: "120px",
                        }}
                    />
                </div>
                <MainActions/>
            </div>
        </div>
    )
}