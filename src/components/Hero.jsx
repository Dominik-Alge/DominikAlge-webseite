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

  return (
    <>
      {/* 1. SEKTION: VOR DEM HERO (Pre-Header) */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3.5 px-4 shadow-md font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm sm:text-base">
          <span>✨ Herzlich willkommen und vielen Dank für Ihr Interesse.</span>
        </div>
      </div>

      {/* 2. SEKTION: HERO-BEREICH */}
      <section className="min-h-[calc(100vh-52px)] bg-gradient-to-br from-orange-50/50 via-white to-slate-100/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text-Inhalt */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-white px-4 py-2 shadow-sm text-sm font-semibold text-orange-600 border border-orange-100">
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

              <p className="text-xl font-semibold text-slate-800 max-w-xl">
                Gruppenleiter, Unternehmer und Ausbilder. Seit über 20 Jahren in der Rheintaler Industrie tätig.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                {/* SAUBERER HTML-LINK OHNE ONCLICK */}
                <a
                  href="#warum-ich"
                  className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Meine Kernanliegen
                </a>

                {/* SAUBERER HTML-LINK OHNE ONCLICK */}
                <a
                  href="#ueber-mich"
                  className="inline-block border-2 border-slate-800 text-slate-800 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200 text-center"
                >
                  Über mich
                </a>
              </div>
            </div>

            {/* Bild-Container mit "Die Mitte"-Klammer-Effekt */}
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
    </>
  );
}
