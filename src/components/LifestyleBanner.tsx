import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LimeSlice, FloatingLeaf, FizzyBubble } from './Decorations';

interface LifestyleBannerProps {
  onExploreMore?: () => void;
}

export const LifestyleBanner: React.FC<LifestyleBannerProps> = ({ onExploreMore }) => {
  return (
    <section className="py-16 md:py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: ISOLATED PRODUCT PHOTOGRAPHY (NO BOX, NO TABLE, NO SCENERY) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[460px]">
            {/* Soft Ambient Glow */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#E8F5D0] blur-3xl opacity-60 -z-10 pointer-events-none" />

            {/* Isolated Drink Cup Container */}
            <div className="relative w-64 sm:w-76 md:w-84 h-[360px] sm:h-[420px] md:h-[460px] flex items-center justify-center group hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/drinks/chilled_glass_straw.png"
                alt="Chilled Limca Mint Takeaway Cup - Isolated product cutout"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(31,58,29,0.2)]"
              />

              {/* Floating Lime Slices */}
              <div className="absolute bottom-6 -left-4 animate-float-slow pointer-events-none">
                <LimeSlice className="w-16 h-16 md:w-20 md:h-20" />
              </div>
              <div className="absolute top-8 -right-4 animate-float-reverse pointer-events-none">
                <FloatingLeaf className="w-14 h-14 md:w-16 md:h-16" rotation={-25} />
              </div>

              {/* Floating Bubbles */}
              <div className="absolute top-1/3 left-4 animate-bubble pointer-events-none">
                <FizzyBubble size={20} />
              </div>
            </div>

            {/* Subtle Natural Floor Contact Shadow */}
            <div className="w-48 sm:w-56 md:w-64 h-5 bg-black/15 blur-md rounded-[100%] mt-[-10px] pointer-events-none" />
          </div>

          {/* Right Column: Tag with radiating accent lines, Heading, Text, Button */}
          <div className="lg:col-span-6 text-left">
            {/* Tag with radiating accent lines */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-[#9BC53D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                REFRESHING LIFESTYLE
              </span>
              <svg viewBox="0 0 40 24" fill="none" className="w-7 h-5 text-[#9BC53D]">
                <line x1="6" y1="12" x2="1" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="8" y1="5" x2="3" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="8" y1="19" x2="3" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F3A1D] tracking-tight leading-tight mb-6">
              Drink Chilled.<br />
              Feel Amazing.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
              Cool, fizzy and creamy - our drinks are perfect for hot days, family outings and evening hangouts. Prepared with fresh dairy and ice cold fizz to revitalize you instantly.
            </p>

            <button
              type="button"
              onClick={onExploreMore}
              className="inline-flex items-center gap-3 bg-[#1F3A1D] hover:bg-[#142613] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(31,58,29,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>EXPLORE MORE</span>
              <ArrowRight className="w-4 h-4 text-[#9BC53D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
