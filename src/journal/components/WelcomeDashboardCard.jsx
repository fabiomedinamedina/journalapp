import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { startNewNote } from "../../store/journal";

export const WelcomeDashboardCard = () => {

  const dispatch = useDispatch();
  const { displayName } = useSelector(state => state.auth);

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

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
        <Button
          onClick={ onClickNewNote }
          variant="outlined"
        >
          Agregar una nota
        </Button>
      </CardActions>
    </Card>
  );
};
