import React, { useState } from 'react';
import { ArrowRight, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { CLIENT_INFO } from '../data/beverages';

export const LocationsSection: React.FC = () => {
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);

  return (
    <section id="locations" className="py-16 md:py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Text & Button */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[#9BC53D] font-extrabold text-xs sm:text-sm tracking-wider uppercase block mb-2">
              Our Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1F3A1D] tracking-tight leading-tight mb-4">
              Find Kareem&apos;s<br />near you.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Visit our shop on Shahi Road, Rahim Yar Khan. Served ice cold daily for dine-in, takeaway, and fast home delivery across town.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CLIENT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#9BC53D] hover:bg-[#8CBF37] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(155,197,61,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>FIND A STORE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              <button
                type="button"
                onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-[#1F3A1D] text-[#1F3A1D] text-xs sm:text-sm font-bold py-3.5 px-5 rounded-full transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#9BC53D]" />
                <span>{showLiveEmbed ? 'Show Vector Map' : 'Interactive Map'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Schematic Map with Green Location Pins & Popup */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden border border-[#E4EBD8] shadow-md bg-[#FAF9F6] h-[300px] sm:h-[340px] md:h-[380px]">
              {showLiveEmbed ? (
                /* Live Interactive Google Maps Embed */
                <iframe
                  title="Kareem's Limca & Milk Soda Location - Shahi Road, Rahim Yar Khan"
                  src={CLIENT_INFO.googleMapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                /* Stylized Light Roadmap clone matching reference image */
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#F6F5EE]">
                  {/* Road Network SVG lines */}
                  <svg className="absolute inset-0 w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    {/* Background Roads */}
                    <path d="M-50 80 Q 200 120 400 60 T 900 180" stroke="#FFFFFF" strokeWidth="12" />
                    <path d="M-20 220 Q 300 240 550 160 T 950 280" stroke="#FFFFFF" strokeWidth="10" />
                    <path d="M180 -20 Q 240 180 200 400" stroke="#FFFFFF" strokeWidth="10" />
                    <path d="M520 -20 Q 480 180 580 400" stroke="#FFFFFF" strokeWidth="12" />
                    <path d="M780 -20 Q 820 180 750 400" stroke="#FFFFFF" strokeWidth="8" />
                    
                    {/* Water Canal / River Accent */}
                    <path d="M-10 160 Q 260 210 500 130 T 900 240" stroke="#D3E5F2" strokeWidth="7" fill="none" />
                    
                    {/* Shahi Road Main Arterial */}
                    <path d="M50 320 L 450 140 L 850 80" stroke="#E3EDD3" strokeWidth="14" />
                  </svg>

                  {/* Secondary Pins on map */}
                  <div className="absolute top-16 left-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-8 h-8 rounded-full bg-[#9BC53D] border-2 border-white shadow-md flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <div className="absolute top-12 right-1/4 animate-bounce" style={{ animationDuration: '2.7s' }}>
                    <div className="w-8 h-8 rounded-full bg-[#9BC53D] border-2 border-white shadow-md flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-16 right-1/3 animate-bounce" style={{ animationDuration: '3.2s' }}>
                    <div className="w-8 h-8 rounded-full bg-[#9BC53D] border-2 border-white shadow-md flex items-center justify-center text-white">
                      <MapPin className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  {/* Main Active Location Pin & Popup (Center-Focus) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                    {/* White Location Popup Card matching reference */}
                    <a
                      href={CLIENT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 mb-2 group hover:border-[#9BC53D] transition-colors"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#9BC53D] animate-ping" />
                      <div>
                        <span className="text-xs font-black text-[#1F3A1D] block leading-tight">
                          Shahi Road, Rahim Yar Khan
                        </span>
                        <span className="text-[10px] text-gray-500 font-semibold flex items-center gap-1">
                          Pakistan • Open Daily
                          <ExternalLink className="w-2.5 h-2.5 inline" />
                        </span>
                      </div>
                    </a>

                    {/* Green Map Pin */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#9BC53D] border-3 border-white shadow-xl flex items-center justify-center text-white animate-pulse">
                        <MapPin className="w-5 h-5 fill-current" />
                      </div>
                      <div className="w-4 h-1.5 bg-black/20 rounded-full blur-xs mx-auto mt-1" />
                    </div>
                  </div>

                  {/* Switch to live map hint in bottom right */}
                  <button
                    onClick={() => setShowLiveEmbed(true)}
                    className="absolute bottom-3 right-3 bg-white/90 text-[11px] font-bold text-[#1F3A1D] px-3 py-1.5 rounded-lg shadow-sm border border-gray-200 hover:bg-[#1F3A1D] hover:text-white transition-colors"
                  >
                    Open Live Interactive Google Map ↗
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
