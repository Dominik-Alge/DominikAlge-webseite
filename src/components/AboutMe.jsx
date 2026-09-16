import { useState } from 'react';

export default function AboutMe() {
  // State für die 3 Tabs ("focus", "cv" oder "education")
  const [activeTab, setActiveTab] = useState('focus');

  return (
    <section id="ueber-mich" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header-Bereich */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Der Kandidat persönlich
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Praxisdenken für den Kantonsrat
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Erfahren Sie mehr über meinen Hintergrund als Führungskraft in der Industrie, 
            aktiver KMU-Unternehmer im Immobilienbereich und Gestalter praxisnaher digitaler Innovationen.
          </p>
        </div>

        {/* Profil-Container */}
        <div className="grid gap-12 lg:grid-cols-12 items-start max-w-5xl mx-auto">

          {/* Linke Spalte: Bild & Key-Facts (5 von 12 Spalten) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            <div className="w-full h-[380px] bg-slate-200 overflow-hidden relative">
              <img 
                src="/Dominik2.jpg" 
                alt="Dominik Alge" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                Über 20 Jahre Industrieerfahrung
              </div>
            </div>
            
            <div className="p-6 bg-slate-900 text-white">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🎤</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Industrieforum 2026</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Referent zum Thema „KI-gestütztes Wissens- und Wissensrisikomanagement im demografischen Wandel“.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Navigation & Content (7 von 12 Spalten) - HIER WAR DER FEHLER */}
          <div className="lg:col-span-7 w-full">
            
            {/* Tab Navigation mit 3 Reitern */}
            <div className="flex flex-wrap border-b border-slate-200">
              <button 
                type="button"
                onClick={() => setActiveTab('focus')}
                className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                  activeTab === 'focus' 
                    ? 'text-orange-500 border-b-2 border-orange-500 font-black' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Story &amp; Kernfokus
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('cv')}
                className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                  activeTab === 'cv' 
                    ? 'text-orange-500 border-b-2 border-orange-500 font-black' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Schwerpunkte &amp; Kompetenzen
              </button>
              <button 
                type="button"
                onClick={() => setActiveTab('education')}
                className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                  activeTab === 'education' 
                    ? 'text-orange-500 border-b-2 border-orange-500 font-black' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Bildung &amp; Meilensteine
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 min-h-[260px]">
              {activeTab === 'focus' && (
                <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                  <p className="italic font-semibold text-slate-900 bg-orange-50/40 p-4 rounded-2xl border-l-4 border-orange-500">
                    „Erfolgreiche Wirtschaft und ein starker Kanton entstehen nicht am grünen Tisch, sondern durch echtes Handwerk, starke Bildung und verlässliche KMU.“
                  </p>
                  <p>
                    Mein Weg führt von der Pike auf durch die Rheintaler Industrie: Gestartet an der Werkbank, durfte ich unser Familienunternehmen fast 17 Jahre lang operativ führen. Heute begleite ich die Firma als Verwaltungsrat bei der Neuausrichtung als immobilienverwaltende AG. Als aktiver KMU-Unternehmer und Vermieter kenne ich die Realität des Immobilienmarktes sowie die Anliegen von Eigentümern und Mietern aus erster Hand.
                  </p>
                  <p>
                    Aktuell verantworte ich bei der <strong>BRUDERER AG</strong> ein hochpräzises Produktionsteam im Schichtbetrieb. Als eidg. diplomierter Ausbilder erlebe ich täglich die grossen Struggles bei der Facharbeitersuche und der Nachwuchsförderung. Ich weiss genau, unter welchem Druck unsere Betriebe stehen, und setze mich im Studium für praxisnahe digitale Lösungen (wie KI) ein, um unser Produktionswissen im Rheintal langfristig zu sichern.
                  </p>
                </div>
              )}

              {activeTab === 'cv' && (
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3 text-orange-600">
                      Industrie &amp; KMU
                    </h4>
                    <ul className="space-y-2 font-medium">
                      <li>• Effiziente Produktion (Lean Management)</li>
                      <li>• Digitale Innovation &amp; Wissenssicherung</li>
                      <li>• Krisenfeste Lieferketten &amp; Logistik</li>
                      <li>• Standortsicherung im Rheintal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3 text-orange-600">
                      Führung &amp; Eigentum
                    </h4>
                    <ul className="space-y-2 font-medium">
                      <li>• Teamleitung im Schichtbetrieb (10+ MA)</li>
                      <li>• Immobilien- &amp; Mietwesen in der Praxis</li>
                      <li>• Strategische &amp; finanzielle Führung (VR)</li>
                      <li>• Nachhaltige Qualitäts- &amp; Prozesssicherung</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-4 text-sm text-slate-600">
                  <p className="text-slate-900 font-medium">
                    Alle höheren Abschlüsse wurden zu <strong>100% nebenberuflich</strong> und parallel zur vollen Erwerbstätigkeit an der Front erarbeitet:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-orange-600 mb-1">
                        Berufliche Meilensteine
                      </h5>
                      <ul className="space-y-1 font-medium">
                        <li>• <strong>Professional Bachelor</strong> HF Maschinenbau</li>
                        <li>• <strong>Professional Bachelor</strong> Ausbilder (eidg. FA)</li>
                        <li>• Polymechaniker EFZ (Niveau E)</li>
                      </ul>
                    </div>
                    {/* HIER war dein Code abgeschnitten - zweite Box für Ausbildungen ergänzt */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-orange-600 mb-1">
                        Aktueller Fokus
                      </h5>
                      <p className="font-medium text-xs leading-relaxed">
                        Laufendes Studium / Weiterbildung im Bereich digitaler Innovationen und KI-gestütztem Wissensmanagement zur Zukunftssicherung der Industrie.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div> {/* Ende Spalte 7 */}
        </div> {/* Ende Grid */}
      </div> {/* Ende Max-w-7xl */}
    </section>
  );
}

