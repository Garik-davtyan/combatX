// Модуль управления корзиной — сохраняет в localStorage под ключом 'combatx_cart'
const CART_KEY = 'combatx_cart';

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('getCart error', e);
    return [];
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error('saveCart error', e);
  }
}

// Добавляет товар в корзину. Если товар уже есть — увеличивает quantity.
export function addToCart(item) {
  if (!item || !item.id) {
    console.warn('addToCart: invalid item', item);
    return;
  }
  const cart = getCart();
  const idx = cart.findIndex((c) => c.id === item.id);
  if (idx >= 0) {
    cart[idx].quantity = (cart[idx].quantity || 1) + 1;
  } else {
    // сохраняем минимальную информацию — можно расширить позже
    const saved = {
      id: item.id,
      title: item.title || item.name || 'Товар',
      price: item.price || 0,
      image: item.images && item.images[0] ? item.images[0] : item.image || null,
      quantity: 1,
    };
    cart.push(saved);
  }
  saveCart(cart);
}

// Добавляет товар только если его ещё нет в корзине. Возвращает true если добавлен, false если уже есть.
export function addToCartOnce(item) {
  if (!item || !item.id) {
    console.warn('addToCartOnce: invalid item', item);
    return false;
  }
  const cart = getCart();
  const exists = cart.some((c) => c.id === item.id);
  if (exists) {
    return false;
  }
  const saved = {
    id: item.id,
    title: item.title || item.name || 'Товар',
    price: item.price || 0,
    image: item.images && item.images[0] ? item.images[0] : item.image || null,
    quantity: 1,
  };
  cart.push(saved);
  saveCart(cart);
  return true;
}

export function clearCart() {
  try {
    localStorage.removeItem(CART_KEY);
  } catch (e) {
    console.error('clearCart error', e);
  }
}

const cartAPI = {
  getCart,
  saveCart,
  addToCart,
  clearCart,
};

export default cartAPI;
