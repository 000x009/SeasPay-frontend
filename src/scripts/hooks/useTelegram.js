export function useTelegram() {
    const WebApp = window.Telegram.WebApp;
    const theme = WebApp.colorScheme;

    return {
        WebApp,
        telegram_user: WebApp.initDataUnsafe.user,
        theme,
    }
}