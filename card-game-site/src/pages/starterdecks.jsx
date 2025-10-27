export default function starterdecks() {
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
            <section class="rounded-block">
                <h1>Starter Decks</h1>
                <div class="starter-row">
                    <img src="https://onepiece.gg/wp-content/uploads/sites/28/2025/03/ST22-Product-Image.png" alt="Starter deck 22 image">
                    <div class="starter-desc">
                        <p>One Piece Card Game Starter Decks includes a 51-card deck and a play sheet, that you can start playing immediately. ST22 features the Whitebeard Pirates with new effects!</p>
                        <h2>Release Date</h2>
                        <p>September 12, 2025</p>
                    </div>
                </div>
            </section>

            <section class="rounded-block">
                <h2>Future Starter Decks</h2>
                <div class="starter-row">
                    <img src="https://tcgplayer-cdn.tcgplayer.com/product/628478_in_800x800.jpg" alt="Starter deck image">
                    <div class="starter-desc">
                        <p>The Learn together deck set is a starter kit that includes Three leaders to play from. Red ST21 Luffy, Green OP12 Zoro, and Yellow Blue OP11 Nami</p>
                        <h2>Release Date</h2>
                        <p>October 3rd, 2025</p>
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
