import '../styles/Navbar.css';

const IconPhone  = () => <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const IconBag    = () => <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>;
const IconSearch = () => <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconUser   = () => <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

export default function Navbar({ setPage }) {
  return (
    <nav className="nav">
      <div className="nav__links">
        <a className="nav__link" href="#" onClick={e => { e.preventDefault(); setPage('home'); }}>Магазин</a>
        <a className="nav__link" href="#" onClick={e => { e.preventDefault(); setPage('catalog'); }}>Бренд</a>
        <a className="nav__link" href="#">Проект</a>
        <a className="nav__link" href="#">Отзывы</a>
      </div>

      <div className="nav__logo">MA<em>R</em>AIS</div>

      <div className="nav__actions">
        <button className="nav__icon" aria-label="Телефон"><IconPhone /></button>
        <button className="nav__icon" aria-label="Корзина"><IconBag /></button>
        <button className="nav__icon" aria-label="Поиск"><IconSearch /></button>
        <button className="nav__icon" aria-label="Профиль"><IconUser /></button>
        <button className="nav__lang">RU</button>
      </div>
    </nav>
  );
}