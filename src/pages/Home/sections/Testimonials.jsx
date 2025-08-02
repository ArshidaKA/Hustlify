import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Arya Kapoor",
    role: "Sales Intern → Remote Closer",
    image: "/user1.jpg",
    review:
      "Hustlify’s coaching completely transformed my confidence. From cold calls to high-ticket closing—everything was practical and job-ready.",
  },
  {
    name: "Rakesh Sharma",
    role: "College Grad → 6-Figure Closer",
    image: "/user2.jpg",
    review:
      "The frameworks, live calls, and placement support were unmatched. I cracked a remote job in under 60 days!",
  },
  {
    name: "Meera Thomas",
    role: "Freelancer → SDR",
    image: "/user3.jpg",
    review:
      "Absolutely life-changing. From pitch crafting to objection handling, Hustlify gave me a roadmap to close like a pro.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-yellow-200 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Student Testimonials</h2>
        <p className="text-yellow-100 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Hear directly from our learners about how Hustlify helped them break into high-paying sales careers.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#111] border border-yellow-200 rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-200"
                />
                <div>
                  <h4 className="font-semibold text-yellow-100">{testimonial.name}</h4>
                  <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-yellow-100 text-sm mb-4">
                {testimonial.review}
              </p>

              <div className="flex gap-1 text-yellow-200">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
