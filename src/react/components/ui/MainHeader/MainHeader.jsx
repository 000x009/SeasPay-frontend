import { IconButton, Image } from "@telegram-apps/telegram-ui"
import OverseasPayLogo from '@/assets/images/overseaspay.png';
import AccountIcon from "@/assets/icons/account.svg?react"

import { MainActions } from '@/react/components/ui/MainActions/MainActions';
import { Link } from "../Link/Link";

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainHeader.css"

export function MainHeader() {
    return (
        <div>
            <div className="header">
                <Link to="/profile">
                <IconButton size="l" mode="plain" className="icon_button__account">
                    <AccountIcon/>
                </IconButton>
                </Link>
                <Image
                    src={OverseasPayLogo}
                    className='image'
                    style={{
                        width: "130px",
                        height: "130px",
                        margin: "0 auto",
                        bottom: "-40px",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        userSelect: "none",
                        msUserSelect: "none",
                    }}
                />
                <MainActions/>
            </div>
        </div>
    )
}