import { useState } from "react";

export default function CoreValues() {
  const [selected, setSelected] = useState("loesung"); // "loesung" ist standardmässig vorausgewählt

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
    <section id="werte" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Haltung & Prinzipien
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Wofür ich einstehe
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Gute Politik richtet ihr Fähnchen nicht nach dem aktuellen Meinungswind. Sie braucht ein 
            stabiles Fundament aus Logik, Fakten und der Bereitschaft, Verantwortung zu übernehmen.
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
                Probleme rational analysieren, Naturgesetze anerkennen und messbare Resultate liefern.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "loesung" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          <button
            onClick={() => setSelected("wissenschaft")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "wissenschaft"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-slate-50 border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Fakten & Wissenschaft
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Keine ideologischen Luftschlösser. Basis meiner Arbeit sind wissenschaftliche Erkenntnisse.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "wissenschaft" ? "Aktiviert • Details unten" : "Klicken für Details"}
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
                Kein Populismus. Unbequeme Wahrheiten aussprechen, wenn sie dem grösseren Wohl dienen.
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
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Fokus auf machbare, wirtschaftliche Kompromisse</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Effizienzsteigerung in administrativen Prozessen</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("politik", "warum-ich")}
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center cursor-pointer"
                >
                  Zur Politik-Ausrichtung
                </button>
              </div>
            </div>
          )}

          {/* DETAILS: WISSENSCHAFT */}
          {selected === "wissenschaft" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Die Naturgesetze verhandeln nicht
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Als Techniker weiss ich, dass Berechnungen stimmen müssen, damit die Praxis funktioniert. 
                  Politische Vorlagen dürfen keine Luftschlösser sein, sondern müssen der Realität standhalten:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Ideologiefreie Lösungen, die physikalisch und ökonomisch aufgehen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Gesetzgebung basierend auf harten Daten, Fakten und Praxisprüfungen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Förderung von konkreter Innovation und angewandter Forschung im Kanton</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("kompetenzen", "erfahrung")} 
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center cursor-pointer"
                >
                  Zu meinen Kompetenzen
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
                  Gegenwind Kurs zu halten und fundierte Werte zu vertreten:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Transparente Kommunikation – auch bei unbequemen Themen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Langfristige Stabilität statt kurzfristigem Aktionismus</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Verlässlicher Partner für Wirtschaft, Bildung und Gesellschaft</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("politik", "prioritaeten")}
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center cursor-pointer"
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
