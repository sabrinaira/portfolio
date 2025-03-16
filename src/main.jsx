import { Provider } from '@/components/ui/provider';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
