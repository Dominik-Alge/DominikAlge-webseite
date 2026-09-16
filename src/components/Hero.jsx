import { useState, useEffect } from 'react';

export default function Hero() {
  // Array für den dynamischen Text-Wechsler
  const values = ["Freiheit.", "Solidarität.", "Verantwortung."];
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  // Automatischer Wechsel der Kernwerte alle 3 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Funktion für das weiche Scrollen zu den Abschnitten
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50/40 via-white to-slate-100/60 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text-Inhalt */}
          <div className="space-y-6">
            
            {/* Badge mit integriertem "Die Mitte"-Symbol */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm border border-orange-100">
              <span className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                Die Mitte
                {/* Das ikonische Bogen-Symbol der Partei als CSS-Shape */}
                <span className="inline-block w-2.5 h-5 border-r-[3.5px] border-t-[3.5px] border-orange-500 rounded-tr-full transform rotate-[15deg] translate-y-[-1px]" />
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-sm font-semibold text-orange-600">
                Kantonsrat St. Gallen
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              Praxis stärken.
              <br />
              Innovation fördern.
              <br />
              <span className="text-orange-500 transition-all duration-500 ease-in-out inline-block min-h-[1.2em]">
                {values[currentValueIndex]}
              </span>
            </h1>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
              Als Gruppenleiter in der Industrie kenne ich die Herausforderungen
              von Unternehmen, Mitarbeitenden und Familien aus erster Hand.
            </p>
            
            <p className="text-lg text-slate-700 max-w-xl leading-relaxed">
              Diese Erfahrungen möchte ich in den Kantonsrat St. Gallen einbringen
              und mich für einen starken Werkplatz, moderne Bildung und eine
              technologieoffene Zukunft einsetzen.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#themen"
                onClick={(e) => scrollToSection(e, 'themen')}
                className="inline-block bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Meine Themen
              </a>
              
              <a
                href="#ueber-mich"
                onClick={(e) => scrollToSection(e, 'ueber-mich')}
                className="inline-block border-2 border-slate-800 text-slate-800 font-bold px-8 py-4 rounded-2xl hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Über mich
              </a>
            </div>
          </div>

          {/* Bild-Container mit "Die Mitte"-Klammer-Rahmen */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-[440px] mt-8 lg:mt-0">
            {/* Orange Design-Klammern im Hintergrund */}
            <div className="absolute -inset-3 rounded-[48px] border-4 border-orange-500/10 pointer-events-none scale-105" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-[5px] border-l-[5px] border-orange-500 rounded-bl-[40px]" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[5px] border-r-[5px] border-orange-500 rounded-tr-[40px]" />
            
            {/* Bild-Rahmen */}
            <div className="h-[560px] w-full rounded-[40px] shadow-2xl overflow-hidden relative bg-slate-200 z-10 transform hover:scale-[1.01] transition-transform duration-300 group">
              {/* Shimmer-Effekt während das Foto lädt */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] pointer-events-none z-0" />
              
              <img 
                src="Dominik.jpg" 
                alt="Dominik Alge - Kandidat Die Mitte St. Gallen" 
                className="w-full h-full object-cover object-center relative z-10"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

