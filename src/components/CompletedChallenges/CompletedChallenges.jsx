import {
  TableContainer,
  Table,
  TableRow,
  Paper,
  TableBody,
} from "@mui/material";

import dateFormate from "../../utils/dateFormate";

import Title from "../ui/Title/Title";
import Message from "../ui/Message/Message";

import {
  StyledTableHead,
  StyledTableHeadCol,
} from "./CompletedChallenges.styled";

const CompletedChallenges = ({ ideasList }) => {
  const filteredList = ideasList.filter((idea) => idea.completed);

  return (
    <section>
      <Title>Completed challenges</Title>
      {!filteredList.length ? (
        <Message>No challenges completed</Message>
      ) : (
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
      )}
    </section>
  );
};

export default CompletedChallenges;
