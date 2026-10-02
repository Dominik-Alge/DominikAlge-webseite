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
          
          {/* SÄULE 1: 🏛️ Öffentliche Finanzen & Politik */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-4xl bg-orange-500/10 p-3 rounded-2xl">🏛️</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Politik & Kontrolle</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Öffentliche Verantwortung</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* GPK Au */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2021 – 2026</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">GPK-Mitglied • Politische Gemeinde Au</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Überwachung der Gemeindeverwaltung und effiziente Kontrolle öffentlicher Mittel. Rücktritt per Ende Februar 2026.
                </p>
                <a href="https://www.au.ch/behoerdenmitglieder/45844" target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-900 hover:text-orange-600 underline mt-2 inline-block">Behördenmitglied anzeigen →</a>
              </div>

              {/* GPK Eisbahn */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2021 – 2026</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">GPK-Mitglied • Kunsteisbahn Mittelrheintal</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Gemeindevertreter zur Prüfung finanzieller und operativer Abläufe. Aktive Begleitung des anstehenden 27,7 Mio. Franken Grossprojekts für den zukunftssicheren Neubau.
                </p>
              </div>

              {/* Stimmenzähler */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2018 – Heute</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Stimmenzähler • 9434 Au</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Sicherung von Transparenz und absolutem Vertrauen in unsere lokalen, demokratischen Prozesse und Abstimmungen.
                </p>
              </div>

              {/* Die Mitte */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2020 – Heute</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Mitglied • Die Mitte Ortspartei</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Aktiver Beitrag zur politischen Gestaltung und demokratischen Mitbestimmung direkt in unserer Gemeinde.
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
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Strategie & Werterhalt</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* Verwaltungsrat */}
              <div className="relative pl-6 border-l-2 border-orange-500">
                <span className="text-xs font-bold text-orange-600 block">2016 – Heute</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Verwaltungsrat • Immobilienverwaltende AG</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Seit 2016 selbst Immobilieninhaber. Strategische Begleitung, Initiierung und erfolgreiche Umsetzung der aktiven Firmen-Umstrukturierung.
                </p>
              </div>

              {/* Revisor STWEG */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2016 – Heute</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Revisor • Stockwerkeigentümerschaften</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Ehrenamtliche Prüfung der Rechnungslegung und Finanzen. Konsequente Absicherung des Kapitals für langfristigen Werterhalt und gezielte Wertsteigerung der Liegenschaften.
                </p>
              </div>
            </div>
          </div>

          {/* SÄULE 3: 🛡️ Sicherheit & Bevölkerungsschutz */}
          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-4xl bg-orange-500/10 p-3 rounded-2xl">🛡️</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Sicherheit & Dienst</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Miliz & Bevölkerungsschutz</p>
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* Schweizer Armee */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2009 – 2020</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Waffenmechaniker • Schweizer Armee</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Verantwortungsvolle Einbringung der Polymechaniker-Fachkompetenz. Spezialisierte Wartung und Unterhalt sämtlicher Infanteriewaffen der Schweizer Armee.
                </p>
              </div>

              {/* Feuerwehr */}
              <div className="relative pl-6 border-l-2 border-slate-200">
                <span className="text-xs font-bold text-slate-500 block">2008 – 2011</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Feuerweermann • Feuerwehr Mittelrheintal</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Ehrenamtlicher Dienst im Bevölkerungsschutz mit Spezialisierung im Atemschutz. Schärfung von Teamarbeit, Belastbarkeit und direktem Verantwortungsbewusstsein unter Extrembedingungen.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
