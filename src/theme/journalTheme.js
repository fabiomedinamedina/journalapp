import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const journalTheme = createTheme({
  palette: {
    primary: {
      main: '#4C40A0',
      contrastText: '#fff'
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
    button: {
      fontWeight: 700,
    },
  }
})