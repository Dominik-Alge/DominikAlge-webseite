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
import DominikAI from "./DominikAI/frontend/DominikAI"; 

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

        {/* BEREICH 5: 🤖 DominikAI mit PW-Schutz */}
        {activeArea === "dominikAi" && (
          <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-md">
            {!isAiAuthorized ? (
              <div className="text-center py-12">
                <span className="text-5xl">🚧</span>
                <h2 className="text-2xl font-bold text-slate-800 mt-4 mb-2">DominikAI befindet sich im Aufbau</h2>
                <p className="text-slate-600 mb-6">Dieser Bereich ist momentan nur für Entwickler zugänglich.</p>
                
                <form onSubmit={handlePasswordSubmit} className="max-w-sm mx-auto flex flex-col gap-3">
                  <input 
                    type="password" 
                    placeholder="Entwickler-Passwort eingeben" 
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  />
                  <button 
                    type="submit" 
                    className="bg-slate-800 text-white py-2 rounded-lg font-semibold hover:bg-slate-700 transition"
                  >
                    Freischalten
                  </button>
                  {authError && <p className="text-red-500 text-sm mt-1">Falsches Passwort. Zugriff verweigert.</p>}
                </form>
              </div>
            ) : (
              <DominikAI />
            )}
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
