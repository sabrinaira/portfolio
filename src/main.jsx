import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = createRoot(document.getElementById('app'));

root.render(<App />);
