import { useState } from "react";

const challenges = [
  {
    icon: "🩺",
    title: "Körperliche Belastung",
    text: "Rücken-, Schulter- und Gelenkbeschwerden gehören zu den häufigsten Belastungen im Pflege- und Betreuungsalltag.",
    details: "Transfers, Mobilisationen und alltägliche Unterstützungsleistungen fordern Mitarbeitende täglich körperlich heraus. Wiederholte Belastungen, ungünstige Bewegungsmuster und Zeitdruck können langfristig zu Beschwerden und gesundheitlichen Einschränkungen führen. Durch gezielte Bewegungs- und Handlungskompetenz lassen sich Belastungen reduzieren und Ressourcen besser nutzen.",
  },
  {
    icon: "📉",
    title: "Belastungsbedingte Ausfälle",
    text: "Jeder Ausfall belastet Mitarbeitende, Teams, Qualität und Organisation.",
    details: "Krankheitsbedingte Absenzen führen oft zu Mehrbelastungen für das gesamte Team. Dienste müssen umgeplant, kurzfristige Lösungen gefunden und zusätzliche Ressourcen eingesetzt werden. Die Folgen sind steigender Druck auf Mitarbeitende, höhere Kosten und eine zunehmende Belastung der gesamten Organisation.",
  },
  {
    icon: "👥",
    title: "Fachkräftemangel",
    text: "Gesunde und langfristig arbeitsfähige Mitarbeitende werden immer wichtiger.",
    details: "Qualifizierte Fachkräfte zu gewinnen und langfristig zu halten gehört zu den grössten Herausforderungen im Gesundheitswesen. Institutionen, die aktiv in die Gesundheit, Arbeitsfähigkeit und Entwicklung ihrer Mitarbeitenden investieren, stärken nicht nur ihre Attraktivität als Arbeitgeber, sondern sichern auch nachhaltig die Qualität der Betreuung und Pflege.",
  },
];

export default function Problems() {
  // Speichert den Index der aktuell geöffneten Karte (-1 bedeutet keine geöffnet)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-emerald-700 font-semibold">Herausforderungen</span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Die Herausforderungen im Pflegealltag
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Belastungen, Ausfälle und Fachkräftemangel gehören zu den grössten Herausforderungen vieler Institutionen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {challenges.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-white p-8 shadow-lg transition all duration-300 cursor-pointer border-2 ${
                  isOpen ? "border-emerald-600 shadow-xl" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  {/* Ein kleiner rotierender Pfeil als visueller Hinweis */}
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>

                {/* Das Untermenü / Die Vertiefung */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
                    {item.details}
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
