import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '@/lib/queries/QueryProvider';
import { DataProvider } from './context/useContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <DataProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </DataProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
