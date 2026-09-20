import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meine Gedanken
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3, // Zeigt alle 3 Artikel auf großen Bildschirmen nebeneinander
            },
          }}
          className="pb-12" // Verhindert, dass die Pagination-Punkte das Design abschneiden
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col justify-between">
                <div>
                  {/* KORREKTUR: Bild als echtes <img> Tag ausgeben */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {article.date}
                    </p>

                    <h3 className="text-2xl font-bold mb-3">
                      {article.title}
                    </h3>

                    <p className="text-gray-600">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* KORREKTUR: Öffnender <a>-Tag hinzugefügt & Button ans Ende gesetzt */}
                <div className="p-6 pt-0">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Auf LinkedIn lesen →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
