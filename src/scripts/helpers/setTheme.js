import { useTelegram } from "../hooks/useTelegram";
import { darkCustomTheme } from "@/constants/theme";

export function setTheme() {
  const { WebApp } = useTelegram();

  WebApp.themeParams.button_color = "#2990FF";

  if (WebApp.colorScheme === 'dark') {
    WebApp.setBackgroundColor(darkCustomTheme.bgColor);
    WebApp.setHeaderColor(darkCustomTheme.bgColor);
    WebApp.setBottomBarColor(darkCustomTheme.bgColor);
  }
  if (WebApp.colorScheme === 'light') {
    WebApp.setBottomBarColor(WebApp.themeParams.secondary_bg_color);
  }
}
