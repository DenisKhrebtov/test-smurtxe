import { HeadingStyled } from "./Title.styled";

const Title = ({ children }) => (
  <HeadingStyled variant="h2" component="h2" align="center">
    {children}
  </HeadingStyled>
);

export default Title;
