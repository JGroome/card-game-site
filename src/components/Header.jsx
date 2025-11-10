import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">

      <Link to="/" className="logo">OpTCGDeckz</Link>

      <form className="search" role="search">
        <input type="search" placeholder="search bar" aria-label="Search" />
      </form>

      <div className="menu-toggle">
        <button
          className={`hamburger ${open ? "hidden" : ""}`}
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
        <button
          className={`close-btn ${open ? "" : "hidden"}`}
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/starter-decks">Starter Decks</Link>
        <Link to="/sets">Sets</Link>
        <Link to="/leaders">Leaders</Link>
        <Link to="/how-to-play">How to play</Link>
      </nav>
    </header>
  );
}

