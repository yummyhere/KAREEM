import React from 'react';
import { Facebook, Instagram, Youtube, Sparkles, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data/beverages';
import { KareemLogo } from './Decorations';

interface FooterProps {
  onOpenMenuModal: () => void;
  onOpenLegalModal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMenuModal,
  onOpenLegalModal
}) => {
  return (
    <footer id="contact" className="bg-[#122411] text-white pt-16 pb-8 border-t border-[#1b3419] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#213f1e] items-start">
          {/* Col 1: Logo & Brand Tagline & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <KareemLogo light />
            <p className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
              {CLIENT_INFO.secondaryTagline}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Serving the coldest, most refreshing Limca, ice cream milk sodas and creamy dairy shakes to families in Rahim Yar Khan.
            </p>

            {/* Social Icons matching Clean Juice round outlines */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-[#9BC53D] hover:bg-[#9BC53D] flex items-center justify-center text-gray-300 hover:text-[#122411] transition-all"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-[#9BC53D] hover:bg-[#9BC53D] flex items-center justify-center text-gray-300 hover:text-[#122411] transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-[#9BC53D] hover:bg-[#9BC53D] flex items-center justify-center text-gray-300 hover:text-[#122411] transition-all"
              >
                <Youtube className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-[#9BC53D] hover:bg-[#9BC53D] flex items-center justify-center text-gray-300 hover:text-[#122411] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  type="button"
                  onClick={onOpenMenuModal}
                  className="hover:text-[#9BC53D] transition-colors cursor-pointer text-left"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <a href="#our-story" className="hover:text-[#9BC53D] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#9BC53D] transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#9BC53D] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('Frequently Asked Questions')}
                  className="hover:text-[#9BC53D] transition-colors cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('Takeaway & Chilled Delivery Info')}
                  className="hover:text-[#9BC53D] transition-colors cursor-pointer text-left"
                >
                  Shipping
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('Satisfaction Guarantee & Returns')}
                  className="hover:text-[#9BC53D] transition-colors cursor-pointer text-left"
                >
                  Returns
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegalModal('Track Chilled Delivery')}
                  className="hover:text-[#9BC53D] transition-colors cursor-pointer text-left"
                >
                  Track Order
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch (with Address, Phone, WhatsApp, Email) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#9BC53D] shrink-0 mt-0.5" />
                <span>{CLIENT_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CLIENT_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-[#9BC53D] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9BC53D] shrink-0" />
                  <span>{CLIENT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CLIENT_INFO.whatsappRaw}?text=${encodeURIComponent("Assalam-o-Alaikum Kareem's Limca & Milk Soda! I want to inquire about your drinks.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#9BC53D] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#9BC53D] shrink-0" />
                  <span>{CLIENT_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLIENT_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-[#9BC53D] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9BC53D] shrink-0" />
                  <span>{CLIENT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Right Badge "100% Fresh Dairy" matching Clean Juice "100% Organic" */}
          <div className="lg:col-span-1 flex lg:justify-end items-center">
            <div className="w-24 h-24 rounded-full border-2 border-[#9BC53D] bg-[#0E1E0D] flex flex-col items-center justify-center p-2 text-center shadow-lg group hover:scale-105 transition-transform">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-[#9BC53D] mb-1">
                <path d="M16 28 C 14 20, 6 16, 4 8 C 14 6, 22 14, 28 8 C 26 20, 18 24, 16 28 Z" fill="#9BC53D" opacity="0.8" />
                <path d="M10 20 C 14 16, 18 12, 22 8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-[11px] font-black tracking-tight leading-none text-white uppercase">
                100%<br />Fresh Dairy
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <div>
            &copy; 2025 {CLIENT_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegalModal('Privacy Policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegalModal('Terms & Conditions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenLegalModal('Sitemap')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
