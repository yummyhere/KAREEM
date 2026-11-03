import React, { useState } from 'react';
import { X, CheckCircle, Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data/beverages';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  isAccount?: boolean;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  title,
  onClose,
  isAccount = false
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div className="min-h-screen px-4 text-center flex items-center justify-center p-0">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block w-full max-w-lg bg-white rounded-3xl text-left overflow-hidden shadow-2xl z-10 border border-gray-100 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-xl font-black text-[#1F3A1D]">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-5 text-xs sm:text-sm text-gray-600 space-y-4">
            {isAccount ? (
              <div className="space-y-4">
                <p>
                  Check your previous orders or membership perks with <strong>Kareem&apos;s Limca &amp; Milk Soda</strong> by entering your WhatsApp phone number:
                </p>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="0300 1234567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 p-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:border-[#9BC53D] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setSearched(true)}
                    className="bg-[#1F3A1D] text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-[#142613]"
                  >
                    Lookup
                  </button>
                </div>

                {searched && (
                  <div className="p-4 bg-[#F4F9EB] rounded-2xl border border-[#DCEBC5] text-xs text-[#1F3A1D] space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-[#689F38]">
                      <CheckCircle className="w-4 h-4" />
                      <span>Loyalty Account Active</span>
                    </div>
                    <p>Welcome back! You have <strong>35 Chill Points</strong> for discounts on your next Limca or Milk Soda on Shahi Road.</p>
                  </div>
                )}

                <div className="pt-3 border-t border-gray-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#1F3A1D]">
                    <Clock className="w-3.5 h-3.5 text-[#9BC53D]" />
                    <span>Store Hours: {CLIENT_INFO.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-[#1F3A1D]">
                    <MapPin className="w-3.5 h-3.5 text-[#9BC53D]" />
                    <span>Location: {CLIENT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-[#1F3A1D]">
                    <Phone className="w-3.5 h-3.5 text-[#9BC53D]" />
                    <a href={`tel:${CLIENT_INFO.phoneRaw}`} className="text-[#9BC53D] underline">
                      {CLIENT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 leading-relaxed">
                <p>
                  Welcome to <strong>{CLIENT_INFO.name}</strong>, located at {CLIENT_INFO.address}.
                </p>
                <p>
                  Our fresh beverages are prepared using pure dairy, filtered water, fresh Kagzi lemons, and sterilized equipment. We are committed to hygiene, speedy takeaway packaging, and courteous customer service.
                </p>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-500 space-y-1.5">
                  <div><strong>Direct Hotline:</strong> {CLIENT_INFO.phone}</div>
                  <div><strong>WhatsApp Support:</strong> {CLIENT_INFO.whatsapp}</div>
                  <div><strong>Customer Inquiries:</strong> {CLIENT_INFO.email}</div>
                  <div><strong>Serving:</strong> Rahim Yar Khan &amp; surrounding areas</div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#1F3A1D] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-full hover:bg-[#142613]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
