import React from 'react';

/**
 * Twin leaves that flank section headings (like "Menu suited to your expectations")
 */
export const HeadingLeafLeft: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#9BC53D]" }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={`inline-block ${className}`}>
    <path d="M4 28 C 8 16, 20 8, 28 6 C 26 18, 16 26, 4 28 Z" opacity="0.9" />
    <path d="M12 21 C 18 16, 22 11, 27 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M8 24 C 6 27, 4 29, 3 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const HeadingLeafRight: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#9BC53D]" }) => (
  <svg viewBox="0 0 32 32" fill="currentColor" className={`inline-block transform scale-x-[-1] ${className}`}>
    <path d="M4 28 C 8 16, 20 8, 28 6 C 26 18, 16 26, 4 28 Z" opacity="0.9" />
    <path d="M12 21 C 18 16, 22 11, 27 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M8 24 C 6 27, 4 29, 3 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Floating decorative leaf with natural organic shape and veins
 */
export const FloatingLeaf: React.FC<{
  className?: string;
  rotation?: number;
  flip?: boolean;
}> = ({ className = "w-8 h-8", rotation = 0, flip = false }) => (
  <div
    style={{ transform: `rotate(${rotation}deg) ${flip ? 'scaleX(-1)' : ''}` }}
    className={`inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
  >
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M8 56C16 32 40 16 56 12C52 36 32 52 8 56Z"
        fill="url(#leaf-gradient)"
      />
      <path
        d="M14 50C28 40 42 28 54 14"
        stroke="#A5D63F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 42C34 40 42 36 46 32"
        stroke="#A5D63F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 34C44 32 48 26 50 22"
        stroke="#A5D63F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="leaf-gradient" x1="8" y1="12" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BC53D" />
          <stop offset="1" stopColor="#558B2F" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/**
 * Fresh Lime Slice Illustration
 */
export const LimeSlice: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={`select-none pointer-events-none drop-shadow-md ${className}`}>
    {/* Rind */}
    <circle cx="50" cy="50" r="46" fill="#88BC38" stroke="#689F38" strokeWidth="3" />
    {/* Pith */}
    <circle cx="50" cy="50" r="40" fill="#E8F5D0" />
    {/* Center core */}
    <circle cx="50" cy="50" r="8" fill="#F1F8E9" />
    {/* Segments */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <path
        key={i}
        d="M 50 50 L 46 16 A 35 35 0 0 1 54 16 Z"
        fill="#A2D645"
        stroke="#8CBF37"
        strokeWidth="1"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {/* Pulp highlight */}
    <circle cx="50" cy="50" r="3" fill="#ffffff" opacity="0.7" />
  </svg>
);

/**
 * Fizzy soda bubble with gleam
 */
export const FizzyBubble: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 16 }) => (
  <div
    style={{ width: size, height: size }}
    className={`rounded-full bg-white/40 border border-white/70 backdrop-blur-xs relative overflow-hidden pointer-events-none select-none shadow-[0_0_8px_rgba(255,255,255,0.8)] ${className}`}
  >
    <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] rounded-full bg-white/90" />
  </div>
);

export const HeroDecoration: React.FC<{
  kind: 'milk-drop' | 'cocoa-bean' | 'chocolate-chunk' | 'pistachio' | 'almond';
  className?: string;
}> = ({ kind, className = '' }) => {
  const commonProps = {
    viewBox: '0 0 64 64',
    className: `select-none pointer-events-none drop-shadow-md ${className}`,
    'aria-hidden': true as const
  };

  if (kind === 'milk-drop') {
    return (
      <svg {...commonProps} fill="none">
        <path d="M32 5C25 17 13 30 13 41a19 19 0 0 0 38 0C51 30 39 17 32 5Z" fill="#FFFDF8" stroke="#DCE8E5" strokeWidth="2" />
        <path d="M23 41c0-5 4-11 8-16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity=".9" />
        <circle cx="40" cy="47" r="3" fill="#E8F0ED" />
      </svg>
    );
  }

  if (kind === 'cocoa-bean') {
    return (
      <svg {...commonProps} fill="none">
        <path d="M32 6C17 8 8 20 9 34s10 23 23 24c15-2 24-14 23-28S45 7 32 6Z" fill="#70452F" stroke="#4E3023" strokeWidth="2" />
        <path d="M34 10c-9 10-10 33-1 44M29 19l7 5m-9 4 9 5m-9 4 9 5" stroke="#B7835D" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'chocolate-chunk') {
    return (
      <svg {...commonProps} fill="none">
        <path d="m9 18 36-8 11 8-6 33-34 7-9-9 2-31Z" fill="#70452F" stroke="#4E3023" strokeWidth="2" strokeLinejoin="round" />
        <path d="m9 18 36-8 11 8-35 8-12-8Zm12 8 35-8-6 33-34 7 5-32Z" fill="#956344" stroke="#5B3928" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m30 23 3 32m14-35-5 33" stroke="#5B3928" strokeWidth="1.5" />
      </svg>
    );
  }

  if (kind === 'pistachio') {
    return (
      <svg {...commonProps} fill="none">
        <path d="M8 32C15 13 28 7 39 10c12 3 18 16 17 26-1 12-10 20-21 19C21 54 12 45 8 32Z" fill="#D9B982" stroke="#B18D57" strokeWidth="2" />
        <path d="M15 32c5-12 14-17 23-15 9 2 13 11 12 19-1 9-7 14-15 13-9-1-16-7-20-17Z" fill="#A8C76B" stroke="#819C4C" strokeWidth="2" />
        <path d="M24 28c4-5 9-8 14-8" stroke="#DDE9B2" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} fill="none">
      <path d="M8 34C17 17 29 9 39 11c10 2 16 13 15 22-1 12-11 21-23 20C19 52 11 44 8 34Z" fill="#B87946" stroke="#895331" strokeWidth="2" />
      <path d="M17 35c8-11 17-17 26-18" stroke="#DDAA75" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Circular seal badge (matching Clean Juice "USDA Organic" & "100% Natural")
 */
export const CircularBadge: React.FC<{
  title: string;
  subtitle: string;
  variant?: 'green' | 'white' | 'dark';
  className?: string;
}> = ({ title, subtitle, variant = 'green', className = "" }) => {
  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  return (
    <div
      className={`inline-flex flex-col items-center justify-center rounded-full border-2 text-center select-none font-bold p-2 w-20 h-20 shadow-sm transition-transform hover:scale-105 ${
        isDark
          ? 'bg-[#1F3A1D] border-[#9BC53D] text-white'
          : isWhite
          ? 'bg-white border-[#9BC53D] text-[#1F3A1D]'
          : 'bg-[#F2F8E7] border-[#8CBF37] text-[#1F3A1D]'
      } ${className}`}
    >
      <div className="text-[10px] tracking-wider uppercase font-semibold text-[#689F38]">
        {title}
      </div>
      <div className="text-[11px] font-extrabold uppercase leading-tight mt-0.5">
        {subtitle}
      </div>
      <div className="flex gap-0.5 mt-0.5">
        <span className="w-1 h-1 rounded-full bg-[#8CBF37]"></span>
        <span className="w-1 h-1 rounded-full bg-[#8CBF37]"></span>
        <span className="w-1 h-1 rounded-full bg-[#8CBF37]"></span>
      </div>
    </div>
  );
};

/**
 * KAREEM'S Brand Logo
 */
/**
 * KAREEM'S Brand Logo - Exact vector replica of original brand mark
 */
export const KareemLogo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "" }) => {
  const textColor = light ? "#FFFFFF" : "#073A12";
  const leafGradId = light ? "kareemLeafLight" : "kareemLeafDark";
  const swooshGradId = light ? "kareemSwooshLight" : "kareemSwooshDark";
  const subtextColor = light ? "#E5E7EB" : "#073A12";

  return (
    <a
      href="#home"
      aria-label="Kareem's Soft Drinks"
      className={`inline-flex items-center group select-none transition-transform active:scale-95 ${className}`}
    >
      <svg
        viewBox="0 0 760 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 sm:h-11 md:h-12 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[240px] drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
      >
        <defs>
          <linearGradient id={leafGradId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={light ? "#4CAF16" : "#38830D"} />
            <stop offset="50%" stopColor={light ? "#72C41D" : "#5DAA14"} />
            <stop offset="100%" stopColor={light ? "#99E230" : "#80CB23"} />
          </linearGradient>

          <linearGradient id={swooshGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={light ? "#4CAF16" : "#3C8B0E"} />
            <stop offset="50%" stopColor={light ? "#77CD20" : "#65B418"} />
            <stop offset="100%" stopColor={light ? "#9CE532" : "#87CF25"} />
          </linearGradient>
        </defs>

        <g transform="translate(20, 10)">
          {/* Fresh Leaf Accent over K and A */}
          <g transform="translate(68, 12)">
            {/* Outer Leaf Blade */}
            <path
              d="M 10 115 C 14 70, 52 18, 128 0 C 122 48, 92 102, 34 122 C 20 126, 10 122, 10 115 Z"
              fill={`url(#${leafGradId})`}
            />
            {/* Central Leaf Spine */}
            <path
              d="M 20 112 C 42 80, 72 45, 124 5"
              stroke="#FFFFFF"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            {/* Side Veins */}
            <path
              d="M 48 84 C 64 78, 80 72, 92 64"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
            <path
              d="M 68 62 C 84 56, 98 48, 108 40"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
          </g>

          {/* KAREEM Bold Slanted Wordmark */}
          <text
            x="0"
            y="158"
            fill={textColor}
            fontFamily="'Montserrat', 'Arial Black', -apple-system, sans-serif"
            fontSize="140"
            fontWeight="900"
            letterSpacing="-0.025em"
            transform="skewX(-8.5)"
          >
            KAREEM
          </text>

          {/* Registered Trademark ® Symbol */}
          <g transform="translate(670, 52)">
            <circle cx="10" cy="10" r="9.5" fill="none" stroke={textColor} strokeWidth="2.2" />
            <text
              x="10"
              y="14.5"
              fill={textColor}
              fontFamily="'Montserrat', -apple-system, sans-serif"
              fontSize="12"
              fontWeight="900"
              textAnchor="middle"
            >
              R
            </text>
          </g>

          {/* Dynamic Arched Green Swoosh */}
          <path
            d="M 18 200 C 170 226, 410 178, 550 162 C 380 168, 195 204, 18 200 Z"
            fill={`url(#${swooshGradId})`}
          />

          {/* SOFT DRINKS Subtext */}
          <text
            x="535"
            y="212"
            fill={subtextColor}
            fontFamily="'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="0.46em"
            textAnchor="end"
          >
            SOFT DRINKS
          </text>
        </g>
      </svg>
    </a>
  );
};
