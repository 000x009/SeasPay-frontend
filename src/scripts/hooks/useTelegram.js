export function useTelegram() {
    const WebApp = window.Telegram.WebApp;

    return {
        WebApp,
        telegram_user: WebApp.initDataUnsafe.user,
    }
}