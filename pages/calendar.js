import { Grid } from "@mui/material";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import ReservationList from "../src/components/dashboard/ReservationList";
// import React from 'react'
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </Grid>
    </Grid>
  );
};

export default Tables;
