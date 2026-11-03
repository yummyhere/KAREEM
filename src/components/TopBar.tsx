import React from 'react';
import { Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#9BC53D] text-white text-xs md:text-sm font-medium py-1.5 px-4 sm:px-8 border-b border-[#8DB935] select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Headline with leaf / sparkle icon */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white shrink-0">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
          </svg>
          <span className="tracking-wide font-medium">
            Fresh Dairy <span className="opacity-70 mx-1">|</span> Served Ice Cold <span className="opacity-70 mx-1">|</span> Since Day One
          </span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#9BC53D] transition-all"
          >
            <Facebook className="w-3 h-3 fill-current" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#9BC53D] transition-all"
          >
            <Instagram className="w-3 h-3" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#9BC53D] transition-all"
          >
            <Youtube className="w-3 h-3 fill-current" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20 hover:bg-white hover:text-[#9BC53D] transition-all"
          >
            <Sparkles className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
