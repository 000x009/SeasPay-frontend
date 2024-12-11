import { useTelegram } from "../hooks/useTelegram";
import { darkCustomTheme } from "@/constants/theme";

export function setTheme() {
  const { WebApp } = useTelegram();
  console.log("platform", WebApp.platform);
  console.log("colorScheme", WebApp.colorScheme);

  if (WebApp.platform.startsWith('web')) {
    console.log("set colorScheme");
    if (WebApp.colorScheme === 'dark') {
      WebApp.setBackgroundColor(darkCustomTheme.bgColor);
      WebApp.setHeaderColor(darkCustomTheme.bgColor);
      WebApp.setBottomBarColor(darkCustomTheme.bgColor);
    }
    if (WebApp.colorScheme === 'light') {
      WebApp.setBottomBarColor(WebApp.themeParams.secondary_bg_color);
    }
  }
}
