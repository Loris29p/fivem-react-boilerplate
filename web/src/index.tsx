import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './App';
import './index.scss';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </VisibilityProvider>
  </React.StrictMode>,
);
