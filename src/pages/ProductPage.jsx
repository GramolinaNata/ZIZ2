import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';
import '../styles/ProductPage.css';

export default function ProductPage({ product, onBack, onProductClick }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('15');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  const colors = ['#c9a96e', '#e8c99a', '#b87333', '#5f9ea0'];

  return (
    <div className="product-page">

      <div className="product-page__back" onClick={onBack}>
        ← Назад
      </div>

      <div className="product-page__layout">

        <div className="product-page__gallery">
          <div className="product-page__main-img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-page__thumbs">
            {[product.img, product.img, product.img, product.img].map((img, i) => (
              <div key={i} className={`product-page__thumb${i === 0 ? ' product-page__thumb--active' : ''}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="product-page__info">
          <div className="product-page__category">Браслет · Браслет для запястья</div>
          <h1 className="product-page__name">{product.name}</h1>
          <div className="product-page__collection">из коллекции Самолюбия</div>

          <div className="product-page__section">
            <div className="product-page__label">Цвет / Варианты</div>
            <div className="product-page__colors">
              {colors.map((color, i) => (
                <button
                  key={i}
                  className={`product-page__color${selectedColor === i ? ' product-page__color--active' : ''}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-page__desc">
            Переберите свою историю стильных и уникальных украшений бренда Marais в классическом серебре. Выбирайте из наших уточнённых коллекций, чтобы сделать его по-настоящему особенным.
          </div>

         
          <div className="product-page__dropdown">
            <button
              className="product-page__dropdown-btn"
              onClick={() => setDetailsOpen(!detailsOpen)}
            >
              Смотреть детали
              <span>{detailsOpen ? '▲' : '▼'}</span>
            </button>
            {detailsOpen && (
              <div className="product-page__dropdown-body">
                <div className="product-page__detail-row">
                  <span>Материал</span>
                  <span>Серебро 925°</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Покрытие</span>
                  <span>Золото 18k</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Длина</span>
                  <span>15–18 см</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Застёжка</span>
                  <span>Карабин</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Вес</span>
                  <span>4.2 г</span>
                </div>
              </div>
            )}
          </div>

          <div className="product-page__section">
            <div className="product-page__label">Размер</div>
            <div className="product-page__sizes">
              {['14', '15', '16.5'].map(size => (
                <button
                  key={size}
                  className={`product-page__size${selectedSize === size ? ' product-page__size--active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-page__buy">
            <div className="product-page__price">{product.price}</div>
            <button className="product-page__cart">
              В корзину
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </button>
          </div>

          
          <div className="product-page__dropdown">
            <button
              className="product-page__dropdown-btn"
              onClick={() => setDeliveryOpen(!deliveryOpen)}
            >
              Информация о доставке
              <span>{deliveryOpen ? '▲' : '▼'}</span>
            </button>
            {deliveryOpen && (
              <div className="product-page__dropdown-body">
                <div className="product-page__detail-row">
                  <span>Алматы</span>
                  <span>1–2 дня</span>
                </div>
                <div className="product-page__detail-row">
                  <span>По Казахстану</span>
                  <span>3–5 дней</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Самовывоз</span>
                  <span>Бесплатно</span>
                </div>
                <div className="product-page__detail-row">
                  <span>Возврат</span>
                  <span>14 дней</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="product-page__related">
        <h2 className="section__title">Вам также может понравиться</h2>
        <div className="product-page__related-grid">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductClick && onProductClick(p)} />
          ))}
        </div>
      </div>

      <div className="product-page__related">
        <h2 className="section__title">Завершите образ</h2>
        <div className="product-page__related-grid">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductClick && onProductClick(p)} />
          ))}
        </div>
      </div>

    </div>
  );
}