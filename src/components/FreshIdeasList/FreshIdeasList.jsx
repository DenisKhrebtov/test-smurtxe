import { Grid } from "@mui/material";
import Title from "../ui/Title/Title";
import Divider from "../ui/Divider/Divider";

import IdeaItem from "../IdeaItem/IdeaItem";
import { AddButton } from "./FreshIdeasList.styled";
import AddIdeaModal from "../AddIdeaModal/AddIdeaModal";
import { useState } from "react";

const FreshIdeasList = ({ ideasList, addIdea }) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Title>Choose fresh ideas to do</Title>
      <Grid container spacing={{ sm: 2, md: 4 }} columns={{ md: 12 }}>
        {ideasList.map(({ _id, activity, type }) => (
          <IdeaItem
            key={_id}
            activity={activity}
            type={type}
            hover={"scale(1.1)"}
          />
        ))}
        <Grid item sm={6} md={3}>
          <AddButton onClick={() => setOpen(true)}>+</AddButton>
        </Grid>
      </Grid>
      <Divider />
      {open && <AddIdeaModal open={open} onClose={setOpen} addIdea={addIdea} />}
    </section>
  );
};

export default FreshIdeasList;
