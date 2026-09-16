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
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50 overflow-hidden flex items-center">
      
      {/* Dynamische Hintergrund-Deko im Corporate Design */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text-Spalte */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 self-start">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="inline-block rounded-full bg-white px-4 py-1.5 shadow-sm border border-orange-100 text-sm font-semibold text-orange-600 tracking-wide uppercase">
                Kantonsrat St. Gallen
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-none tracking-tight">
              Praxis stärken.
              <br />
              Innovation fördern.
              <br />
              <span className="text-orange-600">Verantwortung</span> leben.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-700 font-medium max-w-xl leading-relaxed">
              Freiheit. Solidarität. Verantwortung.
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Als Gruppenleiter in der Industrie kenne ich die Herausforderungen 
              von Unternehmen, Mitarbeitenden und Familien aus erster Hand. 
              Diese Erfahrungen möchte ich im Kantonsrat St. Gallen einbringen.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#themen"
                onClick={(e) => scrollToSection(e, 'themen')}
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-orange-600/20 hover:bg-orange-500 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 text-center min-w-[160px]"
              >
                Meine Themen
              </a>
              
              <a
                href="#ueber-mich"
                onClick={(e) => scrollToSection(e, 'ueber-mich')}
                className="inline-block border-2 border-slate-800 text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-center min-w-[160px]"
              >
                Über mich
              </a>
            </div>
          </div>

          {/* Bild-Spalte mit interaktivem Hover-Effekt */}
          <div className="relative group justify-self-center lg:justify-self-end w-full max-w-[500px]">
            {/* Dynamischer Leuchteffekt hinter dem Bild */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-[40px] blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105"></div>
            
            <div className="h-[450px] sm:h-[550px] w-full rounded-[40px] shadow-2xl overflow-hidden relative border-4 border-white bg-slate-100 transform group-hover:scale-[1.02] transition-all duration-500 ease-out">
              <img 
                src="Dominik.jpg" 
                alt="Dominik Alge" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Edles Overlay auf dem Bild */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

