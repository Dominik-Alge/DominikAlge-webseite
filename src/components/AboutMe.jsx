import { useState } from 'react';

export default function AboutMe() {
  // State für die Tabs ("focus" oder "cv")
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

          {/* Rechte Spalte: Interaktiver Tab-Content (7 von 12 Spalten) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full lg:pt-4">
            <div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Dominik Alge</h3>
              <p className="mt-2 text-orange-600 font-semibold text-lg flex flex-wrap items-center gap-2">
                Dipl. Techniker HF Maschinenbau 
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-slate-500 text-sm font-medium">BSc Wirtschaftsingenieurwesen i.A.</span>
              </p>

              {/* Tab Navigation (Exakt wie in deiner Vorlage, farblich angepasst) */}
              <div className="mt-8 flex border-b border-slate-200">
                <button 
                  type="button"
                  onClick={() => setActiveTab('focus')}
                  className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                    activeTab === 'focus' 
                      ? 'text-orange-600 border-b-2 border-orange-500 font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Story & Kernfokus
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab('cv')}
                  className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                    activeTab === 'cv' 
                      ? 'text-orange-600 border-b-2 border-orange-500 font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Schwerpunkte & Kompetenzen
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-6 min-h-[260px]">
                {activeTab === 'focus' ? (
                  <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                    <p className="italic font-semibold text-slate-900 bg-orange-50/40 p-4 rounded-2xl border-l-4 border-orange-500">
                      „Erfolgreiche Produktion und gesellschaftlicher Wohlstand entstehen dort, wo Menschen, Prozesse, Technologie und Wirtschaftlichkeit zusammenspielen.“
                    </p>
                    <p>
                      Mein Weg führt von der Pike auf durch die Rheintaler Industrie: Gestartet an der Werkbank, durfte ich unser Familienunternehmen fast 17 Jahre lang operativ führen. Heute begleite ich die Firma als Verwaltungsrat bei der Neuausrichtung als immobilienverwaltende AG. Als aktiver KMU-Unternehmer und Vermieter kenne ich die Realität des Immobilienmarktes sowie die Anliegen von Eigentümern und Mietern aus erster Hand. 
                    </p>
                    <p>
                      Aktuell verantworte ich bei der <strong>BRUDERER AG</strong> ein hochpräzises Produktionsteam im Schichtbetrieb. Als eidg. diplomierter Ausbilder erlebe ich täglich die grossen Struggles bei der Facharbeitersuche und der Nachwuchsförderung. Ich weiss genau, unter welchem Druck unsere Betriebe stehen, und setze mich im Studium für praxisnahe digitale Lösungen (wie KI) ein, um unser Produktionswissen im Rheintal langfristig zu sichern.
                    </p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3 text-orange-600">
                        Spezialgebiete
                      </h4>
                      <ul className="space-y-2 font-medium">
                        <li>• Operational Excellence & Lean</li>
                        <li>• Wissensmanagement & Digitalisierung</li>
                        <li>• Supply Chain & Lieferketten</li>
                        <li>• Prozessstabilisierung (8D/Ishikawa)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3 text-orange-600">
                        Führung & Entwicklung
                      </h4>
                      <ul className="space-y-2 font-medium">
                        <li>• Shopfloor Management (10+ MA)</li>
                        <li>• Mitarbeiterentwicklung & Ausbildung</li>
                        <li>• Ausbilder mit eidg. Fachausweis</li>
                        <li>• Strategische Unternehmensführung</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Profil-Aktionstasten am unteren Ende */}
            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-slate-100">
              <a
                href="https://www.linkedin.com/in/dominik-alge/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Vernetzen auf LinkedIn</span>
                <span className="text-xs text-slate-400">↗</span>
              </a>
              <a
                href="#kontakt"
                className="px-6 py-3.5 border-2 border-slate-800 text-slate-800 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition-all duration-200 text-center text-sm"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
