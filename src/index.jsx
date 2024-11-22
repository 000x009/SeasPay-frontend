import ReactDOM from 'react-dom/client';

import { Root } from '@/react/components/app/Root.jsx';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';
import { setBackgroundMainColor } from '@/scripts/helpers/setBackgroundMainColor';

setBackgroundMainColor();

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<Root/>);

root.style.setProperty('--tg-theme-bg-color', '#0f0f0f');
