"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, Navigation } from "swiper/modules";
import { carouselSlides } from "@/components/data/projectData";
import { cn } from "@/lib/utils";

export default function HeroCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, A11y, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
        }}
        speed={1000}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
              {/* Image with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-6 md:px-16 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  {slide.description}
                </p>
                <div>
                  <Link href={slide.buttonLink}>
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-6 text-lg"
                    >
                      {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
