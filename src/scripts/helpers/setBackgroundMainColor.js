import { useTelegram } from "../hooks/useTelegram";

export const setBackgroundMainColor = (root) => {
    const { WebApp } = useTelegram();

    if (WebApp.colorScheme === 'dark') {
        console.log('setting up dark theme')
        root.style.setProperty('--tg-theme-bg-color', '#0f0f0f');
        root.style.setProperty('--tg-theme-secondary-bg-color', '#0f0f0f');

        WebApp.themeParams.button_color = "#2990FF";
        WebApp.setBackgroundColor("#0f0f0f")
        WebApp.setBottomBarColor("#0f0f0f");
    }
    else {
        WebApp.themeParams.bg_color = "#EFEEF4";
        WebApp.themeParams.secondary_bg_color = "#FFFFFF";
        
        root.style.setProperty('--tgui--bg_color', "#1f0f0f");
        root.style.setProperty('--tg-theme-secondary-bg-color', WebApp.themeParams.secondary_bg_color);
        
        WebApp.setBackgroundColor(WebApp.themeParams.bg_color);
        WebApp.setBottomBarColor(WebApp.themeParams.secondary_bg_color);
    }
}