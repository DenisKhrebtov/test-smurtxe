import { Typography, Grid } from "@mui/material";
import { Item } from "./IdeaItem.styled";
import Divider from "../ui/Divider/Divider";

const IdeaItem = ({ activity, type, hover, margin }) => {
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
      </Item>
    </Grid>
  );
};

export default IdeaItem;
