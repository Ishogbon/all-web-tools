import { createRoot } from 'react-dom/client';

import './index.css';
import Application from './App';

const ROOT_ELEMENT = document.getElementById('root');
if (ROOT_ELEMENT instanceof HTMLElement) {
    const root = createRoot(ROOT_ELEMENT);
    root.render(
        <Application />
    );
}
