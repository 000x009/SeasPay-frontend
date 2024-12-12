import { AppRoot } from '@telegram-apps/telegram-ui';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useTelegram } from '@/scripts/hooks/useTelegram';
import { AppRouter } from './AppRouter';
import { UserAPI } from '@/scripts/backend/api/user';
import { setTheme } from '@/scripts/helpers/setTheme';

export function App() {
  const queryClient = new QueryClient();
  const { WebApp } = useTelegram();

  useEffect(() => {
    const login = async () => {
      try {
        await UserAPI.login(WebApp.initData);
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
    login();
  }, [WebApp.initData]);

  useEffect(() => {
    WebApp.expand();
    setTheme();
  }, []);

  const platform = ['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base';

  return (
    <AppRoot appearance={WebApp.colorScheme} platform={platform}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </AppRoot>
  );
}
