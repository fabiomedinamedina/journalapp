import { CircularProgress, Grid } from '@mui/material';
import { AuthFooter } from './AuthFooter';

//IMAGES
import backgroundAuth from '../../assets/images/auth/background-auth.jpg';

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundAuth})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: 4,
      }}
    >
      <Grid item>
        <CircularProgress sx={{color: 'white'}} size={60}/>
      </Grid>
      <AuthFooter />
    </Grid>
  );
};