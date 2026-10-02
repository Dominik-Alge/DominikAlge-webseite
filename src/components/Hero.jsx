import { useState, useEffect } from 'react';

export default function Hero({ activeArea, setActiveArea }) {
  const values = ["Freiheit.", "Solidarität.", "Verantwortung."];
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  const welcomeText = "Hoi, schüa das du do beasch 👋 Wähle den Bereich, der dich interessiert:";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [values.length]);

  useEffect(() => {
    if (charIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + welcomeText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, welcomeText]);

  // Definition der 4 Bereiche mit Kurznamen für die Menüleiste
  const categories = [
    {
      id: "politik",
      title: "🗳️ Politik",
      shortTitle: "🗳️ Politik",
      subtitle: "Kandidat Kantonsrat St. Gallen – Wahlkreis Rheintal / Au",
      color: "hover:border-orange-500 hover:bg-orange-50/30"
    },
    {
      id: "beruf",
      title: "🏭 Beruf & Fachthemen",
      shortTitle: "🏭 Beruf",
      subtitle: "Führung, Berufsbildung, Wissensmanagement, KI, Industrie 4.0",
      color: "hover:border-blue-600 hover:bg-blue-50/30"
    },
    {
      id: "verbaende",
      title: "🤝 Verbände & Engagement",
      shortTitle: "🤝 Verbände",
      subtitle: "GPK, Swissmem, Swissmechanic, SwissSkills, Berufsbildung",
      color: "hover:border-emerald-600 hover:bg-emerald-50/30"
    },
    {
      id: "publikationen",
      title: "📚 Publikationen",
      shortTitle: "📚 Publikationen",
      subtitle: "White Paper, Industrieforum-Vorträge, LinkedIn-Artikel, Fachbeiträge",
      color: "hover:border-amber-600 hover:bg-amber-50/30"
    }
  ];

  // WENN EIN BEREICH AKTIV IST: Zeige die kompakte Navigations-Leiste oben an
  if (activeArea !== "home") {
    return (
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xl font-black text-slate-900 tracking-tight">Dominik Alge</span>
            <span className="hidden md:inline-block mx-3 text-slate-300">|</span>
            <span className="hidden md:inline-block text-sm font-medium text-slate-500">Industrie • Bildung • Innovation • Verantwortung</span>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto justify-center py-1">
            <button 
              onClick={() => setActiveArea("home")}
              className="px-4 py-2 text-sm font-semibold rounded-xl text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-all"
            >
              ← Übersicht
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveArea(cat.id)}
                className={`px-3 py-2 text-sm font-bold rounded-xl border transition-all whitespace-nowrap ${
                  activeArea === cat.id 
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </header>
    );
  }

  // WENN DIE STARTSEITE AKTIV IST: Die vollwertige Weichensteller-Landingpage
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50/40 via-white to-slate-100/40 flex items-center py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Linke Spalte: Slogan & Die 4 Wahlbereiche */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Schreibmaschinen-Begrüssung */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl shadow-sm min-h-[46px] w-full lg:w-auto">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <p className="text-sm md:text-base text-slate-800 font-medium tracking-wide">
                {displayedText}
                {charIndex < welcomeText.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-orange-500 ml-1 animate-pulse" />
                )}
              </p>
            </div>

            {/* Haupt-Slogan */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Dominik Alge <br />
                <span className="text-orange-500 transition-all duration-500 ease-in-out inline-block min-h-[1.2em] text-3xl lg:text-5xl mt-2 font-extrabold">
                  {values[currentValueIndex]}
                </span>
              </h1>
              <p className="text-md font-semibold tracking-wider text-slate-500 uppercase">
                Industrie | Bildung | Innovation | Verantwortung
              </p>
            </div>

            {/* Grid-Auswahl (Die 4 Kacheln) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveArea(cat.id)}
                  className={`text-left p-5 bg-white border-2 border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${cat.color}`}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center justify-between">
                    {cat.title}
                    <span className="text-xs text-slate-400 font-normal">Öffnen →</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Dein Profilbild */}
          <div className="lg:col-span-5 justify-self-center lg:justify-self-end w-full max-w-[380px]">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[40px] border-4 border-orange-500/10 pointer-events-none scale-105" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-4 border-l-4 border-orange-500 rounded-bl-[30px]" />
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-orange-500 rounded-tr-[30px]" />
              
              <div className="w-full aspect-[3/4] rounded-[32px] shadow-xl overflow-hidden relative bg-slate-100 z-10">
                <img 
                  src="/Dominik.jpg" 
                  alt="Dominik Alge" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



