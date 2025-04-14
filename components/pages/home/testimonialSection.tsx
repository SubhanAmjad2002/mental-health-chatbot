"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./testimonialCard";
import { testimonials } from "@/components/data/projectData";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who have used our platform to support
            their mental wellbeing journey.
          </p>
        </div>

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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-white p-6 rounded-lg">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
