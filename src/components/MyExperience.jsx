import { useState } from "react";

const experiences = [
  {
    id: "bruderer",
    period: "06/2025 – heute",
    role: "Gruppenleiter CNC-Schleifen",
    company: "Bruderer AG, Frasnacht",
    category: "Führung & Technologie",
    shortText: "Führung eines Produktionsteams (10 MA) und Einfahren stabiler Prozesse in der industriellen Kleinserienproduktion.",
    highlights: [
      { label: "Soziale Verantwortung", text: "Fachliche und personelle Führung, Coaching und strukturierte Kompetenzentwicklung im 2-Schichtbetrieb." },
      { label: "Prozessoptimierung", text: "Nachhaltige Stabilisierung kritischer Fertigungsprozesse durch den gezielten Einsatz bewährter Lean-Methoden." },
      { label: "Zukunftsorientierung", text: "Entwicklung eines KI-Konzeptbeweises zur Sicherung von Produktionswissen gegen den akuten Fachkräftemangel." }
    ]
  },
  {
    id: "alge-chef",
    period: "2009 – heute",
    role: "Geschäftsführer / Leiter QM / Verwaltungsrat",
    company: "Alge H. AG (Familienunternehmen)",
    category: "Unternehmertum & KMU",
    shortText: "Operative Gesamtverantwortung, Qualitätssicherung und strategische Steuerung des CNC-Fertigungsbetriebs.",
    highlights: [
      { label: "Strategische Transformation", text: "Aktive Mitgestaltung und Begleitung der Neuausrichtung des Familienunternehmens zu einer immobilienverwaltenden AG." },
      { label: "Unternehmerische Steuerung", text: "Volle betriebswirtschaftliche Verantwortung inklusive Budgetplanung, Investitionen und direktem Reklamationsmanagement." },
      { label: "Zukunftsorientierte Ausbildung", text: "Nachhaltige Fachkräftesicherung durch die Implementierung moderner Workplace-Learning-Strukturen." }
    ]
  },
  {
    id: "gpk-politik",
    period: "2021 – 2026",
    role: "GPK-Mitglied / Politisches Engagement",
    company: "Politische Gemeinde Au & Kunsteisbahn Mittelrheintal",
    category: "Gemeinwohl & Finanzen",
    shortText: "Finanzpolitische Aufsicht und strategische Prüfung im Dienste der Allgemeinheit.",
    highlights: [
      { label: "Verantwortung", text: "Vorzeitige Mandatsabgabe wegen neuer Führungsaufgabe und Studium – für mich gilt: Ein Amt fordert vollen Einsatz und Zeit." },
      { label: "Finanzkontrolle", text: "Konsequente Prüfung von Jahresrechnungen und Krediten für einen haushälterischen Umgang mit Ihren Steuergeldern." },
      { label: "Milizsystem", text: "Gelebte zivilgesellschaftliche Verantwortung als GPK-Mitglied, Stimmenzähler und Delegierter der Mitte Au-Heerbrugg." }
    ]
  },
  {
    id: "fundament",
    period: "2005 – 2009",
    role: "Präzisionsschleifer & Polymechaniker",
    company: "Alge H. AG / SFSintec, Heerbrugg",
    category: "Das Fundament",
    shortText: "Fundierte Berufslehre (Niveau E) erste Erfahrung direkt an der Werkbank.",
    highlights: [
      { label: "Echte Basis", text: "Ausbildung im Rheintaler Grossbetrieb. Hier habe ich von Grund auf gelernt, was Präzision und Schweizer Qualität im Arbeitsalltag bedeuten." },
      { label: "Militärdienst", text: "Praktischer Einsatz als Waffenmechaniker in der Schweizer Armee (Thun) zur Wartung von Infanteriewaffen." },
      { label: "Berufsstolz", text: "Das Fundament für meinen täglichen Einsatz: Ich kenne den Zeitdruck und die echten Belastungen in der Produktion aus eigener Erfahrung." }
    ]
  }
];

export default function MyExperience() {
  const [activeId, setActiveId] = useState("bruderer");
  const activeExp = experiences.find((e) => e.id === activeId);

  return (
    <section id="erfahrung" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sektions-Header */}
        <div className="text-center mb-20">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Lebenslauf & Kompetenz
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Fundierte Erfahrung aus der Praxis
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            20 Jahre Industrieerfahrung, echtes KMU-Unternehmertum und politisches Engagement 
            bilden mein Fundament für eine lösungsorientierte Politik im Kantonsrat.
          </p>
        </div>

        {/* Die Erlebnis-Matrix */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Linke Spalte: Interaktive Zeitleisten-Navigation (4 von 12 Spalten) */}
          <div className="lg:col-span-5 space-y-4 relative before:absolute before:left-[21px] before:top-6 before:bottom-6 before:w-0.5 before:bg-slate-100">
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <div
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`relative pl-12 pr-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 border text-left group ${
                    isActive
                      ? "bg-orange-50/40 border-orange-200 shadow-md translate-x-1"
                      : "bg-white border-transparent hover:bg-slate-50"
                  }`}
                >
                  {/* Der Zeitstrahl-Punkt */}
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 z-10 ${
                    isActive 
                      ? "bg-orange-500 border-orange-500 scale-125 shadow-[0_0_0_4px_rgba(249,115,22,0.2)]" 
                      : "bg-white border-slate-300 group-hover:border-orange-400"
                  }`} />

                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isActive ? "text-orange-600" : "text-slate-400"}`}>
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-slate-500 block mt-0.5">
                    {exp.company}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Rechte Spalte: Dynamisches Detail-Panel (7 von 12 Spalten) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-inner min-h-[480px] flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 pb-6">
                <div>
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm shadow-orange-500/10">
                    {activeExp.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-3 tracking-tight">
                    {activeExp.role}
                  </h3>
                  <p className="text-base text-orange-600 font-semibold mt-1">
                    {activeExp.company}
                  </p>
                </div>
                <div className="text-sm font-bold text-slate-400 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  {activeExp.period}
                </div>
              </div>

              <p className="text-slate-700 font-medium my-6 text-base leading-relaxed">
                {activeExp.shortText}
              </p>

              {/* Die drei inhaltlichen Highlights */}
              <div className="space-y-4">
                {activeExp.highlights.map((hl, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                    <div className="text-orange-500 mt-0.5 font-bold">✓</div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                        {hl.label}
                      </h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                        {hl.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Klicke auf die Zeitleiste links, um andere Stationen zu sehen.</span>
              <span className="hidden sm:inline">📖 Auszug aus dem Lebenslauf</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
