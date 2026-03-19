import '../styles/CollectionBlock.css';

export default function CollectionBlock({ reverse, collectionName, modelImg, productImg, productName, productSub, productPrice }) {
  return (
    <div className={`coll${reverse ? ' coll--rev' : ''}`}>
      <div className="coll__img">
        <img src={modelImg} alt={collectionName} loading="lazy" />
      </div>
      <div className="coll__info">
        <span className="coll__tag">Коллекция</span>
        <h2 className="coll__title">КОЛЛЕКЦИЯ<br />{collectionName}</h2>
        <button className="coll__btn">Посмотреть больше</button>
        <div className="coll__product">
          <img src={productImg} alt={productName} />
          <div className="coll__prod-row">
            <div className="coll__prod-left">
              <div className="coll__pname">{productName}</div>
              <div className="coll__psub">{productSub}</div>
            </div>
            <div className="coll__pprice">{productPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}