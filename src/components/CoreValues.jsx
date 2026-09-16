import { useState } from "react";

export default function CoreValues() {
  const [selected, setSelected] = useState("loesung"); // "loesung" ist standardmässig vorausgewählt

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
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Sachzwänge vor Parteiideologie stellen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Fokus auf machbare, wirtschaftliche Kompromisse</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Effizienzsteigerung in administrativen Prozessen</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#themen"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center"
                >
                  Zu meinen Themen
                </a>
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
                  Politische Vorlagen müssen denselben Belastungsproben standhalten:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Technologieoffene Ansätze (z.B. bei Energie- und Digitalfragen)</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Gesetzgebung basierend auf harten Daten und Studien</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Förderung von angewandter Forschung und Entwicklung im Kanton</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#themen"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center"
                >
                  Faktenbasiert handeln
                </a>
              </div>
            </div>
          )}

          {/* DETAILS: RÜCKGRAT */}
          {selected === "rueckgrat" && (
            <div className="rounded-3xl bg-slate-50 p-8 lg:p-10 shadow-inner border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Konstanz für das grössere Wohl
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Wer jede Woche seine Meinung ändert, um Umfragen zu gefallen, schafft kein Vertrauen. 
                  Manchmal erfordern nachhaltige Erfolge mutige und unbequeme Schritte:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Berechenbare, langfristige Finanz- und Sachpolitik</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Das langfristige Gemeinwohl über kurzfristige Schlagzeilen stellen</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Wort halten – auch wenn der politische Gegenwind zunimmt</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#ueber-mich"
                  className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition duration-200 text-center"
                >
                  Mehr über meine Haltung
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
