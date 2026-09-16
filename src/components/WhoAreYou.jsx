import { useState } from "react";

export default function WhoAreYou() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Für wen suchen Sie Unterstützung?
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Jede Situation bringt andere Herausforderungen mit sich.
            Wählen Sie den Bereich, der zu Ihnen passt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <button
            onClick={() => setSelected("institution")}
            className={`rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-left cursor-pointer border-2 ${
              selected === "institution"
                ? "bg-emerald-50 border-emerald-500"
                : "bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <div className="text-5xl mb-4">🏥</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Institutionen & Stiftungen
            </h3>

            <p className="mt-4 text-slate-600">
              Mitarbeitende entlasten,
              Ausfälle reduzieren und
              Pflegequalität stärken.
            </p>
          </button>

          <button
            onClick={() => setSelected("mitarbeiter")}
            className={`rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-left cursor-pointer border-2 ${
              selected === "mitarbeiter"
                ? "bg-emerald-50 border-emerald-500"
                : "bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <div className="text-5xl mb-4">👩‍⚕️</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Mitarbeitende
            </h3>

            <p className="mt-4 text-slate-600">
              Gesund arbeiten,
              den Körper schonen und
              Bewegung besser verstehen.
            </p>
          </button>

          <button
            onClick={() => setSelected("angehoerige")}
            className={`rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 text-left cursor-pointer border-2 ${
              selected === "angehoerige"
                ? "bg-emerald-50 border-emerald-500"
                : "bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <div className="text-5xl mb-4">🏡</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Angehörige
            </h3>

            <p className="mt-4 text-slate-600">
              Menschen sicher begleiten,
              Kompetenzen aufbauen und
              Selbstständigkeit erhalten.
            </p>
          </button>

        </div>

        {/* DETAILS FÜR INSTITUTIONEN */}
        {selected === "institution" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border border-slate-100 animate-fadeIn flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Nutzen für Institutionen & Heimleitungen
              </h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>✅ Voraussetzungen für weniger belastungsbedingte Ausfälle schaffen</li>
                <li>✅ Mitarbeitende langfristig gesund erhalten</li>
                <li>✅ Arbeitgeberattraktivität stärken</li>
                <li>✅ Pflegequalität fördern</li>
                <li>✅ Gesundheitsförderung nachhaltig verankern</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#kontakt"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
              >
                Jetzt unverbindliche Inhouse-Offerte anfordern
              </a>
            </div>
          </div>
        )}

        {/* DETAILS FÜR MITARBEITENDE */}
        {selected === "mitarbeiter" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border border-slate-100 animate-fadeIn flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Nutzen für Mitarbeitende
              </h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>✅ Rücken entlasten</li>
                <li>✅ Bewegungsabläufe besser verstehen</li>
                <li>✅ Gesünder arbeiten</li>
                <li>✅ Belastungen reduzieren</li>
                <li>✅ Langfristig arbeitsfähig bleiben</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#kontakt"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
              >
                Weiterbildung anfragen
              </a>
            </div>
          </div>
        )}

        {/* DETAILS FÜR ANGEHÖRIGE */}
        {selected === "angehoerige" && (
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl border border-slate-100 animate-fadeIn flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Nutzen für Angehörige
              </h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>✅ Sicherheit gewinnen</li>
                <li>✅ Kompetenzen aufbauen</li>
                <li>✅ Selbstständigkeit fördern</li>
                <li>✅ Unterstützung im Alltag erhalten</li>
                <li>✅ Bewegungen sicher begleiten</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500 italic">
                Hinweis: Viele Schweizer Krankenkassen beteiligen sich über die Zusatzversicherung an den Kosten.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#kontakt"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
              >
                Kostenloses Erstgespräch buchen
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
