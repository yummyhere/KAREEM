import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FloatingLeaf } from './Decorations';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Rounded lime green banner bar matching reference */}
        <div className="relative rounded-3xl md:rounded-[36px] bg-[#BCE06E] p-6 sm:p-8 md:px-12 md:py-9 overflow-hidden shadow-sm">
          {/* Subtle leaves in banner corners */}
          <div className="absolute -top-3 -left-3 opacity-30 pointer-events-none">
            <FloatingLeaf className="w-16 h-16" rotation={-20} />
          </div>
          <div className="absolute -bottom-3 -right-3 opacity-30 pointer-events-none">
            <FloatingLeaf className="w-16 h-16" rotation={45} flip />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left: Envelope Icon + Text */}
            <div className="flex items-center gap-4 text-left w-full lg:w-auto">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/30 backdrop-blur-xs flex items-center justify-center text-[#1F3A1D] shrink-0 border border-white/40">
                <Mail className="w-6 h-6 md:w-7 md:h-7 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-[#1F3A1D] tracking-tight">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-xs md:text-sm text-[#2E4A1E] font-medium">
                  Get updates on new flavours, special offers and more.
                </p>
              </div>
            </div>

            {/* Right: Email Input + Subscribe Button */}
            <div className="w-full lg:w-auto max-w-md">
              {subscribed ? (
                <div className="bg-white rounded-full py-3 px-6 flex items-center gap-2 text-sm font-bold text-[#1F3A1D] shadow-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-[#9BC53D]" />
                  <span>Thank you! You are subscribed to Kareem&apos;s updates.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-full p-1.5 pl-5 sm:pl-6 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/70"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full text-xs sm:text-sm text-[#1F3A1D] placeholder-gray-400 bg-transparent focus:outline-none pr-2 font-medium"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1F3A1D] hover:bg-[#142613] text-white text-xs font-extrabold uppercase tracking-wider py-3 px-6 sm:px-7 rounded-full transition-all shrink-0 cursor-pointer shadow-xs"
                  >
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9BC53D]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
