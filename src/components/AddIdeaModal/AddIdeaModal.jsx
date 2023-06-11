import { Modal, TextField } from "@mui/material";

import {
  ModalWindow,
  StyledFormControl,
  Wrapper,
  AddButton,
} from "./AddIdeaModal.styled";

const AddIdeaModal = ({ open, onClose, addIdea }) => {
  const handleClose = () => onClose(false);

  const addNewIdea = async (e) => {
    e.preventDefault();
    const newIdea = {
      activity: e.target[0].value,
      type: e.target[2].value,
    };
    addIdea(newIdea);
    onClose(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalWindow>
        <Wrapper>
          <StyledFormControl onSubmit={(e) => addNewIdea(e)}>
            <TextField
              id="outlined-basic"
              label="Activity"
              variant="outlined"
              required={true}
              size="small"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              required={true}
              size="small"
              fullWidth
            />
            <AddButton variant="contained" type="submit">
              Add new idea
            </AddButton>
          </StyledFormControl>
        </Wrapper>
      </ModalWindow>
    </Modal>
  );
};

export default AddIdeaModal;
