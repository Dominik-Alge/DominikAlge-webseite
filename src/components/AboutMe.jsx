import { useState } from 'react';

export default function AboutMe() {
  // State für die 3 Tabs ("focus", "cv" oder "education")
  const [activeTab, setActiveTab] = useState('story');

  // Schreibmaschinen-Effekt für die Sektions-Einleitung
  const introText = "Erfahren Sie mehr über meinen Hintergrund als Führungskraft in der Industrie, aktiver KMU-Unternehmer im Immobilienbereich und Gestalter praxisnaher digitaler Innovationen.";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Setzt die Animation zurück und startet sie neu, wenn der Reiter "Bildung" angewählt wird
  useEffect(() => {
    if (activeTab === 'bildung') {
      setDisplayedText("");
      setCharIndex(0);
    }
  }, [activeTab]);

  // Der rasant-flüssige Tipp-Effekt
  useEffect(() => {
    if (activeTab === 'bildung' && charIndex < highlightText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + highlightText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 12); // 12ms für einen dynamischen Aufbau
      return () => clearTimeout(timeout);
    }
  }, [charIndex, activeTab]);
  
  return (
    <section id="ueber-mich" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header-Bereich */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm">
            Der Kandidat persönlich
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Ein Praktiker, der die Realität unserer Industrie und KMU kennt.
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
                Über 2 Jahrzehnte Erfahrung in der Industrie
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

          {/* Rechte Spalte: Navigation, Content & Connect (7 von 12 Spalten) */}
          <div className="lg:col-span-7 w-full flex flex-col justify-between min-h-[460px]">
            
            <div>
              {/* Tab Navigation mit exakt 3 Reitern */}
              <div className="flex flex-wrap border-b border-slate-200">
                <button 
                  type="button"
                  onClick={() => setActiveTab('story')}
                  className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                    activeTab === 'story' 
                      ? 'text-orange-500 border-b-2 border-orange-500 font-black' 
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Story &amp; Kernfokus
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab('competences')}
                  className={`pb-3 px-4 font-bold text-sm transition-all relative ${
                    activeTab === 'competences' 
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
                  Bildung
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {activeTab === 'story' && (
                  <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                    <p className="italic font-semibold text-slate-900 bg-orange-50/40 p-4 rounded-2xl border-l-4 border-orange-500">
                      „Erfolgreiche Wirtschaft und ein starker Kanton entstehen nicht am grünen Tisch, sondern durch echtes Handwerk, starke Bildung und verlässliche KMU.“
                    </p>
                    <p>
                      Mein Weg führt von der Pike auf durch die Rheintaler Industrie: Gestartet an der Werkbank, durfte ich unser Familienunternehmen fast 17 Jahre lang operativ führen. Heute begleite ich die Firma als Verwaltungsrat bei der Neuausrichtung als immobilienverwaltende AG. Als aktiver KMU-Unternehmer und Vermieter kenne ich die Realität des Immobilienmarktes sowie die Anliegen von Eigentümern und Mietern aus erster Hand.
                    </p>
                    <p>
                      Aktuell verantworte ich bei der{' '}
                      <a 
                        href="https://bruderer.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold text-slate-950 underline decoration-orange-500 decoration-2 hover:text-orange-600 transition-colors"
                      >
                        BRUDERER AG
                      </a>{' '}
                      ein hochpräzises Produktionsteam im Schichtbetrieb. Als eidg. diplomierter Ausbilder erlebe ich täglich die grossen Herausforderungen bei der Facharbeitersuche und der Nachwuchsförderung. Ich weiss genau, unter welchem Druck unsere Betriebe stehen, und setze mich im Studium für praxisnahe digitale Lösungen (wie KI) ein, um unser Produktionswissen im Rheintal langfristig zu sichern.
                    </p>
                  </div>
                )}

                {activeTab === 'competences' && (
                  <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3 text-orange-600">
                        Wirtschaft &amp; Industrie
                      </h4>
                      <ul className="space-y-2 font-medium">
                        <li>• <strong className="text-slate-900">Standortsicherung im Rheintal:</strong> Rahmenbedingungen für sichere Arbeitsplätze schaffen</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4 text-sm text-slate-600">
                    {/* BRANDING-KONSISTENZ: Das animierte Widget exklusiv für Ihre größte Stärke */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/60 px-5 py-3 rounded-2xl shadow-sm w-full min-h-[54px]">
                      <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                
                      <p className="text-sm md:text-base text-slate-800 font-semibold tracking-wide leading-relaxed">
                        {displayedText}
                        {charIndex < introText.length && (
                          <span className="inline-block w-[2px] h-[1em] bg-orange-500 ml-1 animate-pulse align-middle" />
                        )}
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-orange-600 mb-1">
                          Berufliche Meilensteine
                        </h5>
                        <ul className="space-y-1 font-medium">
                          <li>• <strong>BSc Wirtschaftsingenieur i. A.</strong> (Bachelor of Science)</li>
                          <li>• <strong>Dipl. Techniker HF Maschinenbau</strong> (Professional Bachelor)</li>
                          <li>• <strong>eidg. Fachausweis Ausbilder</strong> (Professional Bachelor)</li>
                          <li>• <strong>Polymechaniker EFZ</strong> (Niveau E, Spezialisierung Schleifen)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-orange-600 mb-1">
                          Aktueller Fokus
                        </h5>
                        <p className="font-medium text-xs leading-relaxed">
                          Laufendes Studium und angewandte Entwicklung im Bereich digitaler Innovationen (KI-gestütztes Wissensmanagement), um die Zukunft unserer Industrie aktiv mitzugestalten.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div> {/* Ende Tab Content */}
            </div> {/* Ende oberer Nav/Content-Block */}
            
          </div> {/* Ende Rechte Spalte (lg:col-span-7) */}
        </div> {/* Ende Profil-Container Grid */}

            {/* Vernetzen & Kontakt Sektion */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Direkt vernetzen &amp; austauschen</h4>
                <p className="text-xs text-slate-500 mt-0.5">Ich freue mich auf den Dialog mit Ihnen.</p>
              </div>
              <div className="flex items-center gap-3">
                {/* LinkedIn Button */}
                <a 
                  href="https://www.linkedin.com/in/dominik-alge/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn
                </a>
                
               {/* SAUBERER HTML-LINK OHNE ONCLICK */}
                <a 
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>✉</span>
                  Kontakt
                </a>            
              </div>
            </div>
          </div> {/* Ende Spalte 7 */}
        </div> {/* Ende Grid */}
      </div> {/* Ende Max-w-7xl */}
    </section>
  );
}
