import Hero from '../components/Hero';
import CollectionBlock from '../components/CollectionBlock';
import ProductCard from '../components/ProductCard';
import { categories, featuredProducts, earrings, bracelets, reviews } from '../data/products';
import '../styles/HomePage.css';

export default function HomePage({ setPage, onProductClick }) {
  return (
    <main>
      <Hero />

     
      <section className="section">
        <h2 className="section__title">Истории, рассказанные в Серебре & Золоте</h2>
        <div className="cat-grid">
          {categories.map(c => (
            <div className="cat-item" key={c.id} onClick={() => setPage('catalog')}>
              <div className="cat-item__img"><img src={c.img} alt={c.label} loading="lazy" /></div>
              <span className="cat-item__label">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

   
      <CollectionBlock
        collectionName="FLOURIDA"
        modelImg="https://www.culturekings.com.au/cdn/shop/products/09000488-YI040_womens_002_grande.jpg?v=1644808345"
        productImg="https://ae04.alicdn.com/kf/Sbdc556c4581c45bea671750bc8643fc8w.jpg"
        productName="CASCADE" productSub="Серебряное ожерелье" productPrice="330 000 ₸"
      />

      
      <section className="section">
        <div className="product-grid">
          {featuredProducts.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductClick(p)} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Мишень</h2>
        <div className="video-block">
          <iframe
            className="video-block__iframe"
            src="https://www.youtube.com/embed/8kkd0_xRPbU"
            title="MARAIS video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

    
      <CollectionBlock reverse
        collectionName="FLOURIDA"
        modelImg="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
        productImg="https://i.pinimg.com/736x/f7/2f/4b/f72f4bc57becbab14735c915f54e2abe.jpg"
        productName="CASCADE" productSub="Золотое ожерелье" productPrice="220 000 ₸"
      />

   
      <section className="section">
        <h2 className="section__title">Серьги Коллекции Самолюбия</h2>
        <div className="product-grid">
          {earrings.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductClick(p)} />
          ))}
        </div>
      </section>

   
      <CollectionBlock
        collectionName="FLOURIDA"
        modelImg="https://www.culturekings.com.au/cdn/shop/products/09000488-YI040_womens_002_grande.jpg?v=1644808345"
        productImg="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"
        productName="CASCADE" productSub="Серебряное ожерелье" productPrice="330 000 ₸"
      />

   
      <section className="section">
        <h2 className="section__title">Браслеты Сияйте по-своему</h2>
        <div className="product-grid">
          {bracelets.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductClick(p)} />
          ))}
        </div>
      </section>

  
      <section className="section">
        <h2 className="section__title">Отзывы</h2>
        <p className="reviews__sub">Наши клиенты делятся всеми мнениями о покупках</p>
        <div className="reviews__grid">
          {reviews.map(r => (
            <div className="review-card" key={r.id}>
              <div className="review-card__stars">★★★★★</div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__author">
                <img src={r.avatar} alt={r.name} className="review-card__avatar" />
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__city">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-outline-dark">Оставить отзыв</button>
      </section>
    </main>
  );
}