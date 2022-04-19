import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import { App } from './components';

// Styles
import './styles/reset.scss';
import './styles/scaffolding.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
