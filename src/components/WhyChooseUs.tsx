import React from 'react';
import { HeadingLeafLeft, HeadingLeafRight } from './Decorations';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'ingredients',
      title: 'Quality Ingredients',
      subtitle: 'Only the best.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1F3A1D]">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z" />
          <path d="M7 17 C 8 11, 14 7, 18 6 C 17 12, 13 16, 7 17 Z" fill="#9BC53D" stroke="#1F3A1D" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'dairy',
      title: 'Fresh Dairy',
      subtitle: 'Made fresh daily.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1F3A1D]">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      id: 'delivery',
      title: 'Fast Delivery & Takeaway',
      subtitle: 'Chilled anywhere.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1F3A1D]">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      )
    },
    {
      id: 'taste',
      title: 'Great Taste',
      subtitle: 'Because you deserve it.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#1F3A1D]">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Title with twin flanking leaves */}
        <div className="inline-flex items-center justify-center gap-3 mb-12 md:mb-16">
          <HeadingLeafLeft className="w-6 h-6 text-[#9BC53D]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1F3A1D] tracking-tight">
            Why Choose Kareem&apos;s?
          </h2>
          <HeadingLeafRight className="w-6 h-6 text-[#9BC53D]" />
        </div>

        {/* 4 Columns with subtle divider lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-gray-200">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center px-4 pt-6 sm:pt-0 group">
              <div className="w-14 h-14 rounded-full bg-[#F4F9EB] border border-[#E1F0CE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold text-[#1F3A1D] mb-1 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
