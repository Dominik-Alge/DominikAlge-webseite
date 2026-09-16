import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetGroup: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier folgt die Logik für den Mail-Versand oder API-Call
    console.log("Formular abgeschickt:", formData);
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wider text-emerald-700 uppercase">
            Kontakt
          </span>
          <h2 className="mt-2 text-4xl lg:text-5xl font-black text-slate-900">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Sie möchten mehr über Kinavita erfahren oder eine unverbindliche Anfrage stellen? 
            Wir freuen uns auf Ihre Kontaktaufnahme.
          </p>
        </div>

        {/* Grid-Layout: Links Kontaktdaten, rechts das Formular */}
        <div className="mt-16 grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Linke Spalte: Visitenkarte (Aus deinem Screenshot optimiert) */}
          <div className="lg:col-span-2 bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-lg sticky top-8">
            <h3 className="text-2xl font-bold text-slate-900">Alge Rina</h3>
            <p className="text-emerald-700 font-medium mt-1">Kinaesthetics-Trainerin</p>
            
            <div className="mt-8 space-y-4 text-slate-600">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:rina.alge@kinaesthetics-net.ch" className="hover:text-emerald-700 transition">
                  rina.alge@kinaesthetics-net.ch
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <a href="tel:+41797096559" className="hover:text-emerald-700 transition">
                  +41 79 709 65 59
                </a>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Professionelles Formular */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Telefonnummer</label>
                <input
                  type="tel"
                  placeholder="Für eventuelle Rückfragen"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail-Adresse *</label>
              <input
                type="email"
                required
                placeholder="name@unternehmen.ch"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Wichtig für die Zielgruppen-Segmentierung */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Ich frage an als... *</label>
              <select
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition text-slate-600"
                value={formData.targetGroup}
                onChange={(e) => setFormData({ ...formData, targetGroup: e.target.value })}
              >
                <option value="" disabled>Bitte auswählen</option>
                <option value="institution">Institution & Stiftung (Heimleitung / HR)</option>
                <option value="mitarbeiter">Mitarbeitende im Gesundheitswesen</option>
                <option value="angehoerige">Privater Angehöriger</option>
                <option value="sonstiges">Sonstige Anfrage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Ihre Nachricht *</label>
              <textarea
                required
                rows="4"
                placeholder="Wie können wir Sie unterstützen?"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-emerald-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-800 transition text-center cursor-pointer"
            >
              Nachricht senden
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
