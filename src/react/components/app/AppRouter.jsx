import {
    useLocation,
    useNavigate,
    Navigate,
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom';

import { useEffect } from 'react';

import { routes } from '@/navigation/routes.jsx';
import { useTelegram } from '@/scripts/hooks/useTelegram';

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
      } else if (location.pathname.startsWith('/product-application/')) {
        WebApp.BackButton.isVisible && WebApp.BackButton.hide();
      } else {
        !WebApp.BackButton.isVisible && WebApp.BackButton.show();
      }
    }, [location]);
  
    return null;
}


export function AppRouter() {
    return (
        <BrowserRouter>
            <BackButtonManipulator/>
            <Routes>
                {routes.map((route) => <Route key={route.path} {...route} />)}
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}
