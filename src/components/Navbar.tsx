import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { KareemLogo } from './Decorations';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMenuModal: () => void;
  onOpenAccountModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMenuModal,
  onOpenAccountModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Locations', href: '#locations' },
    { name: 'Our Menu', href: '#menu', onClick: onOpenMenuModal },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Meet Our Team', href: '#testimonials' },
    { name: 'Order Now', href: '#menu', onClick: onOpenMenuModal },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <KareemLogo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold tracking-tight text-[#1F3A1D]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="relative py-1 hover:text-[#9BC53D] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9BC53D] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons: Search, Account, Cart */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#1F3A1D]">
          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search beverages"
            className="p-1.5 hover:text-[#9BC53D] transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* My Account */}
          <button
            type="button"
            onClick={onOpenAccountModal}
            aria-label="My Account"
            className="hidden sm:flex items-center gap-1.5 text-[14px] font-semibold hover:text-[#9BC53D] transition-colors cursor-pointer"
          >
            <User className="w-4 h-4 stroke-[2.2]" />
            <span>My Account</span>
          </button>

          {/* Cart with Counter Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative p-1.5 hover:text-[#9BC53D] transition-colors cursor-pointer group"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-1.5 -right-2 bg-[#9BC53D] text-[#1F3A1D] text-[11px] font-black rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-1.5 text-[#1F3A1D] hover:text-[#9BC53D] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-3 text-[15px] font-bold text-[#1F3A1D]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="py-1.5 hover:text-[#9BC53D] transition-colors border-b border-gray-50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#9BC53D]">→</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-sm font-semibold">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccountModal();
              }}
              className="flex items-center gap-2 text-[#1F3A1D] hover:text-[#9BC53D]"
            >
              <User className="w-4 h-4" />
              <span>Customer Portal / Account</span>
            </button>
            <span className="text-xs text-[#689F38] bg-[#F0F7E6] px-2 py-0.5 rounded-full font-bold">
              Rahim Yar Khan
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
