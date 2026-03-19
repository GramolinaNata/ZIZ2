import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h4>О нас</h4>
          <a href="#">Наша история</a>
          <a href="#">Команда</a>
          <a href="#">Блог</a>
        </div>
        <div className="footer__col">
          <h4>Для покупателей</h4>
          <a href="#">Доставка</a>
          <a href="#">Возврат</a>
          <a href="#">Оплата</a>
        </div>
        <div className="footer__col">
          <h4>Помощь</h4>
          <a href="#">Найти ближайшего ювелира</a>
          <a href="#">Каталог</a>
          <a href="#">Мне нравится</a>
        </div>
        <div className="footer__col">
          <h4>Контакты</h4>
          <div className="footer__contact">
            <div>email@email.com</div>
            <div>+7 777 45 67 89</div>
          </div>
          <div className="footer__socials">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </div>
        </div>
      </div>
      
    </footer>
  );
}