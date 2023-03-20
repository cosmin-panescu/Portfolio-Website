// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from './App';
// cursor context-provider
import CursorProvider from './utils/CursorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <App />
  </CursorProvider>
);
