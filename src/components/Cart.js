// Компонент корзины: показывает товары из localStorage и позволяет менять количество / очищать корзину
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, saveCart, clearCart as clearCartStorage } from "../utils/cartStorage";
import "../styles/cart.css";
import logo from "../image/combatXblack.jpg";
import { useLang } from '../i18n/LangContext';

function Cart() {
  const [cart, setCart] = useState([]);
  const [showContactModal, setShowContactModal] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const recalcAndSave = (newCart) => {
    setCart(newCart);
    saveCart(newCart);
  };

  const changeQty = (id, delta) => {
    const newCart = cart.map((it) => (it.id === id ? { ...it, quantity: Math.max(1, (it.quantity || 1) + delta) } : it))
      .filter((it) => it.quantity > 0);
    recalcAndSave(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((it) => it.id !== id);
    recalcAndSave(newCart);
  };

  const clearAll = () => {
    clearCartStorage();
    setCart([]);
  };

  const total = cart.reduce((s, it) => s + (Number(it.price) || 0) * (it.quantity || 1), 0);

  return (
    <>
      <img src={logo} alt="CombatX" className="cart-hero" />
      <div className="cart-page" style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
  <h1>{t('cart')}</h1>
            {cart.length === 0 ? (
          <div>
            <p>{t('emptyCart')}</p>
            <Link to="/">{t('continueShopping')}</Link>
          </div>
        ) : (
          <>
            <div className="cart-list" style={{ display: "grid", gap: 12 }}>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                  ) : (
                    <div className="cart-item-img placeholder" />
                  )}
                  <div className="cart-item-body">
                    <div className="cart-item-title" style={{ fontWeight: 700 }}>{item.title}</div>
                    <div className="cart-item-price" style={{ color: "#666" }}>{item.price ? `${Number(item.price).toLocaleString()} դրամ` : "Цена не указана"}</div>
                  </div>
                  <div className="cart-item-controls">
                    <div className="cart-qty">
                      <button onClick={() => changeQty(item.id, -1)} className="qty-btn">-</button>
                      <div className="qty-value">{item.quantity || 1}</div>
                      <button onClick={() => changeQty(item.id, +1)} className="qty-btn">+</button>
                    </div>
                    <div className="cart-item-sum">{((Number(item.price) || 0) * (item.quantity || 1)).toLocaleString()} դրամ</div>
                    <button onClick={() => removeItem(item.id)} className="cart-remove-btn">Удалить</button>
                  </div>
                </div>
              ))}
            </div>

                <div className="cart-summary" style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="cart-total" style={{ fontSize: 18, fontWeight: 700 }}>Итого: {total.toLocaleString()} դրամ</div>
              <div className="cart-actions" style={{ display: "flex", gap: 12 }}>
                <button onClick={clearAll} className="cart-clear-btn">Очистить корзину</button>
                <button onClick={() => setShowContactModal(true)} className="cart-checkout-btn">{t('checkout')}</button>
              </div>
            </div>
          </>
        )}
      </div>

      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="contact-close" onClick={() => setShowContactModal(false)}>×</button>
            <h3>{t('contactUs')}</h3>
            <p className="contact-sub">Выберите удобный способ связи для оформления заказа:</p>
            <div className="contact-list">
              <a className="contact-item whatsapp" href={`https://wa.me/37455566106?text=Здравствуйте,%20хочу%20оформить%20заказ`} target="_blank" rel="noreferrer">WhatsApp
                <span className="contact-desc">Написать в WhatsApp</span>
              </a>
              <a className="contact-item viber" href={`viber://chat?number=%2B37455566106`} target="_blank" rel="noreferrer">Viber
                <span className="contact-desc">Открыть чат в Viber</span>
              </a>
              <a className="contact-item telegram" href={`https://t.me/+37455566106`} target="_blank" rel="noreferrer">Telegram
                <span className="contact-desc">Написать в Telegram</span>
              </a>
              <a className="contact-item phone" href={`tel:+37455566106`}>Телефон: +374 55 566 106
                <span className="contact-desc">Позвоните нам</span>
              </a>
              <a className="contact-item email" href={`mailto:combatX@gmail.com`}>Email: combatX@gmail.com
                <span className="contact-desc">Отправить письмо</span>
              </a>
            </div>
            <div className="contact-actions">
              <button className="contact-copy" onClick={() => { navigator.clipboard?.writeText('+37455566106'); alert(t('copyNumber')); }}>{t('copyNumber')}</button>
              <button className="contact-close-btn" onClick={() => setShowContactModal(false)}>{t('cancel')}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

// модальное окно контактов вставляется в конец файла через JSX выше при showContactModal
