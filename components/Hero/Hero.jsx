import React from "react";
import { getHeroContent } from "@/lib/heroContent";

const Hero = async () => {
  const { title, description, enabled } = await getHeroContent();

  if (!enabled) {
    return null;
  }

  return (
    <section className="hero">
      <div className="hero__container">
        <video
          className="hero__video"
          src="/hero/hero.webm"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">[ {title} ]</h1>
            <p className="hero__description">{description}</p>
          </div>
          <button className="hero__order">
            Обсудить проект <img src="/pageicons/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
