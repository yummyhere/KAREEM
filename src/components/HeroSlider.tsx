import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES, HeroSlide } from '../data/beverages';
import { FloatingLeaf, LimeSlice, FizzyBubble, HeroDecoration, CircularBadge } from './Decorations';

interface HeroSliderProps {
  onShowAllDrinks: () => void;
  onSelectHeroProduct: (slide: HeroSlide) => void;
}

const getGiantTextSizeClass = (text: string) => {
  const len = text.length;
  if (len <= 5) {
    // e.g. "LIMCA" (5 letters)
    return "text-[56px] sm:text-[95px] md:text-[140px] lg:text-[180px] xl:text-[215px]";
  }
  if (len <= 7) {
    return "text-[44px] sm:text-[72px] md:text-[108px] lg:text-[140px] xl:text-[165px]";
  }
  if (len <= 9) {
    // e.g. "CHOCOLATE" (9 letters), "MILK SODA" (9 chars)
    return "text-[34px] sm:text-[56px] md:text-[84px] lg:text-[112px] xl:text-[132px]";
  }
  // e.g. "DAIRY SHAKE" (11 chars)
  return "text-[28px] sm:text-[46px] md:text-[68px] lg:text-[92px] xl:text-[108px]";
};

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onShowAllDrinks,
  onSelectHeroProduct
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = HERO_SLIDES[currentIndex];
  const themeElement = (
    limca: React.ReactNode,
    milkSoda: React.ReactNode,
    chocolate: React.ReactNode,
    dairyShake: React.ReactNode
  ) => (
    <div key={slide.id} className="animate-drink-fade">
      {slide.id === 1 ? limca : slide.id === 2 ? milkSoda : slide.id === 3 ? chocolate : dairyShake}
    </div>
  );

  // Auto-cycle through drinks every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-white pt-4 pb-12 lg:pb-20 overflow-hidden select-none">
      {/* Decorative floating elements for the active drink */}
      <div className="absolute top-12 left-6 lg:left-16 animate-float-slow opacity-85 z-10 pointer-events-none">
        {themeElement(
          <FloatingLeaf className="w-12 h-12 lg:w-16 lg:h-16" rotation={-35} />,
          <HeroDecoration kind="milk-drop" className="w-12 h-12 lg:w-16 lg:h-16" />,
          <HeroDecoration kind="cocoa-bean" className="w-12 h-12 lg:w-16 lg:h-16" />,
          <HeroDecoration kind="pistachio" className="w-12 h-12 lg:w-16 lg:h-16" />
        )}
      </div>
      <div className="absolute top-20 right-8 lg:right-28 animate-float-reverse opacity-80 z-10 pointer-events-none">
        {themeElement(
          <FloatingLeaf className="w-10 h-10 lg:w-14 lg:h-14" rotation={40} flip />,
          <FizzyBubble size={42} />,
          <HeroDecoration kind="chocolate-chunk" className="w-10 h-10 lg:w-14 lg:h-14" />,
          <HeroDecoration kind="almond" className="w-10 h-10 lg:w-14 lg:h-14" />
        )}
      </div>
      <div className="absolute bottom-12 left-10 lg:left-36 animate-float-slow opacity-75 z-10 pointer-events-none">
        {themeElement(
          <FloatingLeaf className="w-14 h-14" rotation={70} />,
          <HeroDecoration kind="milk-drop" className="w-14 h-14" />,
          <HeroDecoration kind="cocoa-bean" className="w-14 h-14" />,
          <HeroDecoration kind="pistachio" className="w-14 h-14" />
        )}
      </div>
      <div className="absolute top-2/3 right-12 lg:right-44 animate-float-reverse opacity-70 z-10 pointer-events-none">
        {themeElement(
          <FloatingLeaf className="w-12 h-12" rotation={-20} />,
          <FizzyBubble size={36} />,
          <HeroDecoration kind="chocolate-chunk" className="w-12 h-12" />,
          <HeroDecoration kind="almond" className="w-12 h-12" />
        )}
      </div>

      {/* Floating drink-themed accents */}
      <div className="absolute top-44 left-1/5 animate-float-slow opacity-90 z-20 hidden md:block pointer-events-none">
        {themeElement(
          <LimeSlice className="w-14 h-14" />,
          <HeroDecoration kind="milk-drop" className="w-14 h-14" />,
          <HeroDecoration kind="chocolate-chunk" className="w-14 h-14" />,
          <HeroDecoration kind="pistachio" className="w-14 h-14" />
        )}
      </div>
      <div className="absolute bottom-20 right-1/4 animate-float-reverse opacity-90 z-20 hidden md:block pointer-events-none">
        {themeElement(
          <LimeSlice className="w-16 h-16" />,
          <HeroDecoration kind="milk-drop" className="w-16 h-16" />,
          <HeroDecoration kind="cocoa-bean" className="w-16 h-16" />,
          <HeroDecoration kind="almond" className="w-16 h-16" />
        )}
      </div>

      {/* Floating Fizzy Soda Bubbles */}
      <div className="absolute top-24 left-1/3 animate-bubble pointer-events-none">
        {themeElement(
          <FizzyBubble size={22} />,
          <FizzyBubble size={22} />,
          <HeroDecoration kind="cocoa-bean" className="w-[22px] h-[22px]" />,
          <HeroDecoration kind="milk-drop" className="w-[22px] h-[22px]" />
        )}
      </div>
      <div className="absolute bottom-32 left-2/5 animate-bubble pointer-events-none" style={{ animationDelay: '1.2s' }}>
        {themeElement(
          <FizzyBubble size={16} />,
          <FizzyBubble size={16} />,
          <HeroDecoration kind="chocolate-chunk" className="w-4 h-4" />,
          <HeroDecoration kind="pistachio" className="w-4 h-4" />
        )}
      </div>
      <div className="absolute top-36 right-1/3 animate-bubble pointer-events-none" style={{ animationDelay: '1.8s' }}>
        {themeElement(
          <FizzyBubble size={24} />,
          <FizzyBubble size={24} />,
          <HeroDecoration kind="cocoa-bean" className="w-6 h-6" />,
          <HeroDecoration kind="milk-drop" className="w-6 h-6" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
        {/* Top Header Row: Centered "Find your favourite chilled drink" & Right-aligned Counter "1 / 4" */}
        <div className="relative flex items-center justify-center mb-1 md:mb-2 min-h-[32px]">
          <span className="text-[#9BC53D] font-extrabold text-sm sm:text-base tracking-tight text-center">
            {slide.smallHeadline}
          </span>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm sm:text-base tracking-wider">
            <span className="text-[#1F3A1D] font-black text-base sm:text-lg">{slide.id}</span>
            <span className="mx-1 font-semibold">/</span>
            <span>{HERO_SLIDES.length}</span>
          </div>
        </div>

        {/* Central Stage: Giant Text Behind Bottle + Isolated Product + Left Button + Right Text */}
        <div className="relative min-h-[460px] md:min-h-[540px] lg:min-h-[600px] xl:min-h-[620px] flex items-center justify-center">
          {/* Giant Typographic Backdrop: "LIMCA", "MILK SODA", "CHOCOLATE", etc. Positioned in upper half behind bottle */}
          <div className="absolute inset-x-0 top-2 sm:top-4 md:top-6 lg:top-8 flex justify-center pointer-events-none select-none z-10 px-2 sm:px-4">
            <h1
              key={slide.giantText}
              className={`${getGiantTextSizeClass(slide.giantText)} font-black uppercase text-[#1F3A1D] text-center leading-none tracking-tight opacity-95 whitespace-nowrap animate-drink-fade`}
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: slide.giantText.length > 7 ? "-0.04em" : "-0.035em"
              }}
            >
              {slide.giantText}
            </h1>
          </div>

          {/* Central Hero Product: GENUINE ISOLATED PRODUCT CUTOUT (NO BOX, NO BACKGROUND, CLEAN FLOATING CUTOUT) */}
          <div
            className="relative z-20 flex flex-col items-center justify-center my-2 md:my-0 cursor-pointer group"
            onClick={() => onSelectHeroProduct(slide)}
          >
            {/* Subtle backlight glow matching drink tint */}
            <div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-25 transition-colors duration-700 pointer-events-none"
              style={{ backgroundColor: slide.bottleColor }}
            />

            {/* Floating Isolated Product Container */}
            <div className="relative w-56 sm:w-68 md:w-80 lg:w-92 h-[380px] sm:h-[460px] md:h-[500px] lg:h-[550px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              {/* Isolated Transparent PNG Drink Cutout */}
              <img
                key={slide.image}
                src={slide.image}
                alt={`${slide.giantText} - Clean isolated product cutout from Kareem's`}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] animate-drink-fade"
              />

              {/* Floating Lime Slice Accent */}
              <div className="absolute top-10 -right-2 md:top-12 md:-right-4 animate-float-slow pointer-events-none">
                {themeElement(
                  <LimeSlice className="w-14 h-14 md:w-16 md:h-16" />,
                  <HeroDecoration kind="milk-drop" className="w-14 h-14 md:w-16 md:h-16" />,
                  <HeroDecoration kind="chocolate-chunk" className="w-14 h-14 md:w-16 md:h-16" />,
                  <HeroDecoration kind="pistachio" className="w-14 h-14 md:w-16 md:h-16" />
                )}
              </div>

              {/* Floating Leaf Accent */}
              <div className="absolute bottom-10 -left-3 md:bottom-12 md:-left-5 animate-float-reverse pointer-events-none">
                {themeElement(
                  <FloatingLeaf className="w-12 h-12 md:w-16 md:h-16" rotation={30} />,
                  <FizzyBubble size={48} />,
                  <HeroDecoration kind="cocoa-bean" className="w-12 h-12 md:w-16 md:h-16" />,
                  <HeroDecoration kind="almond" className="w-12 h-12 md:w-16 md:h-16" />
                )}
              </div>
            </div>

            {/* Subtle Natural Floor Contact Shadow */}
            <div className="w-44 sm:w-56 md:w-64 h-5 bg-black/15 blur-md rounded-[100%] mt-[-10px] pointer-events-none" />
          </div>

          {/* Left Bottom Action: "SHOW ALL THE DRINKS →" */}
          <div className="hidden lg:block absolute left-4 xl:left-8 bottom-10 xl:bottom-12 z-25 max-w-xs">
            <button
              type="button"
              onClick={onShowAllDrinks}
              className="inline-flex items-center gap-3 bg-[#1F3A1D] hover:bg-[#142613] text-white text-[13px] font-extrabold uppercase tracking-wider py-4 px-8 rounded-full shadow-[0_8px_24px_rgba(31,58,29,0.25)] hover:shadow-[0_12px_28px_rgba(31,58,29,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>SHOW ALL THE DRINKS</span>
              <ArrowRight className="w-4 h-4 text-[#9BC53D]" />
            </button>
          </div>

          {/* Right Text Column: "Your refreshing day starts here with us" + Badges */}
          <div className="hidden lg:flex flex-col items-start absolute right-4 xl:right-8 bottom-6 xl:bottom-8 z-25 max-w-[320px] xl:max-w-[360px] text-left">
            <h2 className="text-2xl xl:text-[28px] font-black leading-tight text-[#1F3A1D] mb-3">
              Your <span className="text-[#9BC53D]">refreshing</span> day starts here with us
            </h2>
            <p key={slide.id} className="text-gray-600 text-[13px] leading-relaxed mb-5 font-normal animate-drink-fade">
              {slide.rightDescription}
            </p>

            {/* Two Circular Seal Badges matching Clean Juice reference */}
            <div className="flex items-center gap-3.5">
              <CircularBadge
                title="100% PURE"
                subtitle="FRESH"
                variant="green"
                className="w-18 h-18 text-[10px]"
              />
              <CircularBadge
                title="PREMIUM"
                subtitle="DAIRY"
                variant="white"
                className="w-18 h-18 text-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet View: Text & Action */}
        <div className="lg:hidden mt-4 text-center px-4 max-w-md mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-[#1F3A1D] mb-2">
            Your <span className="text-[#9BC53D]">refreshing</span> day starts here with us
          </h2>
          <p key={slide.id} className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed animate-drink-fade">
            {slide.rightDescription}
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircularBadge title="100% PURE" subtitle="FRESH" variant="green" className="w-16 h-16" />
            <CircularBadge title="PREMIUM" subtitle="DAIRY" variant="white" className="w-16 h-16" />
          </div>
          <button
            type="button"
            onClick={onShowAllDrinks}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1F3A1D] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg"
          >
            <span>SHOW ALL THE DRINKS</span>
            <ArrowRight className="w-4 h-4 text-[#9BC53D]" />
          </button>
        </div>
      </div>
    </section>
  );
};
