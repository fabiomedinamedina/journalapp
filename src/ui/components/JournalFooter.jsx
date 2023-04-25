import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from "@mui/material";


//IMAGES
import logoFM from '../../assets/images/copyright/logo-fm-copyright-color.svg';


export const JournalFooter = () => {
  return (
    <Box
      className='animate__animated animate__fadeInLeft'
      component="footer"
      fontSize={12}
      sx={{mt:2}}
    >
      <Box>
        <Link
          component={RouterLink}
          to="https:fabiomedina.com"
          target="_blank"
          rel="noopener"
        >
          <img src={logoFM} alt="Logo Fabio Medina Medina" />
        </Link>
        <Typography fontSize={12} sx={{mt:2}}>
          ©{new Date().getFullYear()} Todos los derechos reservados.
        </Typography>
      </Box>
      <Box>
        <Link
          className="link-author"
          component={RouterLink}
          variant="contained"
          color="inherit"
          to="https://fabiomedina.com"
          target="_blank"
          rel="noopener"
        >
          Fabio Medina Medina
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "start",
          mt: 2
        }}
      >
        <Link
          component={RouterLink}
          variant="contained"
          color="inherit"
          to="https://www.linkedin.com/in/fabio-medina-medina/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </Link>
        <Link
          component={RouterLink}
          variant="contained"
          color="inherit"
          to="https://github.com/fabiomedinamedina"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </Link>
        <Link
          component={RouterLink}
          variant="contained"
          color="inherit"
          to="https://github.com/fabiomedinamedina/journalapp"
          target="_blank"
          rel="noopener"
        >
          Source Code
        </Link>
      </Box>
    </Box>
  );
};
