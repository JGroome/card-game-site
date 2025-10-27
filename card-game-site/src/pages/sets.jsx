export default function sets() {
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

    <section class="section-frame">
        <h1>Set Releases</h1>
            <div class="set-row">
                <img src="https://onepiecetopdecks.com/wp-content/uploads/2025/06/op12front-1200x934.jpg" alt="Box image">
                <div class="set-card">
                    <h3>OP12 Legacy Of The Master</h3>
                    <h2>Description</h2>
                    <p>Set 12 is a set that is centered around the bond between characters and their mentors throughout the anime series.</p>
                    <h2>Notable Leaders</h2>
                    <p>The current top leader in the western/english format is from the set, Green Zoro, another notable leader also in this set is Red Rayley</p>
                    <h2>Release Date</h2>
                    <p>August 22nd, 2025</p>
                </div>
            </div>
            <div class="set-row">
                <img src="/images/set11.png" alt="Box image">
                <div class="set-card">
                    <h3>OP11 A Fist of Divine Speed</h3>
                    <h2>Description</h2>
                    <p>Set 11 is a set centered around the Whole Cake island arc of the anime and features characters that were inportant to that arc.</p>
                    <h2>Notable Leaders</h2>
                    <p>Notable leaders from this set include Yellow-Blue Nami, Blue Purple Luffy, and Purple Katakuri</p>
                    <h2>Release Date</h2>
                    <p>March 1st, 2025</p>
                </div>
            </div>
    </section>
    <section class="section-frame">
        <h2>Future Releases</h2>
        <div class="set-row">
            <img src="/images/prb02.png" alt="Box image">
            <div class="set-card">
                <h3>PRB02 ONE PIECE CARD THE BEST vol.2-</h3>
                <h2>Description</h2>
                <p>PRB02 is a reprint set that is reprinting some of the most popular cards in the One Piece trading card game.</p>
                <h2>Notable Leaders</h2>
                <p>This set does not inclue any new leaders</p>
                <h2>Release Date</h2>
                <p>October 3rd, 2025</p>
            </div>
        </div>
        <div class="set-row">
            <img src="/images/set13.png" alt="Box image">
            <div class="set-card">
                <h3>OP13 Carrying on His Will</h3>
                <h2>Description</h2>
                <p>OP13 is going to be one of the largest sets in the history of the One Piece Trading card game printing many first every seen types of cards and leaders.</p>
                <h2>Notable Leaders</h2>
                <p>Notable leaders from this set include Red-Black Sabo, Red-Blue Ace, and Black Imu</p>
                <h2>Release Date</h2>
                <p>Novermber 7th, 2025</p>
            </div>
        </div>
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
