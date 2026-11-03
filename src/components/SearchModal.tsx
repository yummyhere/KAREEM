import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Plus, Star } from 'lucide-react';
import { PRODUCTS, Product } from '../data/beverages';
import { formatPKR } from '../utils/order';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        (p.name + p.tagline + p.description + p.category)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4); // show trending if empty

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block w-full max-w-2xl bg-white rounded-3xl text-left overflow-hidden shadow-2xl z-10 border border-gray-100">
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3 bg-[#FAFBF8]">
            <Search className="w-5 h-5 text-[#9BC53D] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by drink name (e.g. Limca, Soda, Kulfa, Pista)..."
              className="w-full text-sm sm:text-base bg-transparent focus:outline-none font-semibold text-[#1F3A1D] placeholder-gray-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions / Results */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-3">
              {query.trim() ? `Search Results (${results.length})` : 'Popular Refreshments'}
            </div>

            <div className="space-y-2.5">
              {results.length === 0 ? (
                <p className="text-xs text-gray-500 py-6 text-center">
                  No chilled drinks found for &ldquo;{query}&rdquo;. Try &quot;Limca&quot; or &quot;Milk Soda&quot;.
                </p>
              ) : (
                results.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-[#F8FAF4] border border-transparent hover:border-[#E8F0DC] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-contain shrink-0 filter drop-shadow-xs"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#1F3A1D]">
                            {product.name}
                          </h4>
                          <span className="flex items-center text-[10px] text-gray-500 font-semibold">
                            <Star className="w-2.5 h-2.5 text-[#9BC53D] fill-current mr-0.5" />
                            {product.rating}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 line-clamp-1">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs sm:text-sm font-extrabold text-[#1F3A1D]">
                        {formatPKR(product.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart(product);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 bg-[#1F3A1D] hover:bg-[#9BC53D] hover:text-[#1F3A1D] text-white text-xs font-bold py-1.5 px-3 rounded-full transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
