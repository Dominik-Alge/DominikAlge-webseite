import { useState } from "react";

const experience = [
  {
    icon: "🏥",
    title: "Pflege & Betreuung",
    text: "Erfahrung in der Begleitung von Mitarbeitenden und Teams im Pflege- und Betreuungsalltag.",
    details: "Unsere Stärke liegt in der direkten Praxisbegleitung auf der Abteilung. Wir analysieren bestehende Abläufe direkt am Bett, reduzieren die körperliche Belastung im Team spürbar und steigern gleichzeitig die Bewegungsqualität der Klienten.",
  },
  {
    icon: "🏡",
    title: "Langzeitpflege",
    text: "Praxisnahe Erfahrung in Alterszentren und Institutionen mit Fokus auf Ressourcen und Selbstständigkeit.",
    details: "In der Langzeitpflege wandeln wir Pflege von 'Mittel zum Zweck' in echtes Bewegungslernen um. Bewohnerinnen und Bewohner werden nicht einfach bewegt, sondern mobilisieren ihre eigenen Ressourcen – für mehr Selbstständigkeit im Alltag.",
  },
  {
    icon: "🩺",
    title: "Gesundheitswesen",
    text: "Gesundheitsförderung, Bewegungslernen und nachhaltige Entwicklung von Handlungskompetenzen.",
    details: "Wir betrachten Kinästhetik als strategische Gesundheitsförderung für die gesamte Institution. Durch systematische Schulungen sinken die belastungsbedingten Ausfalltage, während die Professionalität und Zufriedenheit im Team nachhaltig wachsen.",
  },
  {
    icon: "👩‍⚕️",
    title: "Ambulante Pflege",
    text: "Praxiserfahrung in der Spitex und im häuslichen Umfeld von betreuten Menschen.",
    details: "Die ambulante Pflege stellt Teams vor enorme ergonomische Herausforderungen durch wechselnde, oft enge Platzverhältnisse. Wir vermitteln flexible Bewegungsstrategien, die ohne schwere Hilfsmittel maximale Sicherheit für Pflegende und Klienten garantieren.",
  },
];

// LANGFRISTIGER BEREICH: Hier fügst du später deine echten Referenzen ein
const clientReferences = [
  {
    name: "Altersheim Geserhus",
    description: "Langjährige Begleitung der Pflege- und Betreuungsteams durch Inhouse-Schulungen und kontinuierliche Praxisbegleitung direkt im Alltag.",
    type: "Langzeitpflege",
  },
  {
    name: "Spitex Sarganserland",
    description: "Erfolgreiche Implementierung von Kinästhetik-Grundkursen zur Entlastung der Mitarbeitenden im anspruchsvollen ambulanten Umfeld.",
    type: "Ambulante Pflege",
  },
  /* 
  Hier kannst du in Zukunft einfach neue Institutionen hinzufügen:
  {
    name: "Name der neuen Institution",
    description: "Was habt ihr dort genau gemacht?",
    type: "Kategorie",
  },
  */
];

export default function References() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-emerald-700 font-semibold">Erfahrung</span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">Vertrauen durch Erfahrung</h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Unsere Erfahrung basiert auf langjähriger, praktischer Arbeit in der Schweizer Pflege- und Gesundheitslandschaft. Wir kennen die Herausforderungen Ihrer Teams aus eigener Erfahrung.
          </p>
        </div>

        {/* Die 4 Erfahrungs-Karten (Mit Werbetext-Untermenü) */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experience.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  isOpen ? "border-emerald-600 shadow-xl" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-2">{item.title}</h3>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{item.text}</p>

                {/* Untermenü mit tiefgehendem Werbetext */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl shadow-inner">
                    {item.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INSTITUTIONEN & REFERENZEN BEREICH */}
        {clientReferences.length > 0 && (
          <div className="mt-28 pt-16 border-t border-slate-200">
            <div className="text-center mb-12">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">Referenzen</span>
              <h3 className="text-3xl font-bold text-slate-900 mt-2">Erfolgreiche Zusammenarbeit</h3>
              <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm">
                Diese Institutionen vertrauen bereits auf unsere Expertise in der angewandten Kinästhetik.
              </p>
            </div>

            {/* Dynamisches Grid für deine Partner/Institutionen */}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {clientReferences.map((ref, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full inline-block mb-3">
                      {ref.type}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900">{ref.name}</h4>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{ref.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
