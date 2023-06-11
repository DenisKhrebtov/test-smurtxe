import { useState } from "react";

import { Grid } from "@mui/material";
import Title from "../ui/Title/Title";
import Divider from "../ui/Divider/Divider";

import IdeaItem from "../IdeaItem/IdeaItem";
import AddIdeaModal from "../AddIdeaModal/AddIdeaModal";

import { AddButton } from "./FreshIdeasList.styled";

const FreshIdeasList = ({ ideasList, addNewIdea, deleteIdea, selectIdea }) => {
  const [open, setOpen] = useState(false);

  const filteredList = ideasList.filter((idea) => !idea.selected);

  return (
    <section>
      <Title>Choose fresh ideas to do</Title>
      <Grid container spacing={{ sm: 2, md: 4 }} columns={{ md: 12 }}>
        {filteredList.map(({ _id, activity, type, selected }) => (
          <IdeaItem
            key={_id}
            id={_id}
            activity={activity}
            type={type}
            hover={"scale(1.1)"}
            deleteIdea={deleteIdea}
            selectIdea={selectIdea}
            selected={selected}
          />
        ))}
        <Grid item sm={6} md={3}>
          <AddButton onClick={() => setOpen(true)}>+</AddButton>
        </Grid>
      </Grid>
      <Divider />
      {open && (
        <AddIdeaModal open={open} onClose={setOpen} addNewIdea={addNewIdea} />
      )}
    </section>
  );
};

export default FreshIdeasList;
