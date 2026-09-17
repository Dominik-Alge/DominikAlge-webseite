import { useState, useEffect } from 'react';

export default function Hero() {
  // 1. Core-Werte für die Hauptüberschrift
  const values = ["Freiheit.", "Solidarität.", "Verantwortung."];
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  // 2. Schreibmaschinen-Effekt für die Begrüssung
  const welcomeText = "Hoi, schüa das du do beasch und di für mini Kandidatur interessierst 👋";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Intervall für den automatischen Wechsel der Kernwerte (3 Sekunden)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Effekt für den Schreibmaschinen-Schrifteffekt beim Laden der Seite
  useEffect(() => {
    if (charIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + welcomeText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 15); // 40ms pro Buchstabe – fühlt sich natürlich und flüssig an
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50/50 via-white to-slate-100/50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text-Inhalt */}
          <div className="space-y-8">
            
            {/* UNÜBERSEHBAR: Widget mit animiertem Schreibmaschinen-Text */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/60 px-5 py-2.5 rounded-2xl shadow-sm min-h-[46px]">
              {/* Pulsierender Live-Punkt signalisiert Aktualität */}
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              
              {/* Text mit blinkendem Schreibmaschinen-Cursor */}
              <p className="text-sm md:text-base text-slate-800 font-medium tracking-wide">
                {displayedText}
                {charIndex < welcomeText.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-orange-500 ml-1 animate-pulse vertical-middle" />
                )}
              </p>
            </div>

            <div className="space-y-6">
              <span className="block w-fit rounded-full bg-white px-4 py-2 shadow-sm text-sm font-semibold text-orange-600 border border-orange-100">
                Dominik Alge – Kandidat Kantonsrat St. Gallen | Wahlkreis Rheintal / Au
              </span>

              <div className="space-y-2">
                <p className="text-xl font-bold uppercase tracking-wider text-orange-500">
                  Von der Werkbank in die Verantwortung
                </p>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
                  Praxis stärken.
                  <br />
                  Innovation fördern.
                  <br />
                  <span className="text-orange-500 transition-all duration-500 ease-in-out inline-block min-h-[1.2em]">
                    {values[currentValueIndex]}
                  </span>
                </h1>
              </div>

              <p className="text-xl font-semibold text-slate-800 max-w-xl leading-relaxed">
                Gruppenleiter, Unternehmer und Ausbilder. Seit über 20 Jahren in der Rheintaler Industrie tätig.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#warum-ich"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Meine Kernanliegen
              </a>

              <a
                href="#ueber-mich"
                className="inline-block border-2 border-slate-800 text-slate-800 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Über mich
              </a>
            </div>
          </div>

          {/* Bild-Container */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-[450px]">
            <div className="absolute -inset-3 rounded-[48px] border-4 border-orange-500/20 pointer-events-none scale-105" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-orange-500 rounded-bl-[40px]" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-orange-500 rounded-tr-[40px]" />
            
            <div className="h-[550px] w-full rounded-[40px] shadow-2xl overflow-hidden relative bg-slate-100 z-10 transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                src="/Dominik.jpg" 
                alt="Dominik Alge – Kandidat Kantonsrat St. Gallen - Wahlkreis Rheintal / Au" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
