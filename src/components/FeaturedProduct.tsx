import React from 'react';
import { ArrowRight, Droplets, Snowflake, Sparkles } from 'lucide-react';
import { FloatingLeaf, LimeSlice, FizzyBubble } from './Decorations';

interface FeaturedProductProps {
  onShopNow: () => void;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ onShopNow }) => {
  return (
    <section className="py-12 md:py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Full-width lime green rounded banner card */}
        <div className="relative rounded-[32px] md:rounded-[40px] bg-gradient-to-r from-[#D7EDA6] via-[#E4F5BD] to-[#EDF9D4] border border-[#CDE595] p-6 sm:p-10 md:p-12 overflow-hidden shadow-xs">
          {/* Subtle background leaves */}
          <div className="absolute top-2 left-1/3 opacity-30 pointer-events-none">
            <FloatingLeaf className="w-14 h-14" rotation={15} />
          </div>
          <div className="absolute bottom-2 right-1/3 opacity-30 pointer-events-none">
            <FloatingLeaf className="w-14 h-14" rotation={-40} flip />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading, Subtext, CTA */}
            <div className="md:col-span-4 text-left">
              <span className="text-[#558B2F] font-extrabold text-xs sm:text-sm tracking-wider uppercase block mb-2">
                Featured Drink
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1F3A1D] tracking-tight mb-3">
                Ice Cream<br />Milk Soda
              </h2>
              <p className="text-gray-700 text-xs sm:text-sm font-medium mb-6 max-w-xs">
                A perfect blend of fizz and creamy goodness.
              </p>
              <button
                type="button"
                onClick={onShopNow}
                className="inline-flex items-center gap-2.5 bg-[#1F3A1D] hover:bg-[#142613] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 text-[#9BC53D]" />
              </button>
            </div>

            {/* Center Column: ISOLATED PRODUCT CUTOUT WITH SPLASH EFFECT (NO PHOTO CONTAINER) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center relative min-h-[280px] sm:min-h-[320px]">
              {/* Milk & Soda Splash vector arcs in background */}
              <svg
                viewBox="0 0 300 300"
                className="absolute inset-0 w-full h-full pointer-events-none -z-10 animate-float-slow"
                fill="none"
              >
                <path d="M150 150 Q110 90 70 110 Q90 140 150 150 Z" fill="#ffffff" opacity="0.85" />
                <path d="M150 150 Q190 80 240 100 Q210 130 150 150 Z" fill="#ffffff" opacity="0.8" />
                <path d="M150 150 Q70 190 60 230 Q110 210 150 150 Z" fill="#ffffff" opacity="0.75" />
                <path d="M150 150 Q230 190 250 230 Q200 210 150 150 Z" fill="#ffffff" opacity="0.75" />
                <circle cx="60" cy="90" r="5" fill="#ffffff" opacity="0.9" />
                <circle cx="250" cy="80" r="6" fill="#ffffff" opacity="0.85" />
                <circle cx="270" cy="180" r="4.5" fill="#ffffff" opacity="0.85" />
                <circle cx="45" cy="210" r="5" fill="#ffffff" opacity="0.9" />
              </svg>

              {/* Isolated Transparent PNG Product Cutout */}
              <div className="relative w-44 sm:w-52 h-64 sm:h-76 flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/drinks/milk_soda_glass.png"
                  alt="Ice Cream Milk Soda - Isolated product cutout"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(31,58,29,0.22)]"
                />
              </div>

              {/* Natural Soft Contact Shadow Ellipse */}
              <div className="w-32 sm:w-40 h-4 bg-black/15 blur-sm rounded-[100%] mt-[-8px] pointer-events-none" />

              {/* Mint & Citrus accents */}
              <div className="absolute -bottom-2 -left-2 animate-float-reverse pointer-events-none">
                <FloatingLeaf className="w-12 h-12" rotation={25} />
              </div>
              <div className="absolute top-2 -right-2 animate-float-slow pointer-events-none">
                <LimeSlice className="w-12 h-12" />
              </div>
              <div className="absolute top-1/4 right-1/4 animate-bubble pointer-events-none">
                <FizzyBubble size={16} />
              </div>
            </div>

            {/* Right Column: Three Feature Icons with proper spacing */}
            <div className="md:col-span-4 flex flex-col gap-5 justify-center md:pl-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#1F3A1D] flex items-center justify-center text-[#1F3A1D] shrink-0 bg-white/60 shadow-xs">
                  <Droplets className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm md:text-base font-extrabold text-[#1F3A1D] tracking-tight whitespace-nowrap">
                  100%&nbsp;Fresh Dairy
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#1F3A1D] flex items-center justify-center text-[#1F3A1D] shrink-0 bg-white/60 shadow-xs">
                  <Snowflake className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm md:text-base font-extrabold text-[#1F3A1D] tracking-tight whitespace-nowrap">
                  Served&nbsp;Ice Cold
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full border-2 border-[#1F3A1D] flex items-center justify-center text-[#1F3A1D] shrink-0 bg-white/60 shadow-xs">
                  <Sparkles className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm md:text-base font-extrabold text-[#1F3A1D] tracking-tight whitespace-nowrap">
                  Rich&nbsp;in Flavour
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
