import { Typography, Grid } from "@mui/material";

import Divider from "../ui/Divider/Divider";

import {
  Item,
  HoverWrapper,
  StyledPrimaryBtn,
  StyledSecondaryBtn,
} from "./IdeaItem.styled";

const IdeaItem = ({
  activity,
  type,
  id,
  hover,
  margin,
  deleteIdea,
  selectIdea,
  selected,
  addToCompleted,
}) => {
  return (
    <Grid item sm={6} md={3}>
      <Item hover={hover} margin={margin}>
        <Typography variant="h5" component="h3" align="center">
          {activity}
        </Typography>
        <Divider />
        <Typography variant="h6" component="p" align="center">
          {type}
        </Typography>

        <HoverWrapper>
          {selected ? (
            <StyledPrimaryBtn
              variant="contained"
              onClick={() => addToCompleted(id, { completed: true })}
            >
              Add to completed
            </StyledPrimaryBtn>
          ) : (
            <StyledPrimaryBtn
              variant="contained"
              onClick={() => selectIdea(id, { selected: true })}
            >
              Add to my list
            </StyledPrimaryBtn>
          )}
          <StyledSecondaryBtn
            variant="outlined"
            type="button"
            onClick={() => deleteIdea(id)}
          >
            Delete
          </StyledSecondaryBtn>
        </HoverWrapper>
      </Item>
    </Grid>
  );
};

export default IdeaItem;
