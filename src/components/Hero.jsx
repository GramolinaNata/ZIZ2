import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src="/hero.png"
        alt="MARAIS — новая коллекция"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <button className="hero__btn">Новые поступления</button>
      </div>
    </section>
  );
}