import React from 'react';

interface DrinkVisualProps {
  type: 'limca' | 'milk-soda' | 'chocolate' | 'shake' | 'combo' | 'green-cleanse';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showDecorations?: boolean;
}

export const DrinkVisual: React.FC<DrinkVisualProps> = ({
  type,
  className = '',
  size = 'md',
  showDecorations = false
}) => {
  // Config per drink type
  const configs = {
    'limca': {
      liquidColor: '#88C327',
      liquidColorEnd: '#A8DC39',
      labelBg: '#1F3A1D',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "LIMCA MASALA",
      capColor: '#1F3A1D',
      strawColor: '#88C327',
      fizzColor: '#ffffff',
      isBottle: true,
      accentFruit: 'lime'
    },
    'milk-soda': {
      liquidColor: '#F7EFE8',
      liquidColorEnd: '#FCE7D6',
      labelBg: '#1F3A1D',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "ICE CREAM SODA",
      capColor: '#C49A6C',
      strawColor: '#88C327',
      fizzColor: '#FAF0E6',
      isBottle: false,
      accentFruit: 'icecream'
    },
    'chocolate': {
      liquidColor: '#533422',
      liquidColorEnd: '#7A4B31',
      labelBg: '#2E1910',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "CHOCO SODA",
      capColor: '#3E2417',
      strawColor: '#ffffff',
      fizzColor: '#D7CCC8',
      isBottle: false,
      accentFruit: 'choco'
    },
    'shake': {
      liquidColor: '#E6D49F',
      liquidColorEnd: '#F2E2B8',
      labelBg: '#1F3A1D',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "PISTA SHAKE",
      capColor: '#88C327',
      strawColor: '#88C327',
      fizzColor: '#FFF8E1',
      isBottle: false,
      accentFruit: 'pista'
    },
    'combo': {
      liquidColor: '#F2A03D',
      liquidColorEnd: '#F8B85C',
      labelBg: '#1F3A1D',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "DUO CHILLER",
      capColor: '#1F3A1D',
      strawColor: '#88C327',
      fizzColor: '#ffffff',
      isBottle: true,
      accentFruit: 'duo'
    },
    'green-cleanse': {
      liquidColor: '#558B2F',
      liquidColorEnd: '#7CB342',
      labelBg: '#1F3A1D',
      labelColor: '#ffffff',
      labelText: "KAREEM'S",
      subText: "SWEET SODA",
      capColor: '#1F3A1D',
      strawColor: '#88C327',
      fizzColor: '#ffffff',
      isBottle: true,
      accentFruit: 'mint'
    }
  };

  const cfg = configs[type] || configs['limca'];

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 3D Drink Bottle / Glass SVG matching Clean Juice reference style */}
      <svg
        viewBox="0 0 200 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_25px_rgba(0,0,0,0.18)]"
      >
        <defs>
          {/* Liquid Gradient */}
          <linearGradient id={`grad-liq-${type}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cfg.liquidColor} />
            <stop offset="40%" stopColor={cfg.liquidColorEnd} />
            <stop offset="70%" stopColor={cfg.liquidColor} />
            <stop offset="100%" stopColor={cfg.liquidColor} stopOpacity="0.85" />
          </linearGradient>

          {/* Glass Highlight */}
          <linearGradient id="glass-glare" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>

          {/* Condensation Gradient */}
          <radialGradient id="frost" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {cfg.isBottle ? (
          /* ================= BOTTLE SHAPE (like Clean Juice Orange & Sweet Green) ================= */
          <g>
            {/* Bottle Cap */}
            <rect x="82" y="18" width="36" height="24" rx="4" fill={cfg.capColor} />
            <line x1="84" y1="24" x2="116" y2="24" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="84" y1="30" x2="116" y2="30" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
            {/* Neck ring */}
            <rect x="80" y="42" width="40" height="8" rx="2" fill="#e0e0e0" />

            {/* Main Bottle Body Path */}
            <path
              d="M84 48 C84 80, 52 110, 52 140 L52 380 C52 400, 68 416, 88 416 L112 416 C132 416, 148 400, 148 380 L148 140 C148 110, 116 80, 116 48 Z"
              fill={`url(#grad-liq-${type})`}
            />

            {/* Bottle Shoulder Curve Reflection */}
            <path
              d="M84 48 C84 80, 52 110, 52 140 L52 380 C52 400, 68 416, 88 416 L112 416 C132 416, 148 400, 148 380 L148 140 C148 110, 116 80, 116 48 Z"
              fill="url(#glass-glare)"
            />

            {/* Vertical Glass Glare Ribbon */}
            <path
              d="M62 140 L62 380 C62 392, 68 400, 76 404 L76 130 C68 132, 62 135, 62 140 Z"
              fill="#ffffff"
              opacity="0.35"
            />

            {/* Clean Juice Style Brand Label on Bottle */}
            <rect x="66" y="180" width="68" height="130" rx="8" fill={cfg.labelBg} />
            <circle cx="100" cy="208" r="16" fill="#9BC53D" />
            <path d="M96 214 C98 206, 104 204, 106 202 C104 210, 100 214, 96 214 Z" fill="#ffffff" />
            <text x="100" y="238" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.05em">
              {cfg.labelText}
            </text>
            <text x="100" y="252" textAnchor="middle" fill="#9BC53D" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.08em">
              {cfg.subText}
            </text>
            <line x1="76" y1="262" x2="124" y2="262" stroke="#444444" strokeWidth="1" />
            <text x="100" y="274" textAnchor="middle" fill="#cccccc" fontSize="6" fontWeight="600" fontFamily="sans-serif">
              SHAHI ROAD • RYK
            </text>
            <text x="100" y="286" textAnchor="middle" fill="#9BC53D" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">
              100% PURE &amp; CHILLED
            </text>

            {/* Rising Fizz Bubbles inside bottle */}
            <circle cx="78" cy="340" r="3" fill="#ffffff" opacity="0.6" />
            <circle cx="92" cy="360" r="2.5" fill="#ffffff" opacity="0.7" />
            <circle cx="118" cy="330" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="88" cy="160" r="2.5" fill="#ffffff" opacity="0.6" />
            <circle cx="122" cy="150" r="3" fill="#ffffff" opacity="0.7" />
            <circle cx="108" cy="368" r="3.5" fill="#ffffff" opacity="0.5" />
          </g>
        ) : (
          /* ================= CUP / TALL GLASS SHAPE (like Clean Juice Smoothie & Protein Cup) ================= */
          <g>
            {/* Green Drinking Straw protruding from lid */}
            <path d="M106 10 L106 70 L98 70 L98 10 Z" fill={cfg.strawColor} />
            <path d="M106 10 L122 -8 L114 -14 L98 6 Z" fill={cfg.strawColor} />
            <line x1="102" y1="10" x2="118" y2="-6" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Clear Domed or Flat Lid */}
            <ellipse cx="100" cy="72" rx="56" ry="12" fill="#E8F1F5" opacity="0.8" />
            <ellipse cx="100" cy="70" rx="54" ry="10" fill="#ffffff" opacity="0.5" />
            <path d="M50 72 C50 62, 70 54, 100 54 C130 54, 150 62, 150 72 Z" fill="#E8F1F5" opacity="0.65" />

            {/* Vanilla Ice cream scoop float or thick cream foam topping */}
            {type === 'milk-soda' && (
              <g>
                <circle cx="100" cy="76" r="24" fill="#FFFBF0" />
                <circle cx="86" cy="82" r="16" fill="#FFF9E6" />
                <circle cx="114" cy="80" r="18" fill="#FFF9E6" />
                {/* Vanilla specks */}
                <circle cx="96" cy="72" r="1" fill="#8D6E63" />
                <circle cx="108" cy="76" r="1" fill="#8D6E63" />
              </g>
            )}

            {/* Chocolate Drizzle or Pista topping */}
            {type === 'chocolate' && (
              <g>
                <path d="M78 86 Q86 120 88 150 Q92 100 102 120 Q110 90 120 140" stroke="#3E2723" strokeWidth="4" strokeLinecap="round" fill="none" />
              </g>
            )}

            {type === 'shake' && (
              <g>
                <circle cx="88" cy="74" r="2.5" fill="#388E3C" />
                <circle cx="104" cy="72" r="2" fill="#388E3C" />
                <circle cx="116" cy="76" r="2.5" fill="#8D6E63" />
              </g>
            )}

            {/* Cup Tapered Body */}
            <path
              d="M52 74 L68 390 C70 404, 82 414, 96 414 L104 414 C118 414, 130 404, 132 390 L148 74 Z"
              fill={`url(#grad-liq-${type})`}
            />

            {/* Cup Glass Glare */}
            <path
              d="M52 74 L68 390 C70 404, 82 414, 96 414 L104 414 C118 414, 130 404, 132 390 L148 74 Z"
              fill="url(#glass-glare)"
            />

            {/* Clear Cup Frosted Logo Emblem (Clean Juice style circular white stamp) */}
            <circle cx="100" cy="230" r="34" fill="#ffffff" opacity="0.92" />
            <circle cx="100" cy="230" r="30" fill="none" stroke="#9BC53D" strokeWidth="1.5" />
            <text x="100" y="222" textAnchor="middle" fill="#1F3A1D" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.05em">
              {cfg.labelText}
            </text>
            <text x="100" y="234" textAnchor="middle" fill="#9BC53D" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.06em">
              {cfg.subText}
            </text>
            <text x="100" y="244" textAnchor="middle" fill="#666666" fontSize="5.5" fontWeight="700" fontFamily="sans-serif">
              RAHIM YAR KHAN
            </text>

            {/* Bubbles in Cup */}
            <circle cx="76" cy="300" r="3.5" fill={cfg.fizzColor} opacity="0.7" />
            <circle cx="114" cy="340" r="4.5" fill={cfg.fizzColor} opacity="0.6" />
            <circle cx="90" cy="370" r="3" fill={cfg.fizzColor} opacity="0.8" />
            <circle cx="124" cy="180" r="2.5" fill={cfg.fizzColor} opacity="0.7" />
            <circle cx="78" cy="160" r="3" fill={cfg.fizzColor} opacity="0.6" />
          </g>
        )}
      </svg>
    </div>
  );
};
