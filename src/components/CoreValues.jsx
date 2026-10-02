import { useState } from "react";

// FIX: Hier wurden die geschweiften Klammern hinzugefügt, um die Funktion aus der App.jsx anzunehmen
export default function CoreValues({ setActiveArea }) {
  const [selected, setSelected] = useState("resonanz"); 


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
            Haltung & Praxis-Beweis
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Wofür ich einstehe – und wie es wirkt
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Gute Politik und echte Innovation brauchen ein stabiles Fundament aus Praxis, Logik und harten Fakten. 
            Wie stark dieser lösungsorientierte Ansatz in der Praxis zündet, zeigte die überwältigende 
            Resonanz auf meinen Vortrag am **Swissmem-Industrieforum**.
          </p>
        </div>

        {/* Interaktive Werte-Auswahl (Umsortiert: Resonanz als Nr. 1 ganz links) */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* KACHEL 1: INDUSTRIEFORUM RESONANZ */}
          <button
            onClick={() => setSelected("resonanz")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "resonanz"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-slate-50 border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Industrieforum-Resonanz
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Herausragendes Direkt-Feedback von Spitzenvertretern aus dem Schweizer Maschinenbau, der Forschung und Hochschulbildung.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "resonanz" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          {/* KACHEL 2: LÖSUNGSORIENTIERUNG */}
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
                Probleme rational an der Wurzel packen, Naturgesetze anerkennen und messbare Resultate für die Praxis liefern.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "loesung" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          {/* KACHEL 3: RÜCKGRAT & KONSTANZ */}
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
                Kein Populismus. Unbequeme Wahrheiten sachlich aussprechen, wenn sie dem grösseren Wohl unserer Gemeinden dienen.
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
                  In der industriellen Fertigung tolerieren wir keine Ausreden, sondern fordern Resultate. Diesen unkomplizierten Geist bringe ich in jede meiner Aufgaben ein:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Messbare Ergebnisse über politisches Taktieren stellen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Fokus auf machbare, wirtschaftliche Kompromisse für KMUs und das lokale Gewerbe</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Effizienzsteigerung und spürbarer Bürokratieabbau in administrativen Prozessen</li>
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

          {/* DETAILS: INDUSTRIEFORUM RESONANZ */}
          {selected === "resonanz" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 space-y-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Original-Stimmen zum Fach-Vortrag (Swissmem)
                </h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Rückmeldungen von Industrie-Führern, Wissenschaftlern und Bildungsexperten nach der Präsentation meines Wissensmanagement-Konzepts am Industrieforum.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Christoph Plüss */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-xs leading-relaxed">
                    „Ihr Wissens-Management Thema beschäftigt uns als Maschinenbauer genauso. Für uns ist klar, dass die Interaktion der Zukunft zwischen Mensch und Maschine KI-agentisch erfolgen wird. Sie als Schleifanwender und Kunde sind der Erste, den ich kenne, der so weit und entsprechend denkt. Daher möchte ich Sie anfragen, ob Sie bereit wären für einen Austausch, wie Sie sich die Schleifmaschine der Zukunft vorstellen...“
                  </p>
                  <p className="mt-4 text-[11px] font-bold text-slate-900 border-t pt-2">
                    Christoph Plüss • CTO United Machining Solutions (STUDER, BLOHM)
                  </p>
                </div>

                {/* Simon Ruff */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-xs leading-relaxed">
                    „Toller Pitch! Aus wissenschaftlichen Inputs werden konkrete Lösungen für reale Herausforderungen in Unternehmen. Vielen Dank, Dominik, für die eindrückliche Präsentation und dafür, dass du exemplarisch vorlebst, wie Wissen aufgebaut, angewendet und in nachhaltigen Nutzen für die Industrie übersetzt werden kann. Die Fachbereichsleiter waren erstaunt, dass wir Studierende wie dich haben!“
                  </p>
                  <p className="mt-4 text-[11px] font-bold text-slate-900 border-t pt-2">
                    Simon Ruff • Studiengangleiter Wirtschaftsingenieurwesen BSc, FFHS
                  </p>
                </div>

                {/* Reto W. Berner */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <p className="text-slate-700 italic text-xs leading-relaxed">
                    „Ich denke, Dein Ansatz, wie man Erfahrungswissen zu Unternehmenswissen macht, ist ein kritisches Thema, welches viele andere Firmen in der Schweiz auch haben. Kannst Du mir sagen, welche Pläne Du hast? Ist dies eine Lösung, die man auch bei anderen Firmen/Anwendungen einsetzen kann? Vielleicht sollten wir uns mal treffen.“
                  </p>
                  <p className="mt-4 text-[11px] font-bold text-slate-900 border-t pt-2">
                    Reto W. Berner • Industrial Transformation Leader
                  </p>
                </div>

                {/* Dr. Daniel Knüttel & Ernst Roth Kombi */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-slate-700 italic text-[11px] leading-relaxed border-b pb-2">
                      „Vielen Dank für den Vortrag! Fand ich sehr spannend, wir sind bei inspire auch relativ aktiv im Bereich allgemein der spanenden Bearbeitung und würde mich über einen Austausch freuen.“<br />
                      <span className="font-bold text-slate-900 text-[10px] block mt-1">— Dr. D. Knüttel, Head of Intelligent Production Systems, inspire AG</span>
                    </p>
                    <p className="text-slate-700 italic text-[11px] leading-relaxed">
                      „Danke für den spannenden Vortrag über Risikomanagement im Zusammenhang mit Fachkräften am Industrieforum. Ich möchte mich gerne mit Ihnen vernetzen.“<br />
                      <span className="font-bold text-slate-900 text-[10px] block mt-1">— Ernst Roth, Unabhängiger Verwaltungsrat & Partner oprandi & partner ag</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Unterer Banner mit Routing */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 font-medium">
                  💡 Das vollständige technische Konzept hinter dieser Resonanz finden Sie im Publikationsbereich.
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
                  Wer überall gefallen will, steht am Ende für gar nichts. Echte Führung bedeutet, auch bei Gegenwind Kurs zu halten und fundierte Werte transparent zu vertreten:
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
