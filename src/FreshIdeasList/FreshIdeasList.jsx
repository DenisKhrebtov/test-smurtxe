import { Grid } from "@mui/material";
import Title from "../ui/Title/Title";
import { StyledContainer, StyledDivider } from "./FreshIdeasList.styled";
import IdeaItem from "../IdeaItem/IdeaItem";

const ideasList = [
  { id: 1, activity: "Learn how to fold a paper crane", type: "Education" },
  { id: 2, activity: "Make a bucket list", type: "Busywork" },
  {
    id: 3,
    activity: "Do something you used to do as a kid",
    type: "Relaxation",
  },
  {
    id: 4,
    activity: "Listen to your favorite album",
    type: "Music",
  },
];

const FreshIdeasList = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Title>Choose fresh ideas to do</Title>
      <Grid container spacing={{ sm: 2, md: 4 }} columns={{ md: 12 }}>
        {ideasList.map(({ id, activity, type }) => (
          <IdeaItem key={id} activity={activity} type={type} />
        ))}
      </Grid>
      <StyledDivider />
    </StyledContainer>
  );
};

export default FreshIdeasList;
