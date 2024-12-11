import { useTelegram } from "../hooks/useTelegram";
import { darkCustomTheme } from "@/constants/theme";

export function setTheme() {
  const { WebApp } = useTelegram();

  if (['webk', 'weba', 'tdesktop'].includes(WebApp.platform)) {
    if (WebApp.colorScheme === 'dark') {
      WebApp.setBackgroundColor(darkCustomTheme.bgColor);
      WebApp.setHeaderColor(darkCustomTheme.bgColor);
      WebApp.setBottomBarColor(darkCustomTheme.bgColor);
    }
  }
}
