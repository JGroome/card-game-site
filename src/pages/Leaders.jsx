import { Link } from "react-router-dom";
import React from "react";
export default function Leaders() {
  return (
<><main>
    <section className="leaders-header">
        <form className="search secondary">
            <input id="leaderSearch" placeholder="search leaders..." type="search"/>
        </form>
        <div className="filters">
            <button className="btn filter-btn" data-color="">All</button>
            <button className="btn filter-btn" data-color="red">Red</button>
            <button className="btn filter-btn" data-color="blue">Blue</button>
            <button className="btn filter-btn" data-color="green">Green</button>
            <button className="btn filter-btn" data-color="yellow">Yellow</button>
            <button className="btn filter-btn" data-color="yellow">Black</button>
        </div>
    </section>
    <section className="leader-grid" id="leaderGrid">
        <Link className="leader-card" data-color="red" data-name="Leader 1" to="/leader">
            <img alt="Leader 1" src="https://static.dotgg.gg/onepiece/card/OP12-001.webp"/>
            <h3>Silvers Rayleigh</h3>
            <p>Red • Aggro</p>
        </Link>
        <Link className="leader-card" data-color="blue" data-name="Leader 2" to="/leader">
            <img alt="Leader 2" src="https://static.dotgg.gg/onepiece/card/OP12-020.webp"/>
            <h3>Zoro</h3>
            <p>Green • Aggro / Board Control</p>
        </Link>
        <Link className="leader-card" data-color="green" data-name="Leader 3" to="/leader">
            <img alt="Leader 3" src="https://static.dotgg.gg/onepiece/card/OP11-040.webp"/>
            <h3>Luffy</h3>
            <p>Blue/Purple • Ramp / Swarm</p>
        </Link>
        <Link className="leader-card" data-color="yellow" data-name="Leader 4" to="/leader">
            <img alt="Leader 4" src="https://static.dotgg.gg/onepiece/card/OP13-079.webp"/>
            <h3>Imu</h3>
            <p>Black • Board Control / Swarm</p>
        </Link>
        <Link className="leader-card" data-color="red" data-name="Leader 5" to="/leader">
            <img alt="Leader 5" src="https://static.dotgg.gg/onepiece/card/OP13-002.webp"/>
            <h3>Ace</h3>
            <p>Red/Blue • Draw / Stall</p>
        </Link>
        <Link className="leader-card" data-color="blue" data-name="Leader 6" to="/leader">
            <img alt="Leader 6" src="https://static.dotgg.gg/onepiece/card/OP13-004.webp"/>
            <h3>Sabo</h3>
            <p>Red/Black • Control</p>
        </Link>
        <Link className="leader-card" data-color="green" data-name="Leader 7" to="/leader">
            <img alt="Leader 7" src="https://static.dotgg.gg/onepiece/card/OP09-001.webp"/>
            <h3>Shanks</h3>
            <p>Red • Control</p>
        </Link>
    </section>
</main></>
  );
}
