import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier folgt deine Logik für den Mail-Versand oder API-Call
    console.log("Formular abgeschickt:", formData);
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-orange-600 uppercase">
            Direkter Draht
          </span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Haben Sie ein konkretes Anliegen zum Werkplatz St. Gallen, Fragen zu meiner Person 
            oder möchten Sie mich im Wahlkampf unterstützen? Ich freue mich auf Ihre Nachricht.
          </p>
        </div>

        {/* Grid-Layout: Links Kontaktdaten, rechts das Formular */}
        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Linke Spalte: Visitenkarte (Vollständig angepasst) */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-lg lg:sticky lg:top-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Dominik Alge</h3>
            <p className="text-orange-600 font-semibold mt-1">Kandidat für den Kantonsrat</p>
            
            <div className="mt-8 space-y-4 text-slate-700 font-medium">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:dominik.alge@bluewin.ch" className="hover:text-orange-600 transition">
                  dominik.alge@bluewin.ch
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <a href="tel:+41786894545" className="hover:text-orange-600 transition">
                  078 689 45 45
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <p><strong>Die Mitte Au-Heerbrugg</strong></p>
              <p className="mt-1">Gemeinsam für einen starken, zukunftsorientierten und pragmatischen Kanton St. Gallen.</p>
            </div>
          </div>

          {/* Rechte Spalte: Politisches Formular */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Ihr Vor- und Nachname"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition text-slate-900 font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Telefonnummer</label>
                <input
                  type="tel"
                  placeholder="Für den direkten Austausch"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition text-slate-900 font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">E-Mail-Adresse *</label>
              <input
                type="email"
                required
                placeholder="ihre.adresse@beispiel.ch"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition text-slate-900 font-medium"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Wahlkampf-spezifische Segmentierung */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mein Anliegen... *</label>
              <select
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition text-slate-700 font-medium cursor-pointer"
                value={formData.requestType}
                onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
              >
                <option value="" disabled>Bitte auswählen</option>
                <option value="komitee">Ich möchte Dominik Alge im Komitee unterstützen</option>
                <option value="frage">Ich habe eine politische Frage / ein Anliegen</option>
                <option value="medien">Medien- oder Verbandsanfrage</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Ihre Nachricht / Ihr Anliegen *</label>
              <textarea
                required
                rows="4"
                placeholder="Beschreiben Sie kurz, worum es geht..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition resize-none text-slate-900 font-medium"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-200 text-center cursor-pointer uppercase tracking-wider text-xs"
            >
              Nachricht senden
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
