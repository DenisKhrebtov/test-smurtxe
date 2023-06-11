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
import dateFormate from "../../utils/dateFormate";

const CompletedChallenges = ({ ideasList }) => {
  const filteredList = ideasList.filter((idea) => idea.completed);

  console.log(filteredList);

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
            {filteredList.map(({ _id, activity, type, updatedAt }, index) => (
              <TableRow
                key={_id}
                sx={{ "&:last-child td, &:last-child th": { border: "1px" } }}
              >
                <StyledTableHeadCol component="th" scope="row">
                  {index + 1}
                </StyledTableHeadCol>
                <StyledTableHeadCol align="center">
                  {activity}
                </StyledTableHeadCol>
                <StyledTableHeadCol align="center">{type}</StyledTableHeadCol>
                <StyledTableHeadCol align="center">
                  {dateFormate(updatedAt)}
                </StyledTableHeadCol>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default CompletedChallenges;
