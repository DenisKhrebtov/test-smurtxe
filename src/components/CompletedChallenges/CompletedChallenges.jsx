import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";

import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import Title from "../ui/Title/Title";

import {
  StyledTableHead,
  StyledTableHeadCol,
} from "./CompletedChallenges.styled";

const rowsList = [
  {
    id: 1,
    title: "Learn how to fold a...",
    type: "Education",
    date: "Just now",
  },
  {
    id: 2,
    title: "Learn how to fold a...",
    type: "Relaxation",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Learn how to fold a...",
    type: "Sport",
    date: "A week ago",
  },
];

const CompletedChallenges = () => {
  return (
    <section>
      <Title>Completed challenges</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <StyledTableHead>
            <TableRow>
              <StyledTableHeadCol></StyledTableHeadCol>
              <StyledTableHeadCol align="center">Title</StyledTableHeadCol>
              <StyledTableHeadCol align="center">Type</StyledTableHeadCol>
              <StyledTableHeadCol align="center">When</StyledTableHeadCol>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rowsList.map(({ id, title, type, date }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: "1px" } }}
              >
                <StyledTableHeadCol component="th" scope="row">
                  {id}
                </StyledTableHeadCol>
                <StyledTableHeadCol align="center">{title}</StyledTableHeadCol>
                <StyledTableHeadCol align="center">{type}</StyledTableHeadCol>
                <StyledTableHeadCol align="center">{date}</StyledTableHeadCol>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default CompletedChallenges;
