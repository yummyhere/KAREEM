import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem, calculateCartTotals, formatPKR, buildWhatsAppOrderUrl } from '../utils/order';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const totals = calculateCartTotals(items);
  const whatsAppUrl = buildWhatsAppOrderUrl(items, {
    name: customerName,
    address,
    notes
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#F8FAF4]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#9BC53D]" />
              <h3 className="font-extrabold text-[#1F3A1D] text-lg">
                Your Chilled Cart ({totals.itemCount})
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F0F7E6] text-[#9BC53D] flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#1F3A1D] text-base mb-1">
                  Your cart is empty
                </h4>
                <p className="text-gray-500 text-xs max-w-xs mx-auto mb-6">
                  Add fresh Limca, Ice Cream Milk Soda, or Royal Dairy Shakes to order!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#1F3A1D] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full shadow-md hover:bg-[#142613] transition-colors"
                >
                  Explore Our Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 p-3 rounded-2xl border border-gray-100 bg-[#FAFBF8] hover:border-[#9BC53D] transition-colors"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 object-contain shrink-0 filter drop-shadow-xs"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-[#1F3A1D] truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[11px] text-gray-500 block">
                          {formatPKR(item.product.price)} each
                        </span>
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-extrabold text-[#1F3A1D] min-w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end justify-between self-stretch py-0.5">
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          aria-label="Remove item"
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-extrabold text-[#1F3A1D]">
                          {formatPKR(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free Delivery Bar */}
                {totals.amountNeededForFreeDelivery > 0 ? (
                  <div className="p-3 bg-[#F4F9EB] rounded-2xl border border-[#DCEBC5] text-xs text-[#2A4B1A]">
                    Add <strong>{formatPKR(totals.amountNeededForFreeDelivery)}</strong> more to get <strong>FREE Delivery</strong> anywhere in Rahim Yar Khan!
                  </div>
                ) : (
                  <div className="p-3 bg-[#EAF7D5] rounded-2xl border border-[#C5E58F] text-xs font-bold text-[#2A4B1A] flex items-center gap-2">
                    <span>🎉</span> You unlocked <strong>FREE Chilled Delivery</strong>!
                  </div>
                )}

                {/* Delivery Information Inputs */}
                <div className="pt-2 border-t border-gray-100 space-y-2.5">
                  <span className="text-xs font-extrabold text-[#1F3A1D] uppercase tracking-wider block">
                    Delivery Details (Rahim Yar Khan)
                  </span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (e.g. Usman)"
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-xl focus:border-[#9BC53D] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street / Sector / Area (e.g. Shahi Road / Abbasia Town)"
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-xl focus:border-[#9BC53D] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Special request (e.g. Extra masala, separate ice)"
                    className="w-full text-xs p-2.5 border border-gray-200 rounded-xl focus:border-[#9BC53D] focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer & Order Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-[#FAFBF8] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1F3A1D]">{formatPKR(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-[#1F3A1D]">
                    {totals.deliveryFee === 0 ? 'FREE' : formatPKR(totals.deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#1F3A1D] pt-1 border-t border-gray-200">
                  <span>Total Amount</span>
                  <span className="text-base text-[#1F3A1D]">{formatPKR(totals.total)}</span>
                </div>
              </div>

              {/* Order via WhatsApp Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5A] text-white text-sm font-extrabold uppercase tracking-wider py-4 px-6 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp ({formatPKR(totals.total)})</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                <span>Fast preparation &amp; cold packing</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
