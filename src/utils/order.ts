import { Product, CLIENT_INFO } from '../data/beverages';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartTotals {
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  freeDeliveryThreshold: number;
  amountNeededForFreeDelivery: number;
}

export const FREE_DELIVERY_THRESHOLD = 500;
export const STANDARD_DELIVERY_FEE = 50;

/**
 * Formats a numeric price into Pakistani Rupee currency string
 */
export function formatPKR(amount: number): string {
  return `Rs. ${Math.round(amount).toLocaleString('en-PK')}`;
}

/**
 * Calculates cart totals including items count, subtotal, delivery fee, and final total
 */
export function calculateCartTotals(items: CartItem[]): CartTotals {
  const itemCount = items.reduce((sum, item) => sum + Math.max(0, item.quantity), 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * Math.max(0, item.quantity), 0);
  
  let deliveryFee = 0;
  let amountNeededForFreeDelivery = 0;

  if (subtotal > 0) {
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
      deliveryFee = 0;
      amountNeededForFreeDelivery = 0;
    } else {
      deliveryFee = STANDARD_DELIVERY_FEE;
      amountNeededForFreeDelivery = FREE_DELIVERY_THRESHOLD - subtotal;
    }
  }

  const total = subtotal + deliveryFee;

  return {
    itemCount,
    subtotal,
    deliveryFee,
    total,
    freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
    amountNeededForFreeDelivery
  };
}

/**
 * Builds a direct WhatsApp order URL with formatted message
 */
export function buildWhatsAppOrderUrl(
  items: CartItem[],
  customerInfo?: { name?: string; address?: string; notes?: string }
): string {
  const totals = calculateCartTotals(items);
  
  if (items.length === 0) {
    const defaultText = `Assalam-o-Alaikum Kareem's Limca & Milk Soda!\nI would like to place an order from your menu on Shahi Road, Rahim Yar Khan.`;
    return `https://wa.me/${CLIENT_INFO.whatsappRaw}?text=${encodeURIComponent(defaultText)}`;
  }

  let text = `🍹 *NEW ORDER - Kareem's Limca & Milk Soda*\n`;
  text += `📍 Shahi Road, Rahim Yar Khan\n`;
  text += `───────────────────────\n`;
  
  items.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    text += `${index + 1}. *${item.product.name}* x ${item.quantity} = ${formatPKR(itemTotal)}\n`;
    if (item.product.volume) {
      text += `   (${item.product.volume})\n`;
    }
  });

  text += `───────────────────────\n`;
  text += `Subtotal: ${formatPKR(totals.subtotal)}\n`;
  text += `Delivery Fee: ${totals.deliveryFee === 0 ? 'FREE' : formatPKR(totals.deliveryFee)}\n`;
  text += `*Total Amount: ${formatPKR(totals.total)}*\n\n`;

  if (customerInfo?.name) {
    text += `Customer Name: ${customerInfo.name}\n`;
  }
  if (customerInfo?.address) {
    text += `Delivery Address: ${customerInfo.address}, Rahim Yar Khan\n`;
  }
  if (customerInfo?.notes) {
    text += `Special Instructions: ${customerInfo.notes}\n`;
  }

  text += `\nPlease confirm my order and let me know the preparation/delivery time. Thank you!`;

  return `https://wa.me/${CLIENT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Filter products by category and search keyword
 */
export function filterProducts(
  products: Product[],
  categoryId?: string,
  searchQuery?: string
): Product[] {
  let filtered = products;

  if (categoryId && categoryId !== 'all') {
    filtered = filtered.filter((p) => p.category === categoryId);
  }

  if (searchQuery && searchQuery.trim().length > 0) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  return filtered;
}
