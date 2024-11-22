import { useTelegram } from "../hooks/useTelegram";

export const setBackgroundMainColor = () => {
    const { WebApp } = useTelegram();
    WebApp.themeParams.bg_color = "#0f0f0f";
    console.log(WebApp);
}