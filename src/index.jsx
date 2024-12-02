import ReactDOM from 'react-dom/client';

import { Root } from '@/react/components/app/Root.jsx';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

const root = document.getElementById('root')
const telegram = window.Telegram.WebApp;

ReactDOM.createRoot(root).render(<Root/>);

if (telegram.colorScheme === 'dark') {
  root.style.setProperty('--tg-theme-bg-color', '#0f0f0f');
  root.style.setProperty('--tg-theme-secondary-bg-color', '#212121');
}
if (telegram.colorScheme === 'light') {
  root.style.setProperty('--tg-theme-bg-color', '#EFEEF4');
  root.style.setProperty('--tg-theme-secondary-bg-color', '#FFFFFF');
}
