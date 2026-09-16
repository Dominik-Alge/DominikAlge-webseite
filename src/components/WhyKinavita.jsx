import { useState } from "react";

const values = [
  {
    icon: "🌿",
    title: "Ressourcen statt Defizite",
    text: "Menschen werden in ihren vorhandenen Fähigkeiten unterstützt statt in ihrer Abhängigkeit bestätigt.",
    details: "Kinaesthetics fördert die aktive Beteiligung von betreuten Menschen an alltäglichen Bewegungen. Dadurch werden vorhandene Ressourcen gezielt genutzt, die Selbstständigkeit gestärkt und die Lebensqualität erhöht. Gleichzeitig reduziert sich der körperliche Aufwand für Mitarbeitende.",
  },
  {
    icon: "🩺",
    title: "Gesundheit fördern",
    text: "Weniger körperliche Belastung durch bewusste und effiziente Bewegungsabläufe.",
    details: "Mitarbeitende lernen, Bewegungen gezielt zu gestalten statt Kraft einzusetzen. Dies kann Rücken, Schultern und Gelenke entlasten und dazu beitragen, belastungsbedingte Beschwerden langfristig zu reduzieren. Gesunde Mitarbeitende bleiben leistungsfähig und können ihren Beruf länger mit Freude ausüben.",
  },
  {
    icon: "👥",
    title: "Mitarbeitende stärken",
    text: "Kompetente und gesunde Mitarbeitende sind die Grundlage erfolgreicher Teams.",
    details: "Praxisnahe Schulungen schaffen Sicherheit im Arbeitsalltag und stärken die Handlungskompetenz jeder einzelnen Fachperson. Mitarbeitende gewinnen Vertrauen in ihre Fähigkeiten, erleben mehr Selbstwirksamkeit und tragen aktiv zu einer positiven Teamkultur bei.",
  },
  {
    icon: "📈",
    title: "Nachhaltig wirksam",
    text: "Nicht kurzfristige Lösungen, sondern langfristige Veränderungen im Alltag.",
    details: "Durch Kurse, Praxisbegleitungen und kontinuierliche Entwicklung wird Kinaesthetics nachhaltig in den Arbeitsalltag integriert. Das Gelernte bleibt nicht Theorie, sondern wird Teil der täglichen Praxis und entfaltet dadurch langfristige Wirkung für Mitarbeitende, Klienten und Organisationen.",
  },
];

export default function WhyKinavita() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-emerald-700 font-semibold">Warum Kinavita</span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Warum Institutionen mit Kinavita arbeiten
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Kinästhetik ist mehr als eine Schulung. Es geht darum, Mitarbeitende zu stärken, Belastungen zu reduzieren und Ressourcen langfristig nutzbar zu machen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((value, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={value.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-slate-50 p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  isOpen ? "border-emerald-600 bg-white shadow-xl" : "border-transparent hover:-translate-y-2"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <span className={`text-xl text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-4 text-slate-600">{value.text}</p>

                {/* Sanftes Ausklappen via Tailwind CSS (Grid-Trick für flüssige Animation) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-200" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-600 leading-relaxed bg-white p-4 rounded-xl shadow-inner">
                    {value.details}
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
