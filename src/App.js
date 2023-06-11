import { useEffect, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Achievements from "./components/Achievements/Achievements";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";
import FreshIdeasList from "./components/FreshIdeasList/FreshIdeasList";
import MyIdeasList from "./components/MyIdeasList/MyIdeasList";
import Container from "./components/ui/Container/Container";

import Spinner from "./components/ui/Spinner";

function App() {
  const [ideas, setIdeas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://test-smurtxe-back-production.up.railway.app/api/ideas"
      );
      setIdeas(response.data.data.ideas);
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  const addNewIdea = async (newIdea) => {
    try {
      const response = await axios.post(
        "http://test-smurtxe-back-production.up.railway.app/api/ideas",
        newIdea
      );
      toast.success("Your idea successfully added");
      fetchData();
      return response;
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  const deleteIdea = async (id) => {
    try {
      const response = await axios.delete(
        `http://test-smurtxe-back-production.up.railway.app/api/ideas/${id}`
      );
      fetchData();
      toast.info("Idea successfully deleted");
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Something is wrong");
    }
  };

  const selectIdea = async (id, data) => {
    try {
      const response = await axios.patch(
        `http://test-smurtxe-back-production.up.railway.app/api/ideas/${id}/selected`,
        data
      );
      fetchData();
      toast.info("Idea added to your list");
      return response;
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  const addToCompleted = async (id, data) => {
    try {
      const response = await axios.patch(
        `http://test-smurtxe-back-production.up.railway.app/api/ideas/${id}/completed`,
        data
      );
      fetchData();
      toast.success("Congratulation! Your completed your idea!");
      return response;
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      toast.error("Something is wrong");
    }
  }, []);

  return !ideas.length ? (
    <Spinner />
  ) : (
    <Container>
      <FreshIdeasList
        ideasList={ideas}
        addNewIdea={addNewIdea}
        deleteIdea={deleteIdea}
        selectIdea={selectIdea}
      />
      <MyIdeasList
        ideasList={ideas}
        addToCompleted={addToCompleted}
        deleteIdea={deleteIdea}
      />
      <Achievements ideasList={ideas} />
      <CompletedChallenges ideasList={ideas} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}

export default App;
