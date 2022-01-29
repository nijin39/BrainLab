import { Grid } from "@mui/material";
// import React from 'react'
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import BaseCard from "../src/components/baseCard/BaseCard";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="예약 캘린더">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Tables;
