// components/Priorities.jsx
import { useState } from "react";

const priorityList = [
  {
    num: "01",
    icon: "🔌",
    title: "KMU & Werkplatz von Fesseln befreien",
    subtitle: "Bürokratie-Stopp für das Gewerbe",
    description: "Unsere Unternehmen dürfen ihre Energie nicht im administrativen Leerlauf verlieren. Ich fordere einen konsequenten Bürokratieabbau bei kantonalen Bewilligungsverfahren und die steuerliche Entlastung von KMU, die in den Standort St. Gallen investieren.",
    actionText: "Zu meinen Verbänden", // Text optimiert für Navigation
    targetArea: "verbaende",
    targetElement: "werte"
  },
  {
    num: "02",
    icon: "📈",
    title: "Berufslehre & HF-Abschlüsse stärken",
    subtitle: "Gleichwertigkeit im Bildungssystem",
    description: "Der Fachkräftemangel wird an der Werkbank gelöst, nicht im Hörsaal. Ich setze mich für die massive Aufwertung des dualen Bildungssystems ein. Höhere Fachschulen (HF) müssen finanziell und gesellschaftlich den Universitäten komplett gleichgestellt werden.",
    actionText: "Zu meinen Kompetenzen", // Text optimiert für Navigation
    targetArea: "kompetenzen",
    targetElement: "ueber-mich"
  },
  {
    num: "03",
    icon: "🤖",
    title: "Technologieoffenheit statt Verbote",
    subtitle: "Fortschritt durch Praxis-Innovation",
    description: "Die Digitalisierung und der demografische Wandel erfordern intelligente Systeme, keine neuen Regulierungswellen. Ob KI-gestütztes Wissensmanagement auf dem Shopfloor oder moderne Energietechnologien: St. Gallen muss zum Vorreiter für angewandte Innovation werden.",
    actionText: "Zu meinen Publikationen", // Text optimiert für Navigation
    targetArea: "publikationen",
    targetElement: "whitepaper" // Oder die entsprechende ID in Articles.jsx (z.B. "articles" oder leer lassen für Top-Scroll)
  }
];

// WICHTIG: Wir fangen { setActiveArea } hier sauber als Prop ab
export default function Priorities({ setActiveArea }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Technisch optimierte Hilfsfunktion für bereichsübergreifende Sprünge
  const handleNavigation = (areaId, elementId) => {
    console.log("Prioritäten-Kachel geklickt! Wechsle nach:", areaId);

    if (typeof setActiveArea === "function") {
      // 1. In die gewünschte Welt umschalten
      setActiveArea(areaId);
      
      // 2. Dem Browser Zeit zum Rendern geben, dann sanft scrollen
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback, falls die ID auf der Zielseite (noch) nicht im DOM existiert
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 250);
    } else {
      console.warn("setActiveArea fehlt als Prop in Priorities.jsx");
    }
  };

  return (
    <section id="prioritaeten" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtile technologische Hintergrund-Dekoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Sektions-Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-12">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm block">
              Fokus & Agenda
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Meine drei Prioritäten <br />für den Kantonsrat
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-slate-400 max-w-sm text-base leading-relaxed">
            Kein politisches Wunschkonzert, sondern messbare Kernbereiche, die ich mit oberster Priorität anpacken werde.
          </p>
        </div>

        {/* Die Kacheln-Matrix */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {priorityList.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <button
                key={item.num}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleNavigation(item.targetArea, item.targetElement)}
                className={`w-full text-left relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 flex flex-col justify-between group min-h-[420px] pointer-events-auto cursor-pointer ${
                  isHovered
                    ? "bg-slate-800/80 border-orange-500 shadow-2xl shadow-orange-500/5 -translate-y-2"
                    : "bg-slate-800/40 border-slate-800"
                }`}
              >
                {/* Obere Sektion: Nummerierung & Icon */}
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className={`text-5xl font-black transition-colors duration-300 ${
                      isHovered ? "text-orange-500" : "text-slate-700"
                    }`}>
                      {item.num}
                    </span>
                    <div className="text-4xl bg-slate-800 p-3 rounded-2xl group-hover:bg-orange-500/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Titel & Subtitel */}
                  <div className="mt-8">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Beschreibung */}
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Untere Sektion: Action-Indikator */}
                <div className="w-full mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold tracking-wider uppercase">
                  <span className={isHovered ? "text-white" : "text-slate-500"}>
                    {item.actionText}
                  </span>
                  <span className={`text-base transition-transform duration-300 ${
                    isHovered ? "text-orange-500 translate-x-1" : "text-slate-600"
                  }`}>
                    →
                  </span>
                </div>

              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
