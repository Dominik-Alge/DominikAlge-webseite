import { useState } from "react";

// FIX: Hier wurden die geschweiften Klammern hinzugefügt, um die Funktion aus der App.jsx anzunehmen
export default function CoreValues({ setActiveArea }) {
  const [selected, setSelected] = useState("loesung"); 


     // Bombensichere Navigations-Funktion mit Fehlerdiagnose
  const handleNavigation = (areaId, elementId) => {
    console.log("Button geklickt! Versuche zu wechseln nach:", areaId);

    if (setActiveArea) {
      // 1. Bereich umschalten
      setActiveArea(areaId);
      
      // 2. Warten und scrollen
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 250);
    } else {
      // FEHLERDIAGNOSE: Das hilft uns sofort zu sehen, was schiefschäuft
      console.error("KRITISCH: 'setActiveArea' wurde nicht an CoreValues übergeben!");
      alert("Technischer Fehler: Die Verbindung zur Hauptseite fehlt. Bitte prüfe die App.jsx.");
    }
  };

    return (
    <section id="werte" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Sektions-Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm block">
            Haltung & Resonanz
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Wofür ich einstehe – und wie es wirkt
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Gute Politik und erfolgreiche Innovation brauchen ein stabiles Fundament aus Praxis, Logik und 
            Fakten. Wie stark dieser lösungsorientierte Ansatz in der Schweizer Industrie verankert ist, zeigte die 
            überwältigende Resonanz auf meinen Vortrag am **Swissmem-Industrieforum**.
          </p>
        </div>

        {/* Interaktive Werte-Auswahl */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <button
            onClick={() => setSelected("loesung")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "loesung"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-slate-50 border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Lösungsorientierung
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Probleme rational analysieren, Fakten anerkennen und messbare Resultate für die Praxis liefern.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "loesung" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          <button
            onClick={() => setSelected("resonanz")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "resonanz"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-slate-50 border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Industrieforum Resonanz
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Herausragendes Feedback von Spitzenvertretern aus Forschung, Maschinenbau und Digitalisierung.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "resonanz" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          <button
            onClick={() => setSelected("rueckgrat")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "rueckgrat"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-slate-50 border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">⚓</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Rückgrat & Konstanz
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Kein Populismus. Unbequeme Wahrheiten sachlich aussprechen, wenn sie dem grösseren Wohl dienen.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "rueckgrat" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

        </div>

        {/* DETAIL-PANELS (DYNAMISCH) */}
        <div className="mt-12">
          
          {/* DETAILS: LÖSUNGSORIENTIERUNG */}
          {selected === "loesung" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Handeln statt Reden: Mein täglicher Standard
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  In der industriellen Fertigung tolerieren wir keine Ausreden, sondern fordern Resultate. 
                  Diesen unkomplizierten Spirit will ich nach St. Gallen bringen:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Messbare Ergebnisse über parteipolitisches Taktieren stellen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Fokus auf machbare, wirtschaftliche Kompromisse für KMUs</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Effizienzsteigerung und spürbare Entlastung in administrativen Prozessen</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("politik", "warum-ich")}
                  className="pointer-events-auto inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center cursor-pointer"
                >
                  Zur Politik-Ausrichtung
                </button>
              </div>
            </div>
          )}

          {/* DETAILS: INDUSTRIEFORUM RESONANZ (DEINE EXPERTEN-STIMMEN!) */}
          {selected === "resonanz" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 space-y-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Stimmen nach dem Industrieforum (Swissmem)
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Die Resonanz zeigt deutlich: Die im Vortrag präsentierten Ansätze zur KI-gestützten Wissenssicherung werden branchenübergreifend als bahnbrechender Lösungsansatz wahrgenommen.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* UMS */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    „Erkennt starke Überschneidungen zur Digitalisierungsstrategie. Die vorgestellten Konzepte weisen die Richtung für zukünftige Maschinenlösungen und Mensch-Maschine-Interaktionen.“
                  </p>
                  <p className="mt-4 text-xs font-bold text-slate-900 border-t pt-2">
                    Christoph Plüss • CTO United Machining Solutions (STUDER, BLOHM)
                  </p>
                </div>

                                {/* inspire AG */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    „Explizites Interesse an der Skalierung von GrindAI und FactoryAI sowie der Übertragbarkeit auf allgemeine industrielle Wissensmanagement-Systeme.“
                  </p>
                  <p className="mt-4 text-xs font-bold text-slate-900 border-t pt-2">
                    Dr. Daniel Knüttel • Head Intelligent Production Systems, inspire AG
                  </p>
                </div>

                {/* INNEO */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    „Ausdrückliche Gratulation zum Projekt und den Fortschritten im Bereich Digital Twins, Simulation und dem Aufbau eines durchgängigen Digital Threads.“
                  </p>
                  <p className="mt-4 text-xs font-bold text-slate-900 border-t pt-2">
                    Roman Hüppin • INNEO Solutions (PLM & Digital Twin)
                  </p>
                </div>

                {/* Reto W. Berner */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-sm leading-relaxed">
                    „Die Umwandlung von operativem Erfahrungswissen in dauerhaftes Unternehmenswissen trifft exakt den Nerv und das brennendste Problem der Schweizer Industrie.“
                  </p>
                  <p className="mt-4 text-xs font-bold text-slate-900 border-t pt-2">
                    Reto W. Berner • Industrial Transformation Leader
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 font-medium">
                  💡 Das vollständige Fachkonzept hinter dieser Resonanz finden Sie im Publikationsbereich.
                </p>
                <button
                  onClick={() => handleNavigation("publikationen", "whitepaper")}
                  className="pointer-events-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-xs shadow-md transition duration-200 text-center cursor-pointer whitespace-nowrap"
                >
                  Zum Fach-White-Paper →
                </button>
              </div>
            </div>
          )}

          {/* DETAILS: RÜCKGRAT */}
          {selected === "rueckgrat" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Konstanz in stürmischen Zeiten
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Wer überall gefallen will, steht am Ende für gar nichts. Echte Führung bedeutet, auch bei 
                  Gegenwind Kurs zu halten und fundierte Werte transparent zu vertreten:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Transparente und ehrliche Kommunikation – auch bei unbequemen Sachthemen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Langfristige Stabilität für das Gewerbe statt kurzfristigem Aktionismus</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Verlässlicher Partner für Wirtschaft, Bildung und die Menschen im Rheintal</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("politik", "prioritaeten")}
                  className="pointer-events-auto inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center cursor-pointer"
                >
                  Meine Prioritäten sehen
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
