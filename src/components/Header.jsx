import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo on the left */}
      <Link to="/" className="logo">OpTCGDeckz</Link>

      <form className="search" role="search">
        <input type="search" placeholder="search bar" aria-label="Search" />
      </form>

      <nav className="nav">
        <Link to="/starter-decks">Starter Decks</Link>
        <Link to="/sets">Sets</Link>
        <Link to="/leaders">Leaders</Link>
        <Link to="/how-to-play">How to play</Link>
      </nav>
    </header>
  );
}