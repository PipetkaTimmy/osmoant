"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const CARD_WIDTH = 438;
const GAP = 16;

const TeamContent = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [stepWidth, setStepWidth] = useState(CARD_WIDTH + GAP);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const maxIndex = Math.max(items.length - visibleCount, 0);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 991) {
        setVisibleCount(1);
        return;
      }
      if (window.innerWidth <= 1024) {
        setVisibleCount(2);
        return;
      }
      setVisibleCount(4);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  useEffect(() => {
    const updateStep = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const card = viewportRef.current.querySelector(".team-card");
      if (!card) return;
      const gapValue = parseFloat(getComputedStyle(trackRef.current).columnGap || getComputedStyle(trackRef.current).gap || "16");
      setStepWidth(card.getBoundingClientRect().width + gapValue);
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, [items.length, visibleCount]);

  const offset = useMemo(() => {
    const current = Math.min(Math.max(index, 0), maxIndex);
    return -(current * stepWidth);
  }, [index, maxIndex, stepWidth]);

  const next = () => {
    if (index >= maxIndex) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index <= 0) {
      setIndex(maxIndex);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="team__slider">
      <div className="team__viewport" ref={viewportRef}>
        <div className="team__track" ref={trackRef} style={{ transform: `translateX(${offset}px)` }}>
          {items.map((item) => (
            <article className="team-card" key={item.id}>
              <div className="team-card__image-wrap">
                <img className="team-card__image" src={item.image} alt={item.role} />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__role">{item.role}</h3>
                <p className="team-card__name">{item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="team__controls">
        <button className="team__arrow" type="button" onClick={prev}>
          <span aria-hidden>
            <img src="/pageicons/btnl.png" alt="" />
          </span>
        </button>
        <button className="team__arrow" type="button" onClick={next}>
          <span aria-hidden>
            <img src="/pageicons/btnr.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TeamContent;
