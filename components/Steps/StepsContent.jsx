"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const StepsContent = ({ items, backgroundImages }) => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const areaRef = useRef(null);
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

  const offset = useMemo(() => {
    const current = Math.min(Math.max(index, 0), maxIndex);
    return -(current * 100) / visibleCount;
  }, [index, maxIndex, visibleCount]);

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

  const handleMove = (event) => {
    const area = areaRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    area.style.setProperty("--mx", x.toFixed(4));
    area.style.setProperty("--my", y.toFixed(4));
  };

  const handleLeave = () => {
    const area = areaRef.current;
    if (!area) return;
    area.style.setProperty("--mx", "0");
    area.style.setProperty("--my", "0");
  };

  return (
    <div
      className="steps__content"
      ref={areaRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="steps__parallax">
        {backgroundImages.map((src, i) => (
          <img
            key={src}
            className={`steps__bg steps__bg--${i + 1}`}
            src={src}
            alt=""
          />
        ))}
      </div>

      <div className="steps__slider">
        <div
          className="steps__track"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {items.map((item) => (
            <div className="steps__card" key={item.id}>
              <div className="steps__card-wrapper">
                <div className="steps__card-head">
                  <span className="steps__card-number">{item.number}</span>
                  <span className="steps__card-number">{item.tag}'</span>
                </div>
                <div className="steps__card-line" />
              </div>
              <div className="steps__card-wrapper">
                <h3 className="steps__card-title">{item.title}</h3>
                <p className="steps__card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="steps__controls">
          <button className="steps__arrow" type="button" onClick={prev}>
            <span aria-hidden>
              <img src="/pageicons/btnl.png" alt="" />
            </span>
          </button>
          <button className="steps__arrow" type="button" onClick={next}>
            <span aria-hidden>
              <img src="/pageicons/btnr.png" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsContent;
