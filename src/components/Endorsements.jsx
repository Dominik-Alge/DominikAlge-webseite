import { useState } from "react";

const testimonials = [
  {
    quote: "Es ist vollkommen legitim, wenn jemand nicht krampfhaft versucht, Vereinsmensch zu sein. Aber Dominik ist einfach da, wenn wir handwerkliche Hilfe beim Suuserfest brauchen – und als Ein-Mann-Fanklub an der Seitenlinie, wenn seine Frau spielt. Das ist echte Bodenhaftung.",
    name: "Stimme aus dem Rheintaler Vereinsleben",
    role: "STV Au -Mitglied",
    avatar: "⚽"
  },
  {
    quote: "Wenn bei uns am Wochenende wirklich Not am Mann war, hat Dominik nicht gezögert und angepackt. In der heutigen Arbeitswelt ist so eine Einstellung unbezahlbar. Wer über den Tellerrand und über '9 to 5' hinausdenkt, bringt genau die richtige Mentalität für die Politik mit.",
    name: "Beat K.",
    role: "Inhaber eines Gewerbebetriebs & langjähriger Partner",
    avatar: "🏢"
  },
  {
    quote: "Als Vermieter war die Zusammenarbeit mit Dominik immer extrem unkompliziert. Wenn es ein Problem gab, wurde es gelöst – ohne administrativen Leerlauf. Er hat seine Aufgabe einfach erfüllt. Genau so stelle ich mir einen pragmatischen Politiker vor.",
    name: "Marc L.",
    role: "Ehemaliger Mieter",
    avatar: "🔑"
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
        <div className="relative bg-white rounded-[40px] shadow-xl p-8 md:p-14 border border-slate-100 overflow-hidden">
          
          {/* Riesiges dekoratives Anführungszeichen im Hintergrund */}
          <span className="absolute -top-6 left-10 text-[12rem] font-serif text-orange-500/10 pointer-events-none select-none z-0">
            “
          </span>

          {/* Maskierungs-Container für die Seitwärtsbewegung */}
          <div className="relative z-10 w-full overflow-hidden">
            
            {/* Dieser Container reiht alle Testimonials nebeneinander und verschiebt sie flüssig */}
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full shrink-0 flex flex-col justify-between min-h-[220px] md:min-h-[180px] pr-2"
                >
                  {/* Das Zitat */}
                  <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed">
                    „{item.quote}“
                  </p>

                  {/* Die Person hinter dem Zitat */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-14 h-14 bg-orange-50 text-2xl flex items-center justify-center rounded-2xl border border-orange-100 shadow-inner shrink-0">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-sm text-orange-600 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Navigations-Punkte (Dots) unten rechts */}
          <div className="absolute bottom-6 right-8 md:bottom-10 md:right-14 flex gap-2 z-20">
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

