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
          }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                {article.image}

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {article.date}
                  </p>

                  <h3 className="text-2xl font-bold mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {article.excerpt}
                  </p>

                  {article.url}
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
