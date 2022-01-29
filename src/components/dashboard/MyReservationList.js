import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import Button from "@mui/material/Button";
import BaseCard from "../baseCard/BaseCard";

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

const MyReservationList = () => {
  return (
    <BaseCard title="나의 예약 리스트">
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
                Change
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="textSecondary" variant="h6">
                Cancel
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
                <Button variant="contained" color="success" size="small">
                  예약변경
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" color="error" size="small">
                  예약취소
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default MyReservationList;
