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
import WhitePaper from "./components/WhitePaper";
import Engagement from "./components/Engagement";

// Importiere deine DominikAI-Hauptkomponente aus dem neuen Ordner
import DominikAI from "../DominikAi/app/frontend/DominikAI"; 

function App() {
  // Mögliche Zustände: "home", "politik", "kompetenzen", "verbaende", "publikationen", "dominikAi"
  const [activeArea, setActiveArea] = useState("home");

  // Zustand für den Passwort-Schutz / Baustellen-Modus im Frontend
  const [isAiAuthorized, setIsAiAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  // Einfacher Passwort-Check fürs Frontend
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "geheim123") { 
      setIsAiAuthorized(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

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
            <Priorities setActiveArea={setActiveArea} />
            <Vision setActiveArea={setActiveArea} />
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
            <Engagement />
            <CoreValues setActiveArea={setActiveArea} />
          </div>
        )}

        {/* BEREICH 4: 📚 Publikationen */}
        {activeArea === "publikationen" && (
          <div>
            <WhitePaper />
            <Articles />
          </div>
        )}

        {/* BEREICH 5: 🤖 DominikAI (Jetzt vollkommen frei zugänglich) */}
        {activeArea === "dominikAi" && (
          <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-md flex flex-col gap-6">
            
            {/* Humorvolles Intro-Banner statt trockenem Baustellenschild */}
            <div className="text-center py-6 px-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-4xl inline-block mb-2 animate-bounce">🧠🤖</span>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
                Willkommen bei DominikAI!
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
                Grill mein digitales Ich mit deinen härtesten Fragen! Kennt meine Positionen in- und auswendig. Wenn die Antwort genial ist, war's mein Input – wenn sie Panne ist, war's ein Systemfehler.
              </p>
            </div>

            {/* Das eigentliche Chat-Interface */}
            <DominikAI />
            
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
