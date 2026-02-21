import React from "react";
import ServiceCard from "@/components/Services/SeviceCard";
import Steps from "@/components/Steps/Steps";
import Contacts from "@/components/Contacts/Contacts";
import FaqBlock from "@/components/FAQ/FaqBlock";

const ServicePageTemplate = ({ content }) => {
  const { hero, audience, solutions, faq } = content;

  return (
    <>
      {hero?.enabled !== false && (
        <section className="hero service-hero">
          <div className="hero__container">
            {hero?.mediaType === "image" ? (
              <img className="hero__video" src={hero.image} alt="" />
            ) : (
              <video
                className="hero__video"
                src={hero?.image ?? "/hero/hero.webm"}
                autoPlay
                muted
                loop
                playsInline
              />
            )}
            <div className="hero__overlay" />
            <div className="hero__content">
              <div className="hero__text">
                <h1 className="hero__title">[ {hero?.label} ]</h1>
                <p className="hero__description">{hero?.title}</p>
              </div>
              <button className="hero__order">
                {hero?.cta ?? "Обсудить проект"} <img src="/pageicons/arrow.png" alt="" />
              </button>
            </div>
          </div>
        </section>
      )}

      {audience?.enabled !== false && (
        <section className="audience">
          <div className="container">
            <div className="audience__header">
              <span className="block__label">[ {audience?.label} ]</span>
              <h2 className="audience__title">{audience?.title}</h2>
            </div>
            <div className="audience__media">
              <img src={audience?.image} alt="" />
            </div>
          </div>
        </section>
      )}

      {solutions?.enabled !== false && (
        <section className="services services--page">
          <div className="container">
            {solutions?.header?.enabled !== false && (
              <div className="block__header">
                <span className="block__label">[ {solutions?.header?.label} ]</span>
                <h2 className="block__title">{solutions?.header?.title}</h2>
              </div>
            )}

            <div className="services__grid services__grid--page">
              {solutions?.items?.map((item) => (
                <ServiceCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Steps />
      <Contacts />

      {faq?.enabled !== false ? (
        <FaqBlock label={faq?.label} title={faq?.title} items={faq?.items ?? []} />
      ) : null}
    </>
  );
};

export default ServicePageTemplate;
