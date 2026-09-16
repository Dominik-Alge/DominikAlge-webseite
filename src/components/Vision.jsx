import { useState } from "react";

export default function Vision() {
  const [selected, setSelected] = useState("bildung"); // "bildung" ist als Kern deiner Vision vorausgewählt

  return (
    <section id="vision" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Zukunft & Perspektive
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Meine Vision für St. Gallen
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ein Kanton, der sein Potenzial voll ausschöpft. Ich engagiere mich für eine Gesellschaft, 
            in der nicht die Herkunft über den Lebensweg entscheidet, sondern Fleiss, Talent und Erfindergeist.
          </p>
        </div>

        {/* Interaktive Vision-Pfeiler */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <button
            onClick={() => setSelected("bildung")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "bildung"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-white border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Höchstes Gut: Bildung
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Der verlässlichste Motor für soziale Mobilität und individuellen Aufstieg.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "bildung" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          <button
            onClick={() => setSelected("familie")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "familie"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-white border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">🏡</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Familien entlasten
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Eltern den Rücken freihalten, damit Erwerbsarbeit und Ausbildung lebbar bleiben.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "familie" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

          <button
            onClick={() => setSelected("mehrwert")}
            className={`rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left cursor-pointer border-2 flex flex-col justify-between ${
              selected === "mehrwert"
                ? "bg-orange-50/50 border-orange-500 shadow-lg"
                : "bg-white border-transparent hover:bg-slate-100/70"
            }`}
          >
            <div>
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Mehrwert generieren
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Wissen in Wertschöpfung verwandeln, um unseren Wohlstand langfristig zu sichern.
              </p>
            </div>
            <span className="mt-6 text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {selected === "mehrwert" ? "Aktiviert • Details unten" : "Klicken für Details"}
            </span>
          </button>

        </div>

        {/* DETAIL-PANELS (DYNAMISCH) */}
        <div className="mt-12">
          
          {/* DETAILS: BILDUNG */}
          {selected === "bildung" && (
            <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Soziale Mobilität durch echtes Können
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Bildung ist die wertvollste Ressource der Schweiz. Sie ermöglicht es jedem Einzelnen, sich 
                  unabhängig von den Startbedingungen weiterzuentwickeln. Meine Ziele:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Gleichwertigkeit von akademischer und beruflicher Bildung (EFZ/HF) sichern</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Durchlässigkeit des Schul- und Bildungssystems stärken</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Förderung praxisnaher Weiterbildungsmodelle neben dem Beruf</li>
                </ul>
              </div>
            </div>
          )}

          {/* DETAILS: FAMILIE */}
          {selected === "familie" && (
            <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Das Fundament entlasten – Vereinbarkeit stärken
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Damit Menschen sich weiterbilden und im Erwerbsleben voll einbringen können, braucht es 
                  verlässliche Rahmenbedingungen für Familien. Hier müssen wir ansetzen:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Ausbau flexibler, bezahlbarer Kinderbetreuungsstrukturen im Kanton</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Steuerliche Entlastung von Familien und arbeitenden Paaren</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Förderung moderner Arbeitszeitmodelle in der Industrie und KMU</li>
                </ul>
              </div>
            </div>
          )}

          {/* DETAILS: MEHRWERT */}
          {selected === "mehrwert" && (
            <div className="rounded-3xl bg-white p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Wissen sichern, Zukunft des Werkplatzes bauen
                </h3>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Langfristig sorgt nur eine top-ausgebildete Bevölkerung für den gesellschaftlichen 
                  und wirtschaftlichen Mehrwert, den wir zur Finanzierung unserer Sozialsysteme brauchen:
                </p>
                <ul className="mt-6 space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Abfedern des demografischen Wandels durch gezieltes Wissensmanagement</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Kürzere Wege beim Transfer von Forschung (z.B. KI/Technik) in die KMU-Praxis</li>
                  <li className="flex items-start gap-2.5"><span className="text-orange-500">✔</span> Standortsicherung für hochpräzise Wertschöpfung im Rheintal</li>
                </ul>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

