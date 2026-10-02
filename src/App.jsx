import { useState } from "react";
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
import Datenschutz from "./components/Datenschutz";
import Articles from "./components/Articles";

function App() {
  // Mögliche Zustände: "home", "politik", "beruf", "verbaende", "publikationen"
  const [activeArea, setActiveArea] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Das Hero erhält die Steuerungs-Funktion und den aktuellen Zustand */}
        <Hero activeArea={activeArea} setActiveArea={setActiveArea} />

        {/* BEREICH 1: 🗳️ Politik */}
        {activeArea === "politik" && (
          <div>
            <WhyICandidate />
            <PoliticalTopics />
            <Priorities />
            <Vision />
            <Endorsements />
          </div>
        )}

        {/* BEREICH 2: 🏭 Kompetenzen & Erfahrung */}
        {activeArea === "kompetenzen" && (
          <div>
            <AboutMe />
            <MyExperience />
          </div>
        )}

        {/* BEREICH 3: 🤝 Verbände & Engagement */}
        {activeArea === "verbaende" && (
          <div>
            <CoreValues />
          </div>
        )}

        {/* BEREICH 4: 📚 Publikationen */}
        {activeArea === "publikationen" && (
          <div>
            <Articles />
          </div>
        )}
      </div>

      {/* Globale Sektionen, die immer ganz unten sichtbar sein sollen */}
      {activeArea !== "home" && (
        <>
          <Contact />
          <Datenschutz />
        </>
      )}
    </div>
  );
}

export default App;

