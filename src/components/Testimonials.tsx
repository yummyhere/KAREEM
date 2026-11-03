import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { HeadingLeafLeft, HeadingLeafRight } from './Decorations';

interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  avatarBg: string;
  avatarInitial: string;
  avatarImage: string;
}

export const Testimonials: React.FC = () => {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 'sarah-khan',
      name: 'Sarah Khan',
      city: 'Rahim Yar Khan',
      quote: 'The best milk soda in Rahim Yar Khan! Ice cold and so creamy. It is our family’s go-to spot whenever we visit Shahi Road.',
      rating: 5,
      avatarBg: 'bg-emerald-100 text-emerald-800',
      avatarInitial: 'SK',
      avatarImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'ali-raza',
      name: 'Ali Raza',
      city: 'Rahim Yar Khan',
      quote: "Kareem's Limca is my daily refreshment. Highly recommended! Nothing beats that masala punch after a long workday.",
      rating: 5,
      avatarBg: 'bg-lime-100 text-lime-800',
      avatarInitial: 'AR',
      avatarImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'ayesha-malik',
      name: 'Ayesha Malik',
      city: 'Rahim Yar Khan',
      quote: 'Love the chocolate milk soda and the fresh dairy shakes. Great taste, hygienic preparation, and friendly service always!',
      rating: 5,
      avatarBg: 'bg-teal-100 text-teal-800',
      avatarInitial: 'AM',
      avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const handlePrev = () => {
    setActiveDot((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveDot((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Title flanked by leaves */}
        <div className="inline-flex items-center justify-center gap-3 mb-12 md:mb-16">
          <HeadingLeafLeft className="w-6 h-6 text-[#9BC53D]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1F3A1D] tracking-tight">
            What Our Customers Say
          </h2>
          <HeadingLeafRight className="w-6 h-6 text-[#9BC53D]" />
        </div>

        {/* Carousel Container with Prev/Next buttons */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)] items-center justify-center text-[#1F3A1D] hover:text-[#9BC53D] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Testimonial Cards Grid (shows 3 cards matching Clean Juice) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFBF7] border border-[#ECF1E3] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                {/* Avatar with real photo and fallback initial underneath */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-tr from-[#9BC53D] to-[#E2F2B6] relative flex items-center justify-center">
                    <span className="text-base font-black text-[#1F3A1D]">
                      {item.avatarInitial}
                    </span>
                    <img
                      src={item.avatarImage}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#9BC53D] border-2 border-white flex items-center justify-center text-[10px] text-white font-black shadow-xs z-10">
                    ✓
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-gray-700 italic font-medium leading-relaxed mb-4 min-h-[56px] flex items-center justify-center">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author Name */}
                <h4 className="text-sm font-extrabold text-[#1F3A1D] mb-1">
                  {item.name}
                </h4>

                {/* City */}
                <span className="text-[11px] font-semibold text-gray-400 mb-2">
                  {item.city}
                </span>

                {/* 5 Green/Gold Stars */}
                <div className="flex items-center gap-1 text-[#9BC53D]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#9BC53D]" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.08)] items-center justify-center text-[#1F3A1D] hover:text-[#9BC53D] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveDot(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeDot === index ? 'w-7 bg-[#9BC53D]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
