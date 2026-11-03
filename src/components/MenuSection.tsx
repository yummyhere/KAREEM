import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, CategoryCard } from '../data/beverages';
import { HeadingLeafLeft, HeadingLeafRight, FloatingLeaf } from './Decorations';

interface MenuSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenFullMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectCategory,
  onOpenFullMenu
}) => {
  return (
    <section id="menu" className="relative py-16 md:py-24 bg-white select-none overflow-hidden">
      {/* Decorative leaf background */}
      <div className="absolute top-1/2 -left-6 opacity-40 pointer-events-none hidden lg:block">
        <FloatingLeaf className="w-16 h-16" rotation={30} />
      </div>
      <div className="absolute top-1/3 -right-6 opacity-40 pointer-events-none hidden lg:block">
        <FloatingLeaf className="w-16 h-16" rotation={-45} flip />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Heading with flanking leaves */}
        <div className="inline-flex items-center justify-center gap-3 mb-10 md:mb-14">
          <HeadingLeafLeft className="w-7 h-7 text-[#9BC53D]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1F3A1D] tracking-tight">
            <span className="text-[#9BC53D]">Menu</span> suited to your expectations
          </h2>
          <HeadingLeafRight className="w-7 h-7 text-[#9BC53D]" />
        </div>

        {/* 5 Category Cards with ISOLATED TRANSPARENT CUTOUT DRINKS (Matching Clean Juice) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {CATEGORIES.map((cat: CategoryCard) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group bg-[#F8FAF4] hover:bg-[#F2F7E8] border border-[#E9F0DD] hover:border-[#9BC53D] rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_30px_rgba(155,197,61,0.18)] cursor-pointer min-h-[290px] sm:min-h-[330px]"
            >
              {/* Isolated Drink Product Cutout with Natural Floor Contact Shadow */}
              <div className="w-full flex-1 flex flex-col items-center justify-center relative py-2">
                <div className="relative w-28 sm:w-32 md:w-36 h-44 sm:h-52 flex items-center justify-center group-hover:scale-108 transition-transform duration-500">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_16px_rgba(0,0,0,0.12)]"
                    loading="lazy"
                  />
                </div>

                {/* Natural Soft Contact Shadow Ellipse directly underneath the drink base */}
                <div className="w-20 sm:w-24 h-2.5 bg-black/12 blur-[3px] rounded-[100%] mt-[-6px] pointer-events-none" />
              </div>

              {/* Text Info */}
              <div className="w-full text-center mt-2 pt-2 border-t border-[#EEF4E3]">
                <span className="text-[11px] font-semibold text-gray-400 block mb-1 tracking-wide">
                  {cat.countText}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-[#1F3A1D] group-hover:text-[#689F38] transition-colors leading-snug">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Button: "VIEW FULL MENU →" */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#F8FAF4] text-[#1F3A1D] border-2 border-[#1F3A1D] text-xs md:text-sm font-extrabold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 text-[#9BC53D]" />
          </button>
        </div>
      </div>
    </section>
  );
};
