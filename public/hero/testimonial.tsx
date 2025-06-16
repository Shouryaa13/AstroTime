"use client";
import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  text: string;
  avatarColor?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Saara Williams",
    role: "Marketing Manager",
    company: "Global Brands Inc.",
    rating: 4,
    text: "Their service transformed our digital presence. The team's attention to detail and creative solutions delivered exceptional results that increased our engagement metrics by 65%.",
    avatarColor: "#9C27B0"
  },
  {
    id: "2",
    name: "Raj Patel",
    role: "CTO",
    company: "TechStart",
    rating: 5,
    text: "Reliable and innovative. We've partnered with them for three projects and each exceeded expectations. Their technical expertise is matched only by their business acumen.",
    avatarColor: "#3F51B5"
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Product Director",
    company: "InnovateCorp",
    rating: 5,
    text: "Outstanding strategic thinking combined with flawless execution. Our go-to partner for critical initiatives that require both creativity and precision.",
    avatarColor: "#E91E63"
  },
  {
    id: "4",
    name: "Michael Johnson",
    role: "Founder & CEO",
    company: "NextGen Solutions",
    rating: 4,
    text: "Delivered on time and on budget while maintaining the highest quality standards. Their team became an extension of our own during the project lifecycle.",
    avatarColor: "#00BCD4"
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Efficiency Partners",
    rating: 5,
    text: "Streamlined our processes with their solutions. The measurable impact was visible within weeks of implementation, saving us 30+ hours per week in manual work.",
    avatarColor: "#FF9800"
  },
  {
    id: "6",
    name: "David Kim",
    role: "Financial Advisor",
    company: "Wealth Management LLC",
    rating: 4,
    text: "Professional, responsive, and technically excellent. They understand business needs beyond just technology, which makes them invaluable partners.",
    avatarColor: "#4CAF50"
  }
];

const Review: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    swiperRef.current = new Swiper('#testimonial-slider', {
      modules: [Autoplay, Pagination],
      effect: 'slide',
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true
      },
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} bg-[#800000] opacity-30 w-2 h-2 mx-1 rounded-full transition-all duration-300"></span>`;
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
      on: {
        slideChange: (swiper) => {
          setActiveIndex(swiper.realIndex);
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#FFD700]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:py-28 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 text-sm font-semibold text-[#800000] bg-[#FFEBEE] rounded-full mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it. Here's what our clients say about working with us.
          </motion.p>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-[#800000] via-[#A00000] to-[#800000] mx-auto mt-6 rounded-full opacity-90"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="swiper !pb-10" id="testimonial-slider">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="swiper-slide"
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                  }}
                >
                  <motion.div 
                    className={`bg-white rounded-xl border border-gray-100 p-6 h-[280px] flex flex-col shadow-sm transition-all duration-300 ${activeIndex === index ? 'scale-100' : 'scale-95'}`}
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                    whileHover={{ 
                      scale: activeIndex === index ? 1.02 : 0.97,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="flex-grow">
                      <div className="flex items-start mb-4">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-md"
                          style={{ backgroundColor: testimonial.avatarColor }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {testimonial.name.charAt(0)}
                        </motion.div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900 text-base leading-tight">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                            {testimonial.company && `, ${testimonial.company}`}
                          </p>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <blockquote className="relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#800000] before:to-[#A00000] before:opacity-80">
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                          "{testimonial.text}"
                        </p>
                      </blockquote>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="swiper-pagination !bottom-0"></div>
          </div>
        </div>

        {/* Brand logos for desktop */}
        <motion.div 
          className="hidden md:flex justify-center items-center mt-16 space-x-8 lg:space-x-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { name: "TechStart", logo: "/techstart-logo.svg" },
            { name: "Global Brands", logo: "/global-brands-logo.svg" },
            { name: "InnovateCorp", logo: "/innovatecorp-logo.svg" },
            { name: "NextGen", logo: "/nextgen-logo.svg" },
          ].map((brand, index) => (
            <motion.div 
              key={brand.name}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Replace with actual logo components or images */}
              <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium">
                {brand.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;