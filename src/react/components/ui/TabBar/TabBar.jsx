import { Tabbar } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import HomeTab from "@/assets/icons/home_tab.svg?react"
import AccountTab from "@/assets/icons/account_tab.svg?react"

import '@telegram-apps/telegram-ui/dist/styles.css';
import "./TabBar.css";

export function TabBar() {
    const tabs = [
        {
            id: 1,
            text: "Главная",
            Icon: HomeTab
        },
        {
            id: 2,
            text: "Профиль",
            Icon: AccountTab
        }
    ];
    const [currentTab, setCurrentTab] = useState(tabs[0].id);

    return (
        <>
        <div className="tabbar__container">
            <Tabbar>
                {tabs.map(({
                id,
                text,
                Icon
            }) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
                    <Icon />
                </Tabbar.Item>)}
            </Tabbar>
        </div>
        </>
    );
}