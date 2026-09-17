import React from 'react';

export default function Datenschutz({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="bg-orange-500 text-white px-8 py-6 sticky top-0 z-10">
          <h2 className="text-2xl sm:text-3xl font-black">
            Datenschutz & Easter Egg 🥚
          </h2>
        </div>

        {/* Inhalt */}
        <div className="p-8 space-y-6 text-slate-700">
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
            <p className="leading-relaxed">Falls Sie selbst eine Website, eine digitale Idee oder ein kleines Softwareprojekt umsetzen möchten, unterstütze ich Sie gerne.</p>
            <p className="leading-relaxed mt-3">Bezahlung akzeptiere ich bevorzugt in:</p>
            <ul className="space-y-2 mt-3">
              <li>✅ Kaffee ☕</li>
              <li>✅ Wertschätzung 🤝</li>
              <li>✅ oder notfalls auch in Schweizer Franken 💵🤑</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Und jetzt der eigentliche Datenschutz</h3>
            <p className="leading-relaxed">Keine Tracker-Party. Keine Datenverkäufe. Keine versteckten Überraschungen.</p>
            <p className="leading-relaxed mt-3">Wenn Sie das Kontaktformular nutzen, werden die übermittelten Daten ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.</p>
          </div>

          <div className="pt-4 border-t border-slate-200 text-sm text-slate-500 italic">
            Falls Sie bis hier gelesen haben: Danke für Ihre Neugier. Menschen, die Dinge hinterfragen, sind mir grundsätzlich sympathisch. 😉
          </div>
        </div>

        {/* Schliessen Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-2xl transition flex items-center justify-center z-20"
          aria-label="Schliessen"
        >
          &times;
        </button>

      </div>
    </div>
  );
}
