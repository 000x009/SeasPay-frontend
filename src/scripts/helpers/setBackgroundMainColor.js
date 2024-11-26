import { useTelegram } from "../hooks/useTelegram";

export const setBackgroundMainColor = () => {
    const { WebApp } = useTelegram();
    WebApp.themeParams.bg_color = "#0f0f0f";
    WebApp.setBottomBarColor("#0f0f0f");
    WebApp.themeParams.button_color = "#2990FF";
}