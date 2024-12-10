import { AppRoot } from '@telegram-apps/telegram-ui';
import { useEffect } from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import { useTelegram } from '@/scripts/hooks/useTelegram';
import { AppRouter } from './AppRouter';
import { UserAPI } from '@/scripts/backend/api/user';
import { setTheme } from '@/scripts/helpers/setTheme';


/**
 * @return {JSX.Element}
 */
export function App() {
  const queryClient = new QueryClient();
  const { WebApp } = useTelegram();
  
  useEffect(() => {
    const login = async () => {
      await UserAPI.login(WebApp.initData);
    };
    login();
  }, []);

  useEffect(() => {
    WebApp.expand();
    setTheme();
  }, [])

  return (
    <AppRoot
      appearance={WebApp.colorScheme}
      platform={['macos'].includes(WebApp.platform) ? 'ios' : 'base'}
    >
      <QueryClientProvider client={queryClient}>
        <AppRouter/>
      </QueryClientProvider>
    </AppRoot>
  );
}

