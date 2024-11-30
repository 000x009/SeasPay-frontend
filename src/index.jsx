import ReactDOM from 'react-dom/client';

import { Root } from '@/react/components/app/Root.jsx';
import { setBackgroundMainColor } from '@/scripts/helpers/setBackgroundMainColor';

import './index.css';


const root = document.getElementById('root')


ReactDOM.createRoot(root).render(<Root/>);

setBackgroundMainColor(root);