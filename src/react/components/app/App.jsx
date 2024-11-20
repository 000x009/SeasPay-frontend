import { AppRoot } from '@telegram-apps/telegram-ui';
import { useEffect } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import { routes } from '@/navigation/routes.jsx';
import { useTelegram } from '@/scripts/hooks/useTelegram';
import { UserAPI } from '@/scripts/backend/api/user';

function BackButtonManipulator() {
  const location = useLocation();
  const navigate = useNavigate();
  const { WebApp } = useTelegram();

  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      WebApp.BackButton.isVisible && WebApp.BackButton.hide();
    } else {
      !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}

/**
 * @return {JSX.Element}
 */
export function App() {
  const queryClient = new QueryClient();
  const { WebApp } = useTelegram();
  
  useEffect(() => {
    const login = async () => {
      const response = await UserAPI.login(WebApp.initData);
      console.log("Login response", response);
    };
    login();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot
        appearance={WebApp.colorScheme}
        platform={['macos', 'ios'].includes(WebApp.platform) ? 'ios' : 'base'}
      >
        <BrowserRouter>
          <BackButtonManipulator/>
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </BrowserRouter>
      </AppRoot>
    </QueryClientProvider>
  );
}
