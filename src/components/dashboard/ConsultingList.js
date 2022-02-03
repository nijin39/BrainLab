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

const consultings = [
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
    name: "송우순",
    date: "2022/02/01",
    time: "10:00~12:00",
    pbg: "secondary.main",
    status: "예약중",
  },
  {
    id: "3",
    name: "장윤규",
    date: "2022/02/01",
    time: "12:00~14:00",
    pbg: "secondary.main",
    status: "예약중",
  },
  {
    id: "4",
    name: "김우도",
    date: "2022/02/01",
    time: "14:00~16:00",
    pbg: "secondary.main",
    status: "예약중",
  },
  {
    id: "5",
    name: "박우일",
    date: "2022/02/01",
    time: "16:00~18:00",
    pbg: "warning.main",
    status: "선입금미확인",
  },
];

const ConsultingList = () => {
  return (
    <BaseCard title="예약 리스트">
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
                Check
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consultings.map((consulting) => (
            <TableRow key={consulting.name}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {consulting.id}
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
                      {consulting.name}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {consulting.date}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {consulting.time}
                </Typography>
              </TableCell>
              <TableCell align="center">
                {/* <Typography variant="h6">${reservation.budget}k</Typography> */}
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: consulting.pbg,
                    color: "#fff",
                  }}
                  size="small"
                  label={consulting.status}
                ></Chip>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" color="success" size="small">
                  상담완료
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default ConsultingList;
