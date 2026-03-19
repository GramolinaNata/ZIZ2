import '../styles/ProductCard.css';

export default function ProductCard({ name, sub, price, img, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__img">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <div className="product-card__info">
        <div className="product-card__top">
          <div className="product-card__name">{name}</div>
          <div className="product-card__price">{price}</div>
        </div>
        <div className="product-card__sub">{sub}</div>
      </div>
    </div>
  );
}