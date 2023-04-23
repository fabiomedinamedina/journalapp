import { alpha, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const color = '#404040';

export const journalTheme = createTheme({
  palette: {
    background: {
      default: '#F9F9F9',
    },
    primary: {
      main: '#4C40A0',
      contrastText: '#fff',
      light: '#f2f0ff',
    },
    secondary: {
      main: '#8940A4',
      light: '#F8E3FF',
      contrastText: '#fff'
    },
    text: {
      primary: '#454545',
      secondary: '#A6A6A6'
    },
    error: {
      main: red.A400
    }
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: [
      'Sora',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 20,
    },
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 0 4px 0 ${alpha(color, 0.05)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    }
  }
})