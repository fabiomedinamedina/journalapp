import { Grid } from "@mui/material";
import { WelcomeDashboardCard, DataCard, AddNewNoteCard } from "../components";

export const NothingSelectedView = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={9} >
        <WelcomeDashboardCard />
      </Grid>
      <Grid item xs={3}>
        <DataCard data={4} title="Total de notas" />
      </Grid>
      <Grid item xs={12}>
        <AddNewNoteCard />
      </Grid>
    </Grid>
  );
};
