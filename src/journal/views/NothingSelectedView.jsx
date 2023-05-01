import { Grid } from "@mui/material";
import { WelcomeDashboardCard, DataCard, AddNewNoteCard } from "../components";
import { useSelector } from "react-redux";

export const NothingSelectedView = () => {

  const { notes } = useSelector( state => state.journal )

  return (
    <Grid container spacing={4}>
      <Grid item sm={9} >
        <WelcomeDashboardCard />
      </Grid>
      <Grid item xs={12} sm={3} >
        <DataCard data={notes.length} title="Total de notas" />
      </Grid>
      {
        notes.length == 0
        ? <Grid item xs={12}>
            <AddNewNoteCard />
          </Grid>
        : ''
      }
      
      
    </Grid>
  );
};
