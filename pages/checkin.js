import { Grid } from "@mui/material";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import ReservationList from "../src/components/dashboard/ReservationList";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ReservationList />
      </Grid>
    </Grid>
  );
};

export default Tables;
