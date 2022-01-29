import { Grid } from "@mui/material";
import ConsultingList from "../src/components/dashboard/ConsultingList";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ConsultingList />
      </Grid>
    </Grid>
  );
};

export default Tables;
