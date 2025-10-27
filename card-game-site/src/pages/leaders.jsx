export default function leaders() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Home</title>
    <link rel="stylesheet" href="/styles.css" />
</head>
<body>
<div class="site-wrap">
    <header class="site-header">
        <a class="logo" href="/index.html" aria-label="Go to homepage"><span>OpTCGDeckz</span></a>
        <form class="search" role="search" action="#">
            <input type="search" placeholder="search bar" aria-label="Search" />
        </form>
    <nav class="nav">
        <a href="/starter-decks.html">Starter Decks</a>
        <a href="/sets.html">Sets</a>
        <a href="/leaders.html">Leaders</a>
        <a href="/how-to-play.html">How to play</a>
    </nav>
    </header>
    <main>

        <section class="leaders-header">
            <form class="search secondary">
                <input type="search" id="leaderSearch" placeholder="search leaders..." />
            </form>
            <div class="filters">
                <button class="btn filter-btn" data-color="">All</button>
                <button class="btn filter-btn" data-color="red">Red</button>
                <button class="btn filter-btn" data-color="blue">Blue</button>
                <button class="btn filter-btn" data-color="green">Green</button>
                <button class="btn filter-btn" data-color="yellow">Yellow</button>
                <button class="btn filter-btn" data-color="yellow">Black</button>
            </div>
        </section>

        <section class="leader-grid" id="leaderGrid">
            <a class="leader-card" href="/leader.html" data-color="red" data-name="Leader 1">
                <img src="https://static.dotgg.gg/onepiece/card/OP12-001.webp" alt="Leader 1">
                <h3>Silvers Rayleigh</h3>
                <p>Red • Aggro</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="blue" data-name="Leader 2">
                <img src="https://static.dotgg.gg/onepiece/card/OP12-020.webp" alt="Leader 2">
                <h3>Zoro</h3>
                <p>Green • Aggro / Board Control</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="green" data-name="Leader 3">
                <img src="https://static.dotgg.gg/onepiece/card/OP11-040.webp" alt="Leader 3">
                <h3>Luffy</h3>
                <p>Blue/Purple • Ramp / Swarm</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="yellow" data-name="Leader 4">
                <img src="https://static.dotgg.gg/onepiece/card/OP13-079.webp" alt="Leader 4">
                <h3>Imu</h3>
                <p>Black • Board Control / Swarm</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="red" data-name="Leader 5">
                <img src="https://static.dotgg.gg/onepiece/card/OP13-002.webp" alt="Leader 5">
                <h3>Ace</h3>
                <p>Red/Blue • Draw / Stall</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="blue" data-name="Leader 6">
                <img src="https://static.dotgg.gg/onepiece/card/OP13-004.webp" alt="Leader 6">
                <h3>Sabo</h3>
                <p>Red/Black • Control</p>
            </a>
            <a class="leader-card" href="/leader.html" data-color="green" data-name="Leader 7">
                <img src="https://static.dotgg.gg/onepiece/card/OP09-001.webp" alt="Leader 7">
                <h3>Shanks</h3>
                <p>Red • Control</p>
            </a>
        </section>

    </main>
    <footer class="site-footer">
        <div class="footer-inner">
            <p class="brand-blurb">Brief description.</p>
            <div class="legal">
                <span>Terms of service</span>
                <span>Privacy</span>
                <span>&copy; Joseph Groome</span>
            </div>
        </div>
    </footer>
</div>
<script src="script.js"></script>
</body>
</html>
`}} />
  );
}
