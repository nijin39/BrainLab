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
import { Auth } from "aws-amplify";
import { createCustomer, createReservation } from "../src/graphql/mutations";
import {
  listCustomers,
  getCustomer,
  itemsByNameDateTime,
} from "../src/graphql/queries";

const Reservations = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [gender, setGender] = useState("female");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleReason = (event) => {
    setReason(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.format("YYYY-MM-DD"));
  };

  const saveCustomer = async () => {
    try {
      // await API.graphql(
      //   graphqlOperation(createCustomer, {
      //     input: { name: "test", email: "nijinwork@gmail.com", gender: "male" },
      //   })
      // );
      const currentUser = await Auth.currentAuthenticatedUser();

      const customer = await API.graphql(
        graphqlOperation(getCustomer, {
          name: currentUser.username,
        })
      );

      // const reservation = await API.graphql(
      //   graphqlOperation(createReservation, {
      //     input: {
      //       customerID: customer.data.getCustomer.id,
      //       name: name,
      //       email: email,
      //       reason: reason,
      //       gender: gender,
      //       reservationDate: date,
      //       reservationTime: time,
      //     },
      //   })
      // );

      const reservations = await API.graphql(
        graphqlOperation(itemsByNameDateTime, {
          name: "김종일",
          reservationDateReservationTime: {
            eq: { 
              reservationDate: "2022-02-09",
              reservationTime: "08:00:00" 
            },
          },
        })
      );

      console.log(reservations);
    } catch (e) {
      //alert(e.errors[0].errorType);
      console.error(e);
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
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="예약 정보">
          <Stack spacing={3}>
            <TextField
              id="name"
              label="이름"
              variant="outlined"
              onChange={handleName}
            />
            <TextField
              id="email"
              label="이메일"
              variant="outlined"
              onChange={handleEmail}
            />
            <TextField
              id="reason"
              label="예약 목적"
              multiline
              rows={4}
              onChange={handleReason}
            />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="날짜"
                  inputFormat="yyyy/MM/DD"
                  value={date}
                  onChange={handleDate}
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
                onChange={handleTime}
              >
                <MenuItem value={"08:00:00"}>08:00</MenuItem>
                <MenuItem value={"10:00:00"}>10:00</MenuItem>
                <MenuItem value={"12:00:00"}>12:00</MenuItem>
                <MenuItem value={"14:00:00"}>14:00</MenuItem>
                <MenuItem value={"16:00:00"}>16:00</MenuItem>
                <MenuItem value={"18:00:00"}>18:00</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel id="gender-group-label">성별</FormLabel>
              <RadioGroup
                aria-labelledby="gender-group-label"
                defaultValue="female"
                name="gender-group"
                value={gender}
                onChange={handleGender}
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
