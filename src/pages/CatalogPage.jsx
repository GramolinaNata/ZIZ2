import { useState } from 'react';
import { catalogProducts, sidebarSections } from '../data/products';
import '../styles/CatalogPage.css';

export default function CatalogPage({ onProductClick }) {
  const [active, setActive] = useState('Все декорации');
  const [openSections, setOpenSections] = useState(
    sidebarSections.map(s => s.title)
  );

  const toggleSection = (title) => {
    setOpenSections(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="catalog">

      <aside className="catalog__sidebar">
        <div className="sidebar__filter-title">Фильтр</div>

        {sidebarSections.map(s => {
          const isOpen = openSections.includes(s.title);
          const firstItem = s.items[0];
          const rest = s.items.slice(1);

          return (
            <div className="sidebar__section" key={s.title}>
              <div className="sidebar__header" onClick={() => toggleSection(s.title)}>
                <span className="sidebar__title">{s.title}</span>
                <span style={{ fontSize: '9px', color: 'var(--gray)' }}>
                  {isOpen ? '▲' : '▼'}
                </span>
              </div>

              {isOpen && (
                <>
                  <div
                    className={`sidebar__item${active === firstItem ? ' sidebar__item--active' : ''}`}
                    onClick={() => setActive(firstItem)}
                  >
                    {firstItem}
                  </div>
                  {rest.map(item => (
                    <div
                      key={item}
                      className="sidebar__subitem"
                      onClick={() => setActive(item)}
                    >
                      {item}
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}

        

        <div className="sidebar__section">
          <div className="sidebar__header">
            <span className="sidebar__title">Размер</span>
          </div>
          <div className="sidebar__size-row">
            {['14', '15', '16.5'].map(size => (
              <button
                key={size}
                className={`sidebar__size-btn${size === '15' ? ' sidebar__size-btn--active' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="catalog__main">
        <div className="catalog__grid">
          {catalogProducts.map(p => (
            <div
              className="catalog__card"
              key={p.id}
              onClick={() => onProductClick(p)}
            >
              <div className="catalog__card-img">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="catalog__card-info">
                <div className="catalog__card-top">
                  <div className="catalog__card-name">{p.name}</div>
                  <div className="catalog__card-price">{p.price}</div>
                </div>
                <div className="catalog__card-sub">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="catalog__load-more">Смотреть больше</button>

        <div className="catalog__pagination">
          {['❮', 1, 2, 3, 4, 5, '❯'].map((p, i) => (
            <button
              key={i}
              className={`catalog__page-btn${p === 4 ? ' catalog__page-btn--active' : ''}`}
            >
              {p}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}