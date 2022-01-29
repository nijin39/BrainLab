import React, { useState } from "react";
import { Grid } from "@mui/material";
import SettlementTrend from "../src/components/dashboard/SettlementTrend";
import SettlementList from "../src/components/dashboard/SettlementList";

const Settlement = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SettlementTrend />
      </Grid>
      <Grid item xs={12} lg={12}>
        <SettlementList />
      </Grid>
    </Grid>
  );
};

export default Settlement;
