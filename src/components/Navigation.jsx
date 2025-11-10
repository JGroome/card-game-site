import { Link } from "react-router-dom";

export default function Navigation() {
  return (
<><nav className="nav">
    <Link to="/starter-decks">Starter Decks</Link>
    <Link to="/sets">Sets</Link>
    <Link to="/leaders">Leaders</Link>
    <Link to="/how-to-play">How to play</Link>
</nav></>
  );
}
