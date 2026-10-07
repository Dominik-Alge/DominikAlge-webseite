import { useState } from "react";

const politicalTopics = [
  {
    title: "Werkplatz & Innovation",
    bgColor: "bg-orange-50/40",
    borderColor: "border-orange-500",
    textColor: "text-slate-900",
    badgeColor: "bg-orange-500 text-white",
    list: ["Starker Industrie- & KMU-Standort", "Technologieoffene Zukunft", "Bürokratieabbau für Betriebe", "Sicherung von Lieferketten"],
    details: "Der Kanton St. Gallen muss regulatorisch vom Bremser zum Beschleuniger werden. Ich fordere einen konsequenten Bürokratie-Stopp bei kantonalen Erlassen, vereinfachte Bewilligungsverfahren für Betriebserweiterungen und staatliche Tech-Förderung, die direkt bei den KMU ankommt, statt in Verwaltungsebenen zu versickern. Nur so bleibt unsere Exportindustrie im Rheintal international konkurrenzfähig.",
  },
  {
    title: "Bildung & Ausbildung",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-800",
    textColor: "text-slate-900",
    badgeColor: "bg-slate-800 text-white",
    list: ["Duales Bildungssystem stärken", "Moderne Erwachsenenbildung", "Workplace Learning fördern", "Praxisnaher Wissenstransfer"],
    details: "Die duale Berufsbildung braucht politisch die gleiche Wertschätzung wie akademische Wege. Ich setze mich für eine kantonale Bildungsoffensive ein, die Lehrbetriebe steuerlich entlastet und Berufsfachschulen finanziell so ausstattet, dass sie modernste Technologien (wie Industrie 4.0-Simulatoren) ausbilden können. Zudem müssen flexible, berufsbegleitende Weiterbildungsmodelle unbürokratisch gefördert werden.",
  },
  {
    title: "Staat & Allgemeinwohl",
    bgColor: "bg-orange-50/20",
    borderColor: "border-orange-600",
    textColor: "text-slate-900",
    badgeColor: "bg-orange-600 text-white",
    list: ["Finanzpolitische Weitsicht", "Pragmatische Sachpolitik", "Verantwortung als Vermieter", "Erfahrung aus der GPK"],
    details: "Aus meiner langjährigen Erfahrung in der Geschäftsprüfungskommission (GPK) bringe ich das Rüstzeug mit, um kantonale Budgets kritisch zu hinterfragen. Ich fordere absolute Transparenz bei der Kostenüberwälzung vom Kanton auf die Gemeinden. Der Staat muss lernen, innerhalb seiner Ressourcen zu haushalten – durch digitale, schlanke Behördenprozesse statt durch stetig neue Abgaben für die Bürger.",
  },
];

export default function PoliticalTopics() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="themen" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Schwerpunkte
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            Meine Themen für St. Gallen
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Politik heisst für mich, Herausforderungen wie ein Techniker anzugehen: Analysieren, 
            Optimierungspotenziale finden und Lösungen bauen, die in der Praxis langfristig funktionieren.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {politicalTopics.map((topic, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={topic.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl p-8 shadow-xl transition-all duration-300 cursor-pointer border-2 flex flex-col justify-between ${topic.bgColor} ${
                  isOpen ? topic.borderColor + " shadow-2xl scale-[1.01]" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-2xl font-black tracking-tight ${topic.textColor}`}>{topic.title}</h3>
                    <span className={`text-sm bg-white text-slate-500 shadow-sm px-2.5 py-1 rounded-full transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-600 border border-orange-100" : ""}`}>
                      ▼
                    </span>
                  </div>

                  <ul className="space-y-3 text-slate-700 font-medium">
                    {topic.list.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-orange-500 text-lg">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Untermenü / Vertiefung */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-200" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-700 leading-relaxed bg-white/90 p-5 rounded-2xl shadow-inner text-sm border border-slate-100">
                    {topic.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

