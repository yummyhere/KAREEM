import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { MenuSection } from './components/MenuSection';
import { OurStory } from './components/OurStory';
import { LifestyleBanner } from './components/LifestyleBanner';
import { FeaturedProduct } from './components/FeaturedProduct';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { LocationsSection } from './components/LocationsSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { MenuModal } from './components/MenuModal';
import { SearchModal } from './components/SearchModal';
import { InfoModal } from './components/InfoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, Product, HeroSlide } from './data/beverages';
import { CartItem } from './utils/order';

export default function App() {
  // Cart State (seeded with 1 refreshing bestseller item so user immediately sees a working cart)
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);

  // Modals & Drawers state
  const [cartOpen, setCartOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [infoModalConfig, setInfoModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    isAccount?: boolean;
  }>({
    isOpen: false,
    title: '',
    isAccount: false
  });

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Category navigation
  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setMenuModalOpen(true);
  };

  const handleOpenFullMenu = () => {
    setSelectedCategory('all');
    setMenuModalOpen(true);
  };

  const handleHeroSelect = (slide: HeroSlide) => {
    // Map hero slide to related product
    const related = PRODUCTS.find((p) =>
      p.name.toLowerCase().includes(slide.giantText.toLowerCase()) ||
      p.category.includes(slide.giantText.toLowerCase().replace(' ', '-'))
    ) || PRODUCTS[0];
    handleAddToCart(related);
  };

  const handleShopFeatured = () => {
    const featured = PRODUCTS.find((p) => p.id === 'soda-vanilla-icecream') || PRODUCTS[1];
    handleAddToCart(featured);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F3A1D] selection:bg-[#9BC53D] selection:text-white">
      {/* 1. TOP BAR */}
      <TopBar />

      {/* 2. NAVBAR */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenMenuModal={handleOpenFullMenu}
        onOpenAccountModal={() =>
          setInfoModalConfig({
            isOpen: true,
            title: 'Customer Account & Rewards',
            isAccount: true
          })
        }
      />

      {/* MAIN SECTIONS */}
      <main className="flex-1">
        {/* 3. HERO SLIDER */}
        <HeroSlider
          onShowAllDrinks={handleOpenFullMenu}
          onSelectHeroProduct={handleHeroSelect}
        />

        {/* 4. MENU SECTION */}
        <MenuSection
          onSelectCategory={handleSelectCategory}
          onOpenFullMenu={handleOpenFullMenu}
        />

        {/* 5. OUR STORY SECTION */}
        <OurStory
          onLearnMore={() =>
            setInfoModalConfig({
              isOpen: true,
              title: "Our Story - Kareem's Heritage",
              isAccount: false
            })
          }
        />

        {/* 6. "DRINK CHILLED. FEEL AMAZING." BANNER */}
        <LifestyleBanner onExploreMore={handleOpenFullMenu} />

        {/* 7. FEATURED PRODUCT STRIP */}
        <FeaturedProduct onShopNow={handleShopFeatured} />

        {/* 8. WHY CHOOSE KAREEM'S? */}
        <WhyChooseUs />

        {/* 9. WHAT OUR CUSTOMERS SAY (TESTIMONIALS) */}
        <Testimonials />

        {/* 10. OUR LOCATIONS */}
        <LocationsSection />

        {/* 11. NEWSLETTER BAR */}
        <Newsletter />
      </main>

      {/* 12. FOOTER */}
      <Footer
        onOpenMenuModal={handleOpenFullMenu}
        onOpenLegalModal={(title) =>
          setInfoModalConfig({
            isOpen: true,
            title,
            isAccount: false
          })
        }
      />

      {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <FloatingWhatsApp />

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* FULL MENU MODAL */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* GENERAL INFO / ACCOUNT / LEGAL MODAL */}
      <InfoModal
        isOpen={infoModalConfig.isOpen}
        title={infoModalConfig.title}
        isAccount={infoModalConfig.isAccount}
        onClose={() =>
          setInfoModalConfig({ isOpen: false, title: '', isAccount: false })
        }
      />
    </div>
  );
}
