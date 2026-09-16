import Hero from "./components/Hero";
import WhyICandidate from "./components/WhyICandidate";
import PoliticalTopics from "./components/PoliticalTopics";
import CoreValues from "./components/CoreValues";
import Vision from "./components/Vision";
import MyExperience from "./components/MyExperience";
import Priorities from "./components/Priorities";
import AboutMe from "./components/AboutMe";
import Endorsements from "./components/Endorsements";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhyICandidate />
      <MyExperience />
      <PoliticalTopics />
      <Endorsements />
      <CoreValues />
      <Vision />
      <Priorities />
      <Contact />
    </>
  );
}

export default App;
