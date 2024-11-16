import { IconButton } from "@telegram-apps/telegram-ui"
import AccountIcon from "@/images/account.png"
import { Icon32ProfileColoredSquare } from '@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square';
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./MainHeader.css"

export function MainHeader() {
    return (
        <div>
            <div className="header">
                <IconButton size="l" mode="plain" className="icon_button__account">
                    <img src={AccountIcon}/>
                </IconButton>
            </div>
        </div>
    )
}