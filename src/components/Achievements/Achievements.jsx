import Divider from "../ui/Divider/Divider";
import Message from "../ui/Message/Message";
import Title from "../ui/Title/Title";

import {
  Quantity,
  StyledGrid,
  StyledGridItem,
  StyledType,
} from "./Achievements.styled";

const Achievements = ({ ideasList }) => {
  const countType = Object.entries(
    ideasList
      .filter((idea) => idea.completed)
      .reduce((acc, obj) => {
        const key = obj.type;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {})
  ).map(([key, quantity]) => ({ type: key, quantity }));

  return (
    <section>
      <Title>Achievements</Title>
      {!countType.length ? (
        <Message>
          You have no achievements yet, you should complete your idea
        </Message>
      ) : (
        <StyledGrid container spacing={{ sm: 2, md: 3 }} columns={{ md: 12 }}>
          {countType.map(({ type, quantity }, index) => (
            <StyledGridItem item sm={6} md={4} key={index + 1}>
              <Quantity>{quantity}</Quantity>
              <StyledType>{type}</StyledType>
            </StyledGridItem>
          ))}
        </StyledGrid>
      )}
      <Divider />
    </section>
  );
};

export default Achievements;
