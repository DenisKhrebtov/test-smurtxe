import { Modal, TextField } from "@mui/material";

import {
  ModalWindow,
  StyledFormControl,
  Wrapper,
  AddButton,
} from "./AddIdeaModal.styled";

const AddIdeaModal = ({ open, onClose, addNewIdea }) => {
  const handleClose = () => onClose(false);

  const addIdea = async (e) => {
    e.preventDefault();

    if (!e.target[0].value && !e.target[2].value) return;

    const newIdea = {
      activity: e.target[0].value,
      type: e.target[2].value,
    };
    await addNewIdea(newIdea);
    onClose(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalWindow>
        <Wrapper>
          <StyledFormControl onSubmit={(e) => addIdea(e)}>
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
