"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" onClick={closeMenu}>
        <img className="navbar__logo" src="/logos/osmo.png" alt="Osmo" />
      </Link>

      <button className="navbar__toggle" type="button" onClick={() => setIsOpen(true)}>
        = МЕНЮ
      </button>

      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" href="/sales-sites">
            [ Сайты для продаж ]
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" href="/corporate-sites">
            [ Корпоративные сайты ]
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" href="/mobile-dev">
            [ Мобильная разработка ]
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" href="/contacts">
            [ Контакты ]
          </Link>
        </li>
      </ul>

      <div className={`navbar__panel ${isOpen ? "is-open" : ""}`}>
        <div className="navbar__panel-head">
          <Link href="/" onClick={closeMenu}>
            <img className="navbar__logo" src="/logos/osmo.png" alt="Osmo" />
          </Link>
          <button
            className="navbar__toggle navbar__toggle--close"
            type="button"
            onClick={closeMenu}
          >
            x ЗАКРЫТЬ
          </button>
        </div>

        <div className="navbar__panel-preview">
          <video src="/hero/hero.webm" autoPlay muted loop playsInline />
        </div>

        <ul className="navbar__panel-list">
          <li className="navbar__panel-item">
            <Link className="navbar__panel-link" href="/sales-sites" onClick={closeMenu}>
              [ Сайты для продаж ]
            </Link>
          </li>
          <li className="navbar__panel-item">
            <Link className="navbar__panel-link" href="/corporate-sites" onClick={closeMenu}>
              [ Корпоративные сайты ]
            </Link>
          </li>
          <li className="navbar__panel-item">
            <Link className="navbar__panel-link" href="/mobile-dev" onClick={closeMenu}>
              [ Мобильная разработка ]
            </Link>
          </li>
          <li className="navbar__panel-item">
            <Link className="navbar__panel-link" href="/contacts" onClick={closeMenu}>
              [ Контакты ]
            </Link>
          </li>
        </ul>

        <div className="navbar__panel-contacts">
          <a href="mailto:hello@osmo.studio">[ hello@osmo.studio ]</a>
          <a href="tel:+77777777777">[ +7 (777) 777-77-77 ]</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
