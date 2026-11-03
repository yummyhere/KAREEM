import React, { useState } from 'react';
import { X, Plus, Star, Search, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/beverages';
import { formatPKR } from '../utils/order';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
  onAddToCart: (product: Product) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  selectedCategory = 'all',
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategory);
  const [search, setSearch] = useState('');
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  if (!isOpen) return null;

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = activeTab === 'all' || p.category === activeTab;
    const matchesSearch =
      !search.trim() ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div className="min-h-screen px-4 text-center flex items-center justify-center p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        {/* Modal Dialog Card */}
        <div className="inline-block w-full max-w-4xl bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all my-8 z-10 border border-gray-100">
          {/* Header */}
          <div className="p-6 bg-[#F8FAF4] border-b border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-[#9BC53D] font-extrabold text-xs uppercase tracking-wider block">
                Fresh &amp; Chilled
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1F3A1D]">
                Kareem&apos;s Full Menu
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls: Search & Category Pills */}
          <div className="p-6 border-b border-gray-100 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Limca, Ice Cream Milk Soda, Shakes..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-full focus:bg-white focus:border-[#9BC53D] focus:outline-none"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#1F3A1D] text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                All Drinks ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-[#9BC53D] text-[#1F3A1D] shadow-xs'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Product Items Grid */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-sm font-semibold">No beverages found matching your query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filteredProducts.map((product) => {
                  const isAdded = !!addedIds[product.id];
                  return (
                    <div
                      key={product.id}
                      className="bg-[#FAFBF8] border border-gray-100 rounded-2xl p-4 flex flex-col justify-between hover:border-[#9BC53D] hover:shadow-md transition-all group"
                    >
                      <div>
                        {/* Image & Badge */}
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white mb-3 flex items-center justify-center p-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.12)] group-hover:scale-108 transition-transform duration-300"
                            loading="lazy"
                          />
                          {product.badge && (
                            <span className="absolute top-2 left-2 bg-[#9BC53D] text-[#1F3A1D] text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                              {product.badge}
                            </span>
                          )}
                          {product.volume && (
                            <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-md backdrop-blur-xs">
                              {product.volume}
                            </span>
                          )}
                        </div>

                        {/* Title & Rating */}
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-extrabold text-sm text-[#1F3A1D] group-hover:text-[#689F38] transition-colors leading-snug">
                            {product.name}
                          </h4>
                          <span className="flex items-center gap-0.5 text-[11px] font-bold text-gray-600 shrink-0 ml-1">
                            <Star className="w-3 h-3 text-[#9BC53D] fill-current" />
                            {product.rating}
                          </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-[11px] text-gray-500 leading-normal line-clamp-2 mb-3">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Price & Add to Cart button */}
                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-1">
                        <span className="text-sm font-black text-[#1F3A1D]">
                          {formatPKR(product.price)}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAdd(product)}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-[#9BC53D] text-white'
                              : 'bg-[#1F3A1D] hover:bg-[#142613] text-white'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
