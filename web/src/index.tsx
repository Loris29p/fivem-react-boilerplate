import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';
import { VisibilityProvider } from './providers/VisibilityProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </VisibilityProvider>
  </React.StrictMode>
);
