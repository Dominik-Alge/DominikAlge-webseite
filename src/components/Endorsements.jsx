import { useState } from "react";

const testimonials = [
  {
    quote: "Dominik Alge bringt genau das mit, was der Politik heute oft fehlt: Ein tiefes Verständnis für die Industrie und den Mut, Probleme mit technischer Logik statt mit Ideologie anzupacken.",
    name: "Hans-Peter M.",
    role: "Inhaber eines KMU-Betriebs im Rheintal",
    avatar: "🛠️"
  },
  {
    quote: "Aus unserer gemeinsamen Zeit in der Geschäftsprüfungskommission (GPK) weiss ich, wie präzise und verantwortungsvoll Dominik mit Finanzen umgeht. Er schaut hin, analysiert die Fakten und entscheidet im Sinne des Allgemeinwohls.",
    name: "Sarah J.",
    role: "Ehemaliges GPK-Mitglied / Lokalpolitikerin",
    avatar: "📊"
  },
  {
    quote: "Als Ausbilder und Gruppenleiter versteht Dominik es hervorragend, Menschen zu fordern und gleichzeitig zu fördern. Er übernimmt soziale Verantwortung nicht nur als Schlagwort, sondern lebt sie täglich im Betrieb.",
    name: "Thomas W.",
    role: "Fachkraft CNC-Fertigung / Arbeitskollege",
    avatar: "⚙️"
  }
];

export default function Endorsements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="unterstuetzer" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Sektions-Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Stimmen & Vertrauen
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Breite Unterstützung für klare Sachpolitik
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Wer Dominik Alge wählt, entscheidet sich für eine starke Stimme für das Gewerbe, 
            die Bildung und die Menschen in unserer Region.
          </p>
        </div>

        {/* Das interaktive Zitat-Karussell */}
        <div className="relative bg-white rounded-[40px] shadow-xl p-8 md:p-14 border border-slate-100">
          
          {/* Riesiges dekoratives Anführungszeichen im Hintergrund */}
          <span className="absolute -top-6 left-10 text-[12rem] font-serif text-orange-500/10 pointer-events-none select-none">
            “
          </span>

          <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
            {/* Das Zitat */}
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed">
              „{testimonials[activeIndex].quote}“
            </p>

            {/* Die Person hinter dem Zitat */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-50 text-2xl flex items-center justify-center rounded-2xl border border-orange-100 shadow-inner">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-orange-600 font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigations-Punkte (Dots) unten rechts */}
          <div className="absolute bottom-8 right-8 md:bottom-14 md:right-14 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? "w-8 bg-orange-500" 
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Gehe zu Zitat ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Hinweis für den Wahlkampf */}
        <p className="text-center text-xs text-slate-400 mt-8 italic">
          Möchten auch Sie Dominik Alge unterstützen? Schreiben Sie uns über das Kontaktformular.
        </p>

      </div>
    </section>
  );
}
