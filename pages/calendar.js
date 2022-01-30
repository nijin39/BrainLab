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
        <BaseCard title="구글 캘린더">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=qn9s35lejhh71h3qauc6oj806o%40group.calendar.google.com&ctz=Asia%2FSeoul"
            // style="border: 0"
            width="100%"
            height="600"
            // frameborder="0"
            scrolling="no"
          ></iframe>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Tables;
