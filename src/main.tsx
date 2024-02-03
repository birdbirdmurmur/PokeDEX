import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '@/lib/queries/QueryProvider';

import App from './App';
import { DataProvider } from './context/useContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
