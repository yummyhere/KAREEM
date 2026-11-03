import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LimeSlice, FloatingLeaf, FizzyBubble } from './Decorations';

interface OurStoryProps {
  onLearnMore?: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onLearnMore }) => {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[#9BC53D] font-extrabold text-xs sm:text-sm tracking-widest uppercase block mb-3">
              OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F3A1D] tracking-tight leading-[1.15] mb-6">
              Real Taste.<br />
              A Happier You.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
              At Kareem&apos;s, we serve the refreshing taste Rahim Yar Khan loves. Our Limca and milk sodas are prepared fresh, served ice cold and made with quality dairy to brighten your day.
            </p>
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-3 bg-[#9BC53D] hover:bg-[#8CBF37] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(155,197,61,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right Column: Isolated Limca bottle standing on organic blob with lemons & mint (NO PHOTO BOX) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            {/* Organic light green blob background shape matching Clean Juice */}
            <div className="absolute w-[95%] sm:w-[520px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-[#E6F4D0] to-[#F1F8E3] rounded-[60%_40%_70%_30%_/_40%_50%_60%_50%] -z-10 animate-float-slow opacity-95 blur-xs" />

            {/* Visual Arrangement: Isolated Bottle + Lemons + Mint */}
            <div className="relative w-full max-w-md flex flex-col items-center justify-center p-4">
              {/* Isolated Transparent PNG Bottle Cutout */}
              <div className="relative z-20 w-52 sm:w-60 h-[360px] sm:h-[420px] flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/drinks/green_cleanse_bottle.png"
                  alt="Kareem's Sweet Green Limca - Isolated product cutout"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(31,58,29,0.18)]"
                />
              </div>

              {/* Natural Soft Contact Shadow Ellipse under the bottle */}
              <div className="w-40 sm:w-48 h-5 bg-black/15 blur-md rounded-[100%] mt-[-10px] pointer-events-none" />

              {/* Floating Lime Slices on Blob */}
              <div className="absolute -bottom-2 -left-2 z-30 animate-float-slow pointer-events-none">
                <LimeSlice className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>
              <div className="absolute top-4 -right-2 z-30 animate-float-reverse pointer-events-none">
                <LimeSlice className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              {/* Floating Mint & Leaves */}
              <div className="absolute bottom-6 right-4 z-25 animate-float-slow pointer-events-none">
                <FloatingLeaf className="w-16 h-16 sm:w-20 sm:h-20" rotation={45} flip />
              </div>
              <div className="absolute top-8 left-4 z-25 animate-float-reverse pointer-events-none">
                <FloatingLeaf className="w-14 h-14 sm:w-16 sm:h-16" rotation={-30} />
              </div>

              {/* Rising bubbles */}
              <div className="absolute top-1/4 right-1/4 animate-bubble pointer-events-none">
                <FizzyBubble size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
