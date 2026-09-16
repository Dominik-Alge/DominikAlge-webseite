import { useState } from "react";

const serviceCategories = [
  {
    title: "Pflege & Betreuung",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-600",
    textColor: "text-emerald-900",
    list: ["Grundkurse", "Aufbaukurse", "Refresher", "Hilfsmittelanwendung", "Praxisbegleitung"],
    details: "Unsere zertifizierten Kinaesthetics-Kurse richten sich an professionell Pflegende. Wir vermitteln, wie Transfers kräfteschonend gestaltet werden und wie die Eigenaktivität der Klienten gezielt gefördert werden kann, um den Pflegealltag nachhaltig zu entlasten.",
  },
  {
    title: "Unternehmen & Industrie",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    textColor: "text-amber-900",
    list: ["Ergonomie", "Arbeitsplatzanalysen", "Workshops", "Gesundheitstage", "Rückentraining"],
    details: "Gesundheit am Arbeitsplatz ist ein entscheidender Erfolgsfaktor. Durch massgeschneiderte Ergonomie-Workshops und präzise Arbeitsplatzanalysen lernen Mitarbeitende in Industrie und Verwaltung, chronischen Überlastungen aktiv vorzubeugen.",
  },
  {
    title: "Alltag & Angehörige",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-600",
    textColor: "text-slate-900",
    list: ["Beratungen", "Bewegung im Alltag", "Unterstützung zuhause", "Individuelle Begleitung"],
    details: "Pflegende Angehörige leisten Grossartiges. Wir beraten Sie direkt und diskret bei Ihnen zu Hause im gewohnten Umfeld. Zudem werden Kinaesthetics-Kurse für Angehörige in vielen Fällen von den Schweizer Krankenkassen (Zusatzversicherung) oder Entlastungsfonds finanziell unterstützt – fragen Sie uns einfach danach!",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="angebote" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold">Angebote</span>
          <h2 className="text-5xl font-bold mt-3">Unsere Angebote</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {serviceCategories.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl p-8 shadow-xl transition-all duration-300 cursor-pointer border-2 ${service.bgColor} ${
                  isOpen ? service.borderColor + " shadow-2xl scale-[1.01]" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold ${service.textColor}`}>{service.title}</h3>
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>

                <ul className="space-y-2 text-slate-700">
                  {service.list.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                {/* Untermenü / Vertiefung */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-200" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-700 leading-relaxed bg-white/60 p-4 rounded-xl shadow-inner text-sm">
                    {service.details}
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
