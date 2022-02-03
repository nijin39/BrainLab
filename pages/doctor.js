import React, { useState } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const reservations = [
  {
    id: "1",
    name: "김종일",
    date: "2022/02/01",
    time: "08:00~10:00",
    pbg: "secondary.main",
    status: "예약중",
  },
  {
    id: "2",
    name: "김종일",
    date: "2022/02/01",
    time: "10:00~12:00",
    pbg: "secondary.main",
    status: "예약중",
  },
];

const Doctor = () => {
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
        <BaseCard title="의사 목록">
          <Table
            aria-label="simple table"
            sx={{
              mt: 3,
              whiteSpace: "nowrap",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Time
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography color="textSecondary" variant="h6">
                    Status
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography color="textSecondary" variant="h6">
                    Remove
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.name}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {reservation.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "600",
                          }}
                        >
                          {reservation.name}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      {reservation.date}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      {reservation.time}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {/* <Typography variant="h6">${reservation.budget}k</Typography> */}
                    <Chip
                      sx={{
                        pl: "4px",
                        pr: "4px",
                        backgroundColor: reservation.pbg,
                        color: "#fff",
                      }}
                      size="small"
                      label={reservation.status}
                    ></Chip>
                  </TableCell>
                  <TableCell align="center">
                    <DeleteOutlineIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Box sx={{ marginTop: "20px" }}>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
          </Grid>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Doctor;
