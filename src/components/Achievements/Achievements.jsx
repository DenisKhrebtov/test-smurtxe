import Divider from "../ui/Divider/Divider";
import Title from "../ui/Title/Title";

import {
  Quantity,
  StyledGrid,
  StyledGridItem,
  StyledType,
} from "./Achievements.styled";

const achievementsList = [
  {
    id: 1,
    quantity: 1,
    type: "Recreational",
  },
  {
    id: 2,
    quantity: 3,
    type: "Social",
  },
  {
    id: 3,
    quantity: 5,
    type: "Education",
  },
  {
    id: 4,
    quantity: 3,
    type: "Sport",
  },
  {
    id: 5,
    quantity: 11,
    type: "Relaxation",
  },
];

const Achievements = () => {
  return (
    <section>
      <Title>Achievements</Title>
      <StyledGrid container spacing={{ sm: 2, md: 3 }} columns={{ md: 12 }}>
        {achievementsList.map(({ id, type, quantity }) => (
          <StyledGridItem item sm={6} md={4} key={id}>
            <Quantity>{quantity}</Quantity>
            <StyledType>{type}</StyledType>
          </StyledGridItem>
        ))}
      </StyledGrid>
      <Divider />
    </section>
  );
};

export default Achievements;
