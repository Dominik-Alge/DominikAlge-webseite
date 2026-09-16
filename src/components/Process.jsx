const steps = [
  {
    number: "01",
    title: "Kennenlernen",
    text: "Im kostenlosen Erstgespräch lernen wir Ihre Situation, Herausforderungen und Ziele kennen.",
  },
  {
    number: "02",
    title: "Analyse",
    text: "Gemeinsam betrachten wir bestehende Abläufe, Belastungen und vorhandene Ressourcen.",
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Praxisnahe Schulungen, Begleitungen und Lernangebote werden direkt im Alltag integriert.",
  },
  {
    number: "04",
    title: "Nachhaltigkeit",
    text: "Neue Erkenntnisse werden langfristig verankert und im Arbeitsalltag weiterentwickelt.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-pink-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-emerald-700 font-semibold">
            Ablauf
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            So läuft die Zusammenarbeit ab
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Von der ersten Kontaktaufnahme bis zur nachhaltigen
            Verankerung begleiten wir Sie Schritt für Schritt.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-slate-50 p-8 shadow-lg hover:-translate-y-2 transition"
            >

              <div className="text-5xl font-black text-emerald-600">
                {step.number}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
