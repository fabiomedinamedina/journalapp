import { useSelector } from "react-redux";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export const WelcomeDashboardCard = () => {

  const { displayName } = useSelector(state => state.auth);


  return (
    <Card sx={{ p: 3 }} className='animate__animated animate__fadeInUp '>
      <CardContent>
        <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
          Bienvenid@ <strong>{displayName}</strong>
        </Typography>
        <Typography>
          Desde ya puedes disfrutar tu <strong>JournalApp</strong>.
        </Typography>
        <Typography>
          Recuerda que puedes crear una nota nueva o hacer clic sobre una para
          visualizar el detalle.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" >
          Agregar una nota
        </Button>
      </CardActions>
    </Card>
  );
};
