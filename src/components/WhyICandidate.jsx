import { useState } from "react";

const approachItems = [
  {
    icon: "⚙️",
    title: "Der Blick aus der Praxis",
    text: "Werkbank statt Elfenbeinturm: Ich kenne den echten Arbeitsalltag.",
    details: "Als Gruppenleiter in der Präzisionsfertigung stehe ich täglich an der Schnittstelle von Mensch, Technik und Wirtschaft. Ich kenne den Druck im Mehrschichtbetrieb und die Bedürfnisse von Arbeitnehmenden und Familien aus eigener Erfahrung. Diese ungefilterte Praxisperspektive fehlt im Kantonsrat viel zu oft.",
  },
  {
    icon: "🔍",
    title: "Technische Perspektive & Logik",
    text: "Herausforderungen löst man nicht mit Polit-Phrasen, sondern mit strukturierter Ursachenanalyse.",
    details: "In der Industrie nutzen wir klare Analysetools (wie 8D oder Ishikawa), um Probleme an der Wurzel zu packen. Genau diesen Ansatz bringe ich in die Politik ein: Sachzwänge und technologische Notwendigkeiten anerkennen, logische Strukturen schaffen und messbare Lösungen erarbeiten, statt Scheindebatten zu führen.",
  },
  {
    icon: "🛠️",
    title: "Pragmatismus statt Bürokratie",
    text: "Regulierungen müssen praxistauglich sein. Was unsere KMU lähmt, gehört wegreduziert.",
    details: "Innovation braucht Freiraum, keine administrativen Hürden. Mein Ziel ist ein starker, technologieoffener Kanton St. Gallen. Das bedeutet: Bürokratie abbauen, KMU entlasten und Rahmenbedingungen schaffen, die es Unternehmen erlauben, sich auf ihre Kernkompetenzen zu konzentrieren – pragmatisch, direkt und lösungsorientiert.",
  },
  {
    icon: "⚖️",
    title: "Echtes Sparen statt Kostenabwälzung",
    text: "Ehrliche Finanzen: Keine kantonalen Tricks auf Kosten unserer Gemeinden.",
    details: "Durch meine langjährige Arbeit in der GPK sehe ich genau, wo die Hebel angesetzt werden müssen. Es ist keine echte Budgetdisziplin, wenn kantonale Ausgaben durch Gesetzesänderungen zu kommunalen Lasten werden. Wir müssen Dritteffekte konsequent mitdenken: Ein starker Kanton St. Gallen braucht finanziell gesunde, handlungsfähige Gemeinden – ohne administrative Tricksereien.",
  },
  {
    icon: "🏭",
    title: "Werkplatz & Innovation",
    text: "Unser Wohlstand im Rheintal basiert auf einem starken, wettbewerbsfähigen Industrie- und KMU-Standort.",
    bullets: ["Starker Industrie- & KMU-Standort", "Technologieoffene Zukunft", "Bürokratieabbau für Betriebe", "Sicherung von Lieferketten"],
    details: "Als Gruppenleiter in der Präzisionsfertigung kenne ich die Realität des St. Galler Rheintals. Unser Wohlstand basiert auf einem starken Werkplatz. Ich setze mich dafür ein, dass KMU und Industrie von administrativer Last befreit werden und wir durch Technologieoffenheit – von moderner CNC-Fertigung bis zu praxisnahen KI-Wissenssystemen – international wettbewerbsfähig bleiben.",
  },
  {
    icon: "🎓",
    title: "Bildung & Ausbildung",
    text: "Lebenslanges Lernen fördern und das duale Bildungssystem gezielt für die Praxis stärken.",
    bullets: ["Duales Bildungssystem stärken", "Moderne Erwachsenenbildung", "Workplace Learning fördern", "Praxisnaher Wissenstransfer"],
    details: "Als Ausbilder mit eidg. Fachausweis und Student des Wirtschaftsingenieurwesens weiss ich: Lebenslanges Lernen darf kein leeres Schlagwort sein. Ich will die Berufsbildung und das duale System stärken. Wir müssen Ausbildungsmethoden modernisieren, um den demografischen Wandel abzufedern und Fachkräfte genau dort zu entwickeln, wo die Praxis sie braucht.",
  }
];

export default function WhyICandidate() {
  // Speichert den Index der aktuell geöffneten Karte (-1 bedeutet keine geöffnet)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="warum-ich" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Mein Fundament
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Warum ich für den Kantonsrat kandidiere
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Die Politik der Zukunft braucht Menschen, die anpacken können, technologische 
            Zusammenhänge verstehen und Entscheidungen auf Basis von Fakten und Pragmatismus treffen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {approachItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                onClick={() => toggleDetails(index)}
                className={`rounded-3xl bg-white p-8 shadow-md transition-all duration-300 cursor-pointer border-2 ${
                  isOpen 
                    ? "border-orange-500 shadow-xl" 
                    : "border-transparent hover:-translate-y-2 hover:shadow-lg"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  {/* Visueller Hinweis: Pfeil rotiert smooth bei Klick */}
                  <span className={`text-sm bg-slate-100 text-slate-500 p-2 rounded-full transition-transform duration-300 ${isOpen ? "rotate-180 bg-orange-50 text-orange-600" : ""}`}>
                    ▼
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.text}</p>

                {/* Ausklappbarer Vertiefungstext mittels CSS-Grid-Animation */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-slate-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl text-sm border border-slate-100">
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
