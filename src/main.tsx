// -----------------------------------------------------------------------------
// 'EXTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Router } from './routes';
import { theme } from './styles/global/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <CssBaseline />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
