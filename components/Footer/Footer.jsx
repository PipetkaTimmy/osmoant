import React from "react";
import { getFooterContent } from "@/lib/footerContent";

const Footer = async () => {
  const { enabled, brand, videoText, email, phone, copyright } =
    await getFooterContent();

  if (!enabled) {
    return null;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  const tel = phoneDigits ? `+${phoneDigits}` : "";

  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__brand footer__brand--desktop">
          <img src="/logos/osmo.png" alt="" />
        </div>

        <div className="footer__content">
          <div className="footer__media">
            <video
              className="footer__video"
              src="/hero/hero.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="footer__video-text">{videoText}</div>
          </div>

          <div className="footer__brand footer__brand--mobile">
            <img src="/logos/osmo.png" alt="" />
          </div>

          <div className="footer__contacts">
            <a className="footer__contact" href={`mailto:${email}`}>
              [ {email} ]
            </a>
            <a className="footer__contact" href={tel ? `tel:${tel}` : undefined}>
              [ {phone} ]
            </a>
          </div>
        </div>

        <div className="footer__copyright">{copyright}</div>
      </div>
    </section>
  );
};

export default Footer;
