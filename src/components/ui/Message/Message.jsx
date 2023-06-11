import { TextMessage } from "./Message.styled";

const Message = ({ children }) => (
  <TextMessage variant="p" component="p" align="center">
    {children}
  </TextMessage>
);

export default Message;
