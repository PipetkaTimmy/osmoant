import React from "react";
import Link from "next/link";

const SeviceCard = ({ title, description, price, image, href }) => {
  return (
    <article className="service-card">
      <div className="service-card__media">
        <img className="service-card__image" src={image} alt={title} />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>
      <div className="service-card__footer">
        <div className="service-card__price">
          <span className="service-card__price-label">Цена</span>
          <span className="service-card__price-value">{price}</span>
        </div>
        {href ? (
          <Link className="service-card__link" href={href}>
            <span>Подробнее</span>
            <img src="/pageicons/arrow_g.png" alt="" />
          </Link>
        ) : (
          <div className="service-card__link">
            <span>Подробнее</span>
            <img src="/pageicons/arrow_g.png" alt="" />
          </div>
        )}
      </div>
    </article>
  );
};

export default SeviceCard;
