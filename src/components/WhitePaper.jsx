import React from 'react';

export default function WhitePaper() {
  // Pfad zu deinem PDF im public-Ordner
  const pdfPath = "/Beyond%20FactoryAI%20-%20White%20Paper.pdf"; 

  const coreTopics = [
    "Strategische Vision für den Werkplatz Rheintal",
    "Praxisnahe Ansätze zur Förderung der dualen Berufsbildung",
    "Industrie 4.0 & KI: Technologische Chancen für KMU pragmatisch nutzen",
    "Bürokratieabbau und digitale Effizienz in der kantonalen Verwaltung"
  ];

  return (
    <section id="whitepaper" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Linke Spalte: Visuelle Buch-/Dokumenten-Vorschau */}
          <div className="lg:col-span-5 justify-self-center lg:justify-self-start w-full max-w-[360px]">
            <div className="relative group">
              {/* Dekorative Schatten-Ebenen für 3D-Buch-Effekt */}
              <div className="absolute inset-0 bg-orange-500 rounded-3xl translate-x-3 translate-y-3 opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
              <div className="absolute inset-0 bg-slate-900 rounded-3xl translate-x-1.5 translate-y-1.5 opacity-5" />
              
              {/* Das eigentliche "Cover" */}
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 aspect-[3/4] flex flex-col justify-between shadow-2xl overflow-hidden border border-slate-800">
                {/* Hintergrund-Akzent */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
                
                <div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4 border-b border-slate-800 pb-2">
                    Publikation • White Paper
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight mt-4">
                    Praxis stärken. <br />
                    Innovation fördern.
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 font-medium tracking-wide uppercase">
                    Die Vision für St. Gallen
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Dominik Alge</p>
                    <p className="text-[10px] text-slate-500">Industrie | Bildung | Verantwortung</p>
                  </div>
                  <span className="text-2xl">📚</span>
                </div>
              </div>
            </div>
          </div>

                    {/* Rechte Spalte: Text & Download-Inhalte */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm block">
                Konzept & Praxis-Leitfaden
              </span>
              <h2 className="mt-2 text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Beyond FactoryAI: Wissenssicherung <br />& KI-Integration für KMU-Betriebe
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Der demografische Wandel trifft unsere Industrie hart: Wenn erfahrene Fachkräfte den Betrieb 
                verlassen, geht oft wertvolles implizites Erfahrungswissen verloren. Dieses White Paper basiert auf 
                meinem Vortrag am Industrieforum und beschreibt einen pragmatischen Ansatz für Fertigungsbetriebe. 
                Es zeigt auf, wie KMU ihr wertvollstes Gut – das Praxiswissen ihrer Mitarbeitenden – systematisch 
                sichern, durch KI-Assistenzsysteme im Alltag verfügbar machen und eine lernende Organisation bauen können.
              </p>
            </div>

            {/* Die Kernpunkte im Dokument */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Die Kerninhalte des Leitfadens:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="text-orange-500 mt-0.5">✔</span>
                  <span><strong>Wissensrisiken erkennen:</strong> Wo droht durch Pensionierungen akuter Wissensverlust?</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="text-orange-500 mt-0.5">✔</span>
                  <span><strong>Digitale Experten aufbauen:</strong> Wie domänenspezifische KI-Agenten (z.B. für Schleif- oder Frästechnik) Teams im Schichtbetrieb unterstützen.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="text-orange-500 mt-0.5">✔</span>
                  <span><strong>Shopfloor-Integration:</strong> Wie gesichertes Wissen direkt in operative Handlungen und messbare Verbesserungen einfliesst.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <span className="text-orange-500 mt-0.5">✔</span>
                  <span><strong>Das IKOS-Verfahren:</strong> Ein modularer Leitfaden für KMU zur schrittweisen Transformation vom Wissensverlust zur selbstlernenden Fabrik.</span>
                </li>
              </ul>
            </div>

            {/* Download Button */}
            <div className="pt-2">
              <a
                href={pdfPath}
                download="Beyond_FactoryAI_White_Paper.pdf"
                className="pointer-events-auto inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
              >
                <span>📥</span>
                <span>Konzept-Leitfaden herunterladen (PDF)</span>
              </a>
              <p className="text-xs text-slate-400 mt-2 ml-1">
                Kostenloser Download • Vollständiges Dokument (12 Seiten)
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
