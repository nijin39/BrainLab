import React, { useState } from "react";
import {
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import BaseCard from "../src/components/baseCard/BaseCard";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MyReservationList from "../src/components/dashboard/MyReservationList";
import { DataStore } from "@aws-amplify/datastore";
import { Customer } from "../src/models";
import { API, graphqlOperation } from "aws-amplify";
import { createCustomer } from "../src/graphql/mutations";
import { listCustomers } from "../src/graphql/queries";

const Reservations = () => {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const saveCustomer = async () => {
    try {
      await API.graphql(
        graphqlOperation(createCustomer, {
          input: { name: "test", email: "nijinwork@gmail.com", gender: "male" },
        })
      );
    } catch (e) {
      alert(e.errors[0].errorType);
    }

    // DataStore.save(
    //   new Customer({
    //     name: "Kim Jong IL",
    //     email: "nijinwork@gmail.com",
    //     gender: "male",
    //   })
    // )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => console.log("ERROR"));

    // const models = await DataStore.query(Customer);
    const customers = await API.graphql(graphqlOperation(listCustomers));
    console.log(customers);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="예약 정보">
          <Stack spacing={3}>
            <TextField id="name" label="이름" variant="outlined" />
            <TextField id="email" label="이메일" variant="outlined" />
            <TextField id="reason" label="예약 목적" multiline rows={4} />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="날짜"
                  inputFormat="yyyy/MM/DD"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <FormControl fullWidth>
              <InputLabel id="time-select-label">Time</InputLabel>
              <Select
                labelId="time-select-label"
                id="time-select"
                value={time}
                label="Time"
                onChange={handleTimeChange}
              >
                <MenuItem value={8}>08:00</MenuItem>
                <MenuItem value={10}>10:00</MenuItem>
                <MenuItem value={12}>12:00</MenuItem>
                <MenuItem value={14}>14:00</MenuItem>
                <MenuItem value={16}>16:00</MenuItem>
                <MenuItem value={18}>18:00</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel id="gender-group-label">성별</FormLabel>
              <RadioGroup
                aria-labelledby="gender-group-label"
                defaultValue="female"
                name="gender-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="여자"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="남자"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <br />
          <Button
            variant="contained"
            mt={2}
            onClick={() => {
              saveCustomer();
            }}
          >
            Submit
          </Button>
        </BaseCard>

        <MyReservationList />
      </Grid>
    </Grid>
  );
};

export default Reservations;
