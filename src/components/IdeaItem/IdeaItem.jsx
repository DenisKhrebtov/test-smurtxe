import { Typography, Grid } from "@mui/material";
import { Item, StyledDivider } from "./IdeaItem.styled";

const IdeaItem = ({ activity, type }) => {
  return (
    <Grid item sm={6} md={3}>
      <Item>
        <Typography variant="h5" component="h3" align="center">
          {activity}
        </Typography>
        <StyledDivider />
        <Typography variant="h6" component="h3" align="center">
          {type}
        </Typography>
      </Item>
    </Grid>
  );
};

export default IdeaItem;
