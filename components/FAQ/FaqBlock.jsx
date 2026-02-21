"use client";

import React, { useState } from "react";

const FaqBlock = ({ label, title, items }) => {
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          {label ? <span className="faq__label">[ {label} ]</span> : null}
          {title ? <h2 className="faq__title">{title}</h2> : null}
        </div>

        <div className="faq__list">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.id}>
                <button
                  className="faq__question"
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? <p className="faq__answer">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;
