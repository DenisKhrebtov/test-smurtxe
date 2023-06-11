import { useEffect, useState } from "react";
import Achievements from "./components/Achievements/Achievements";
import CompletedChallenges from "./components/CompletedChallenges/CompletedChallenges";
import FreshIdeasList from "./components/FreshIdeasList/FreshIdeasList";
import MyIdeasList from "./components/MyIdeasList/MyIdeasList";
import Container from "./components/ui/Container/Container";
import axios from "axios";
import Spinner from "./components/ui/Spinner";

function App() {
  const [ideas, setIdeas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://test-smurtxe-back-production.up.railway.app/api/ideas"
      );
      setIdeas(response.data.data.ideas);
      console.log(response.data.data.ideas);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewIdea = async (newIdea) => {
    try {
      const response = await axios.post(
        "https://test-smurtxe-back-production.up.railway.app/api/ideas",
        newIdea
      );

      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !ideas.length ? (
    <Spinner />
  ) : (
    <Container>
      <FreshIdeasList ideasList={ideas} addIdea={addNewIdea} />
      <MyIdeasList />
      <Achievements />
      <CompletedChallenges />
    </Container>
  );
}

export default App;
