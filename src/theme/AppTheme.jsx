import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { journalTheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ journalTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
