import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { greenfmTheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ greenfmTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
};
