import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data/products';
import { addToCartOnce, getCart } from '../utils/cartStorage';
import '../../src/styles/productDetail.css';
import { useLang } from '../i18n/LangContext';

export default function ProductDetail() {
  const { t } = useLang();
  const navigate = useNavigate();
  const { id } = useParams();
  const pid = Number(id);
  const product = products.find(p => p.id === pid);

  // состояние: в корзине или нет
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (!product) {
      setInCart(false);
      return;
    }
    try {
      const cart = getCart();
      setInCart(cart.some(c => c.id === product.id));
    } catch (e) {
      setInCart(false);
    }
  }, [product]);

  if(!product) return <div className="product-detail"><div className="not-found">Товар не найден</div></div>;

  const onAdd = () => {
    const added = addToCartOnce(product);
    // помечаем как в корзине в любом случае — если уже был, сохраняем индикацию
    setInCart(true);
    if (added) {
      alert(t('addedToCart'));
    } else {
      alert('Товар уже в корзине');
    }
  };

  return (
    <div className="product-detail container">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-detail-grid">
        <div className="product-left">
          <div className="product-photos">
            {Array.from({length:4}).map((_,i) => (
              <img key={i} src={product.images[i%product.images.length]} alt={`${product.title} ${i+1}`} className="product-photo" />
            ))}
          </div>
          <p className="product-desc">{product.desc}</p>
        </div>
        <aside className="product-right">
          <div className="product-price">{product.price ? product.price.toLocaleString() + ' դրամ' : <span className="no-price">Цена не указана</span>}</div>
          {/* sizes removed per request */}
          <div className="product-actions">
            <button className={`btn ${inCart ? 'btn-in-cart' : 'btn-primary'}`} onClick={onAdd} disabled={inCart}>{inCart ? 'В корзине' : t('addToCart')}</button>
            <button className="btn btn-outline" onClick={() => navigate('/cart')}>{t('checkout')}</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
