import { useState } from 'react';

export default function Team() {
  // State für die Tabs der beiden Profile ("focus" oder "cv")
  const [rinaTab, setRinaTab] = useState('focus');
  const [barbaraTab, setBarbaraTab] = useState('focus');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header-Bereich mit direktem Marketing-Nutzen */}
        <div className="text-center">
          <span className="text-emerald-700 font-semibold tracking-wide uppercase text-sm">
            Das Team hinter Kinavita
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Persönlich. Praxisnah. Höchste Fachkompetenz.
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hinter Kinavita stehen zwei ausgewiesene Expertinnen der Pflege und Bewegung. 
            Mit dem **eidgenössischen Fachausweis** besitzen wir die höchste staatlich anerkannte 
            Qualifikation für Kinaesthetics in der Schweiz.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">

          {/* RINA ALGE */}
          <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="w-full h-80 bg-slate-200 overflow-hidden relative">
              <img 
                src="/rina.jpg" 
                alt="Alge Rina" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                Über 15 Jahre Erfahrung
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Alge Rina</h3>
                <p className="mt-2 text-emerald-700 font-semibold leading-snug">
                  Spezialistin für angewandte Kinästhetik <br />
                  <span className="text-slate-500 font-medium text-sm">mit eidgenössischem Fachausweis</span>
                </p>

                {/* Tab Navigation Rina */}
                <div className="mt-6 flex border-b border-slate-200">
                  <button 
                    type="button"
                    onClick={() => setRinaTab('focus')}
                    className={`pb-2 px-4 font-medium text-sm transition-all ${rinaTab === 'focus' ? 'border-b-2 border-emerald-700 text-emerald-700 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Schwerpunkt & Nutzen
                  </button>
                  <button 
                    type="button"
                    onClick={() => setRinaTab('cv')}
                    className={`pb-2 px-4 font-medium text-sm transition-all ${rinaTab === 'cv' ? 'border-b-2 border-emerald-700 text-emerald-700 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Erfahrung & Ausbildung
                  </button>
                </div>

                {/* Tab Content Rina */}
                <div className="mt-6 min-h-[220px]">
                  {rinaTab === 'focus' ? (
                    <div className="space-y-4 text-slate-600">
                      <p className="italic font-medium text-slate-700">
                        „Ich begleite Teams, Institutionen und pflegende Angehörige dabei, alltägliche Bewegungen gesundheitsfördernd und kräfteschonend zu gestalten.“
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>🎯 <strong>Spezialisierung:</strong> Langzeitpflege, Demenz & Begleitung im Alter.</li>
                        <li>🗣️ <strong>Kurssprache:</strong> Deutsch</li>
                        <li>💡 <strong>Dein Vorteil:</strong> Direkt anwendbare Praxis-Tipps aus über einem Jahrzehnt angewandter Pflege- und Betreuungsarbeit.</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm text-slate-600">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Praxisstationen:</h4>
                        <p>• Seit 2019: Altersheim Geserhus Rebstein</p>
                        <p>• 2015 - 2019: Stütlihus Grabs (Wohnen im Alter)</p>
                        <p>• Frühere Stationen: Stiftung Kronbühl, AH Almendsberg</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Meilensteine:</h4>
                        <p>• 2024: Eidg. Berufsprüfung Spezialistin Kinästhetik</p>
                        <p>• 2022 - 2025: Kinaesthetics-Trainer-Ausbildung (Stufe 1 & 2)</p>
                        <p>• Zertifikate in Medizinaltechnik & Palliative Care</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons Rina */}
              <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <a
                  href="https://www.kinaesthetics.ch/trainerinnenliste.cfm?trainer_id=7781"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-emerald-700 text-white rounded-xl font-medium hover:bg-emerald-800 transition text-center text-sm shadow-sm"
                >
                  Offizielles Trainer-Profil
                </a>
                <a
                  href="https://www.linkedin.com/in/rina-alge-64511b386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 font-medium transition text-center text-sm text-slate-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* BARBARA MORCIANO-ALVAREZ */}
            <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className="w-full h-80 bg-slate-200 overflow-hidden relative">
                <img 
                  src="/barbara.jpg"
                  alt="Morciano-Alvarez Barbara" 
                  className="w-full h-full object-cover object-center" 
                />

                <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  Über 20 Jahre Erfahrung
                </div>
              </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Morciano-Alvarez Barbara</h3>
                <p className="mt-2 text-emerald-700 font-semibold leading-snug">
                  Spezialistin für angewandte Kinästhetik <br />
                  <span className="text-slate-500 font-medium text-sm">mit eidgenössischem Fachausweis</span>
                </p>

                {/* Tab Navigation Barbara */}
                <div className="mt-6 flex border-b border-slate-200">
                  <button 
                    type="button"
                    onClick={() => setBarbaraTab('focus')}
                    className={`pb-2 px-4 font-medium text-sm transition-all ${barbaraTab === 'focus' ? 'border-b-2 border-emerald-700 text-emerald-700 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Schwerpunkt & Nutzen
                  </button>
                  <button 
                    type="button"
                    onClick={() => setBarbaraTab('cv')}
                    className={`pb-2 px-4 font-medium text-sm transition-all ${barbaraTab === 'cv' ? 'border-b-2 border-emerald-700 text-emerald-700 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Erfahrung & Ausbildung
                  </button>
                </div>

                {/* Tab Content Barbara */}
                <div className="mt-6 min-h-[220px]">
                  {barbaraTab === 'focus' ? (
                    <div className="space-y-4 text-slate-600">
                      <p className="italic font-medium text-slate-700">
                        „Aus der Akut- und Rehapflege weiss ich, wie entscheidend Bewegungskompetenz für die Genesung und das Wohlbefinden im Alltag ist.“
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>🎯 <strong>Spezialisierung:</strong> Spitex, klinische Rehabilitation, Chirurgie & Urologie.</li>
                        <li>🗣️ <strong>Kurssprachen:</strong> Deutsch, Italienisch, Spanisch</li>
                        <li>💡 <strong>Dein Vorteil:</strong> Tiefes medizinisches Verständnis gepaart mit interkultureller Beratungskompetenz.</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-4 text-sm text-slate-600">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Praxisstationen:</h4>
                        <p>• Seit 2018: Dipl. Pflegefachfrau, Spitex Sarganserland</p>
                        <p>• 2008 - 2018: Kantonsspital Chur (Chirurgie / Urologie)</p>
                        <p>• 2004 - 2008: Kliniken Valens (Rehabilitation)</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Meilensteine:</h4>
                        <p>• Seit 2022: Spezialistin in angewandter Kinaesthetics</p>
                        <p>• 2022 - 2025: Kinaesthetics-Trainer-Ausbildung (Stufe 1 & 2)</p>
                        <p>• Dipl. Pflegefachfrau HF mit jahrzehntelanger Expertise</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons Barbara */}
              <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <a
                  href="https://www.kinaesthetics.ch/trainerinnenliste.cfm?trainer_id=7801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 bg-emerald-700 text-white rounded-xl font-medium hover:bg-emerald-800 transition text-center text-sm shadow-sm"
                >
                  Offizielles Trainer-Profil
                </a>
                <a
                  href="https://www.linkedin.com/in/barbara-morciano-alvarez-0872451b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-slate-300 rounded-xl hover:bg-slate-100 font-medium transition text-center text-sm text-slate-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
