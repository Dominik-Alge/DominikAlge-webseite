// components/Engagement.jsx
import React from 'react';

export default function Engagement() {
  return (
    <section id="engagement-details" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sektions-Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm block">
            Verantwortung in der Praxis
          </span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Engagement & Mandate
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Ein starkes Gemeinwesen lebt vom Mitmachen. Seit vielen Jahren bringe ich meine 
            berufliche Expertise in öffentliche Ämter, ehrenamtliche Aufgaben und strategische Mandate ein.
          </p>
        </div>

        {/* Die 3 Säulen des Engagements */}
        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* SÄULE 1: 🏛️ Politik & Behörden */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-4xl bg-orange-500/10 p-3 rounded-2xl">🏛️</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Politik & Kontrolle</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Mitte-Engagement & Behördenamt</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* GPK Au */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2021 – 2026</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">GPK-Mitglied • Politische Gemeinde Au</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Effiziente Überwachung der Gemeindeverwaltung und Kontrolle öffentlicher Mittel. Rücktritt per Ende Februar 2026.
                </p>
                <a href="https://au.ch" target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-slate-900 hover:text-orange-600 underline mt-1 inline-block">Behördenmitglied anzeigen →</a>
              </div>

              {/* GPK Eisbahn */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2021 – 2026</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">GPK-Mitglied • Kunsteisbahn Mittelrheintal</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Prüfung operativer Abläufe. Aktive Begleitung des 27,7 Mio. Franken Grossprojekts zur zukunftssicheren Ammoniak-Sanierung und zum Neubau.
                </p>
              </div>

              {/* Die Mitte - Rollen & Kandidaturen */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2020 – Heute</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Die Mitte Schweiz • Aktiver Milizpolitiker</h4>
                
                <div className="mt-2 space-y-2 text-xs text-slate-600">
                  <p>• <strong>Delegierter Ortspartei Au-Heerbrugg</strong> (2024–Heute): Vertretung kommunaler Interessen an Hauptversammlungen.</p>
                  <p>• <strong>Kassier Ortspartei Au-Heerbrugg</strong> (2020–2025): Verantwortungsvolle Führung und Überwachung der Finanzbuchhaltung.</p>
                  <p>• <strong>Kantonsratskandidat St. Gallen</strong> (Wahl 2024): Engagierter Wahlkampf für mehr Bürgernähe, Transparenz und Sachpolitik.</p>
                  <p>• <strong>Nationalratskandidat</strong> (Wahl 2023): Positionierung regionaler Anliegen auf nationaler Ebene in Bern.</p>
                </div>
              </div>

              {/* Stimmenzähler */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2018 – Heute</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Stimmenzähler • 9434 Au</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ehrenamtlicher Beitrag zur Absicherung der direkten Demokratie und Schaffung von absolutem Vertrauen in Wahlprozesse.
                </p>
              </div>
            </div>
          </div>

          {/* SÄULE 2: 🏢 Wirtschaft & Immobilien */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-4xl bg-orange-500/10 p-3 rounded-2xl">🏢</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Wirtschaft & Real Estate</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Unternehmertum & Nachhaltigkeit</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* Alge H. AG */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2016 – Heute</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Verwaltungsrat • Alge H. AG</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Verantwortungsvolle Einleitung und Begleitung der strategischen Firmen-Umstrukturierung. Zielgerichtete Sanierung und Neuausrichtung des Betriebs, um einen geordneten Fortbestand zu sichern und Arbeitsplätze sowie Werte vor dem Ruin zu bewahren.
                </p>
              </div>

              {/* Eigene Immobilien */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2016 – Heute</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Immobilieninhaber • Faires Vermieten</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Seit über einem Jahrzehnt privater Immobilienbesitzer. Mein persönliches soziales Engagement: Nachhaltige Liegenschaftsverwaltung mit fairen, bezahlbaren Mietzinsen statt kurzfristiger Profitmaximierung.
                </p>
              </div>

              {/* Revisor STWEG */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2016 – Heute</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Revisor • Stockwerkeigentümerschaften</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ehrenamtliche und detaillierte Prüfung der Rechnungslegung. Konsequente Absicherung des Kapitals für langfristigen Werterhalt.
                </p>
              </div>
            </div>
          </div>

          {/* SÄULE 3: 🤝 Soziale Verantwortung & Miliz */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-4xl bg-orange-500/10 p-3 rounded-2xl">🤝</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Soziale Integration & Dienst</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Milizsystem & Arbeitsintegration</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* Pro Business House AG */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2018 – 2019</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Abteilungsleiter CNC / Baulatten (interim)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Führung in einer Stiftung für Arbeitsintegration. Aktive Unterstützung und Befähigung von Menschen auf dem Weg zurück in den ersten Arbeitsmarkt sowie erfolgreiche Ausbildung eines Mechanikpraktikers EBA.
                </p>
              </div>

              {/* Schweizer Armee */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2009 – 2020</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">Waffenmechaniker • Schweizer Armee</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Verantwortungsvolle Einbringung der Polymechaniker-Fachkompetenz. Spezialisierte Wartung und Unterhalt sämtlicher Infanteriewaffen der Schweizer Armee.
                </p>
              </div>

              {/* Feuerwehr */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2008 – 2011</span>
                <h4 className="text-xs text-slate-600 mt-1 leading-relaxed">Feuerweermann • Feuerwehr Mittelrheintal</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ehrenamtlicher Dienst im Bevölkerungsschutz mit Spezialisierung im Atemschutz. Schärfung von Teamarbeit unter Extrembedingungen.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
