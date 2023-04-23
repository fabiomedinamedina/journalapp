import { Grid } from "@mui/material";
import { WellcomeDashboardCard, DataCard, AddNewNoteCard } from "../components";

export const NothingSelectedView = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={9} >
        <WellcomeDashboardCard />
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
