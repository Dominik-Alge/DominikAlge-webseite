export default function Hero() {
  // Funktion für das weiche Scrollen zu den Abschnitten
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block rounded-full bg-white px-4 py-2 shadow text-sm font-medium text-emerald-700">
              Kinaesthetics & Gesundheitsförderung
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black text-slate-900">
              Mitarbeitende entlasten.
              <br />
              Pflegequalität stärken.
              <br />
              Gesundheit nachhaltig fördern.
            </h1>

            <p className="mt-6 text-xl text-emerald-700 font-medium">
              Über Bewegung im Dialog bleiben.
            </p>

            <p className="mt-8 text-lg text-slate-600 max-w-2xl">
              Kinavita unterstützt Institutionen im Gesundheitswesen, Unternehmen und pflegende Angehörige dabei, körperliche Belastungen zu reduzieren, Ressourcen gezielt zu
              nutzen und gesundes Arbeiten langfristig zu fördern.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#angebote"
                onClick={(e) => scrollToSection(e, 'angebote')}
                className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-emerald-800 transition text-center"
              >
                Angebot entdecken
              </a>
              
              <a
                href="#kontakt"
                onClick={(e) => scrollToSection(e, 'kontakt')}
                className="inline-block border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-2xl hover:bg-emerald-50 transition text-center"
              >
                Gespräch vereinbaren
              </a>
            </div>
          </div>

          {/* Der Bild-Container */}
          <div>
            <div className="h-[500px] w-full rounded-[40px] shadow-2xl overflow-hidden relative">
              <img 
                src="/hero-pflege.jpg" 
                alt="Pflegefachkraft bei der professionellen Unterstützung und Bewegung im Dialog" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
