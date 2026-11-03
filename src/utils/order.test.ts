import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCartTotals,
  formatPKR,
  buildWhatsAppOrderUrl,
  filterProducts,
  CartItem
} from './order';
import { PRODUCTS } from '../data/beverages';

test('formatPKR formats amounts correctly', () => {
  assert.equal(formatPKR(120), 'Rs. 120');
  assert.equal(formatPKR(1500), 'Rs. 1,500');
  assert.equal(formatPKR(0), 'Rs. 0');
});

test('calculateCartTotals calculates empty cart as 0', () => {
  const result = calculateCartTotals([]);
  assert.equal(result.itemCount, 0);
  assert.equal(result.subtotal, 0);
  assert.equal(result.deliveryFee, 0);
  assert.equal(result.total, 0);
});

test('calculateCartTotals applies standard delivery fee when below threshold', () => {
  const testProduct = PRODUCTS[0]; // price 120
  const items: CartItem[] = [{ product: testProduct, quantity: 2 }]; // 240
  const result = calculateCartTotals(items);

  assert.equal(result.itemCount, 2);
  assert.equal(result.subtotal, 240);
  assert.equal(result.deliveryFee, 50);
  assert.equal(result.total, 290);
  assert.equal(result.amountNeededForFreeDelivery, 260);
});

test('calculateCartTotals gives free delivery at or above threshold', () => {
  const testProduct = PRODUCTS[0]; // price 120
  const items: CartItem[] = [{ product: testProduct, quantity: 5 }]; // 600
  const result = calculateCartTotals(items);

  assert.equal(result.itemCount, 5);
  assert.equal(result.subtotal, 600);
  assert.equal(result.deliveryFee, 0);
  assert.equal(result.total, 600);
  assert.equal(result.amountNeededForFreeDelivery, 0);
});

test('buildWhatsAppOrderUrl produces valid WhatsApp link with phone and items', () => {
  const testProduct = PRODUCTS[0];
  const items: CartItem[] = [{ product: testProduct, quantity: 2 }];
  const url = buildWhatsAppOrderUrl(items, { name: 'Ali', address: 'Model Town' });

  assert.ok(url.startsWith('https://wa.me/923007401447?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes("Kareem's Limca & Milk Soda"));
  assert.ok(decoded.includes(testProduct.name));
  assert.ok(decoded.includes('Customer Name: Ali'));
  assert.ok(decoded.includes('Model Town'));
});

test('filterProducts filters by category and keyword search', () => {
  const limcaOnly = filterProducts(PRODUCTS, 'classic-limca');
  assert.equal(limcaOnly.length, 3);
  limcaOnly.forEach(p => assert.equal(p.category, 'classic-limca'));

  const searchResults = filterProducts(PRODUCTS, undefined, 'chocolate');
  assert.ok(searchResults.length >= 3);
  searchResults.forEach(p => {
    const text = (p.name + p.tagline + p.description).toLowerCase();
    assert.ok(text.includes('choco'));
  });
});
