import React, { useState } from 'react';

export default function Datenschutz() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. DER SICHTBARE BEREICH AUF DER WEBSEITE */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-6 px-6">
          
          {/* Das angeforderte Foto/Logo */}
          <img 
            src="/DieMitte.png" 
            alt="Die Mitte Logo" 
            className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />

          {/* Der unauffällige Button, der das Popup öffnet */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-slate-500 hover:text-orange-500 underline text-xs tracking-wide transition-colors cursor-pointer"
          >
            Datenschutzerklärung
          </button>
          
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

            {/* Header mit integriertem, sichtbarem Schliessen-Button */}
            <div className="bg-orange-500 text-white px-8 py-6 flex justify-between items-center sticky top-0 z-10">
              <h2 className="text-2xl sm:text-3xl font-black">
                Datenschutz & Easter Egg 🥚
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-2xl transition flex items-center justify-center cursor-pointer focus:outline-none"
                aria-label="Schliessen"
              >
                &times;
              </button>
            </div>

            {/* Scrollbarer Inhalt */}
            <div className="p-8 space-y-6 text-slate-700 overflow-y-auto flex-1">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hallo 👋</h3>
                <p className="leading-relaxed">Herzlichen Glückwunsch.</p>
                <p className="leading-relaxed">Sie gehören zu den wenigen Menschen, die tatsächlich auf den Datenschutz-Link geklickt haben.</p>
                <p className="leading-relaxed">Ja, diese Website habe ich selbst konzipiert, gestaltet und entwickelt. 😄</p>
                <p className="leading-relaxed">Mit viel Kaffee ☕, einigen späten Abenden und gelegentlicher Unterstützung durch moderne KI-Werkzeuge.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Warum überhaupt eine eigene Website?</h3>
                <p className="leading-relaxed">Ganz einfach:</p>
                <p className="leading-relaxed">Ich wollte eine digitale Visitenkarte schaffen, die meine Persönlichkeit, meinen beruflichen Hintergrund und meine politischen Anliegen authentisch widerspiegelt.</p>
                <p className="leading-relaxed">Ohne Baukastensystem.<br />Ohne Marketing-Agentur.<br />Ohne unnötigen Schnickschnack.</p>
                <p className="font-semibold text-orange-600 mt-3">Made im Rheintal ⚙️</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sie planen etwas Ähnliches?</h3>
                <p className="leading-relaxed">Falls Sie selbst eine Website, eine digitale Idee oder ein kleines Softwareprojekt umsetzen möchten, unterstütze ich Sie gerne mit meinen Erfahrungen.</p>
                <p className="leading-relaxed mt-3">Der Treibstoff für solche Projekte besteht meistens aus:</p>
                <ul className="space-y-2 mt-3">
                  <li>✅ Kaffee ☕</li>
                  <li>✅ Neugier und Ausdauer 🔧</li>
                  <li>✅ einer gesunden Portion "Das muss doch irgendwie funktionieren" 😄</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Und jetzt der eigentliche Datenschutz
                </h3>
                <p className="leading-relaxed">
                  Keine Tracker-Party. Keine Datenverkäufe. Keine versteckten Überraschungen.
                </p>
                <p className="leading-relaxed mt-3">
                  Wenn Sie das Kontaktformular nutzen, werden die übermittelten Daten
                  ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Datenschutzerklärung
              </h3>

              <div className="space-y-6">
            
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">1. Verantwortliche Stelle</h4>
                  <p className="leading-relaxed">
                    Verantwortlich für die Datenbearbeitung auf dieser Website ist Dominik Alge, Hauptstrasse 71, 9434 Au, Schweiz. 
                    Bei Fragen zum Datenschutz können Sie mich per E-Mail unter dominik.alge@bluewin.ch oder über das Kontaktformular erreichen.
                  </p>
                  <p className="leading-relaxed">
                    Verantwortlich für die Datenbearbeitung auf dieser Website ist
                    Dominik Alge, Betreiber von www.dominikalge.ch.
                  </p>
                  <p className="leading-relaxed">
                    Datenschutzanfragen können über das Kontaktformular dieser Website
                    eingereicht werden.
                  </p>
                </div>
            
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    2. Nutzung der Website
                  </h4>
                  <p className="leading-relaxed">
                    Beim Besuch dieser Website können durch den Hosting-Anbieter
                    technisch notwendige Verbindungsdaten verarbeitet werden. Dazu
                    gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
                    Browserinformationen sowie technische Systemdaten.
                  </p>
                  <p className="leading-relaxed">
                    Diese Daten dienen ausschliesslich dem sicheren Betrieb und der
                    Bereitstellung der Website.
                  </p>
                </div>
            
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    3. Nutzung von DominikAI
                  </h4>
                  <p className="leading-relaxed">
                    Die im Chat eingegebenen Inhalte (Prompts) werden an die Server unseres KI-Dienstleisters übermittelt, um die Antwort zu generieren. Die Datenverarbeitung basiert auf unserem berechtigten Interesse, Ihnen einen interaktiven Informationsdienst bereitzustellen. Bitte geben Sie keine sensiblen personenbezogenen Daten ein.
                  </p>
                  
                  <p className="leading-relaxed mt-3">
                    Die im Chat eingegebenen Inhalte werden zur Erstellung einer Antwort technisch verarbeitet und an die für den Betrieb des Sprachmodells erforderlichen Systeme übermittelt.
                  </p>
                  
                  <p className="leading-relaxed mt-3 font-semibold text-orange-600">
                    Bitte geben Sie keine sensiblen oder vertraulichen personenbezogenen Daten in den Chat ein.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    4. Empfänger und Datenübermittlung ins Ausland
                  </h4>
                  <p className="leading-relaxed">
                    Für den Betrieb des Chatbots nutzen wir die Programmierschnittstelle (API) von OpenAI (OpenAI Ireland Ltd. / OpenAI, Inc., USA). Die von Ihnen eingegebenen Chat-Inhalte werden an Server von OpenAI in den USA übertragen.
                    Wir haben mit dem Anbieter eine datenschutzrechtliche Vereinbarung (Data Processing Addendum) inklusive EU-Standardvertragsklauseln abgeschlossen, um ein angemessenes Datenschutzniveau zu gewährleisten.
                  </p>
                </div>               
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    5. Speicherung und Modell-Training
                  </h4>
                  <p className="leading-relaxed">
                    Laut Vereinbarung mit unserem KI-Dienstleister werden die über die API eingegebenen Chat-Daten <strong>nicht</strong> zum Trainieren der zugrundeliegenden Sprachmodelle verwendet. Die Prompts werden vom Anbieter temporär (in der Regel maximal 30 Tage) zur Missbrauchserkennung gespeichert und danach gelöscht. Auf unserer Website findet keine dauerhafte Speicherung oder Profilbildung Ihrer Chatverläufe statt.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    6. System- und Protokolldaten
                  </h4>
                  <p className="leading-relaxed">
                    Beim Betrieb der Website und des Chatbots können technisch notwendige Protokoll- und Systemdaten vorübergehend bei eingesetzten Infrastruktur-Dienstleistern anfallen, um die Stabilität und Sicherheit des Systems zu gewährleisten.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    7. Kontaktformular
                  </h4>
                  <p className="leading-relaxed">
                    Daten, die über das Kontaktformular übermittelt werden, werden
                    ausschliesslich zur Bearbeitung der jeweiligen Anfrage verwendet.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    8. Rechte betroffener Personen
                  </h4>
                  <p className="leading-relaxed">
                    Betroffene Personen haben im Rahmen des anwendbaren Datenschutzrechts
                    insbesondere das Recht auf Auskunft, Berichtigung und Löschung ihrer
                    personenbezogenen Daten, soweit keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    9. Änderungen
                  </h4>
                  <p className="leading-relaxed">
                    Diese Datenschutzerklärung kann angepasst werden, wenn technische,
                    organatorische oder rechtliche Änderungen dies erforderlich machen.
                  </p>
                </div>
        
              </div> {/* Schliesst <div className="space-y-6"> */}
            </div> {/* Schliesst den scrollbaren Inhalt <div className="p-8 ... flex-1"> */}
          </div> {/* Schliesst das weisse Modal-Fenster <div className="relative ..."> */}
        </div> {/* Schliesst das Full-Screen-Overlay <div className="fixed ..."> */}
      )}
    </>
  );
}

