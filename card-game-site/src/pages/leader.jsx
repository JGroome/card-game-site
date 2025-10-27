export default function leader() {
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

        <section class="leader-hero">
            <div class="leader-hero-media"><img src="https://lipsum.app/640x800/" alt="Leader splash art"></div>
            <div class="leader-hero-info">
                <nav class="pills">
                    <a class="active" href="/#">Overview</a>
                    <a href="/#">Key Cards</a>
                    <a href="/#">Matchups</a>
                    <a href="/#">Tips</a>
                    <a href="/#">FAQ</a>
                </nav>
                <div class="pill-content">
                    <p>Brief description of the leader playstyle and why you might choose this leader.</p>
                </div>
            </div>
        </section>

        <section class="rounded-block">
            <div class="double">
                <img src="https://lipsum.app/320x480/" alt="Key card">
                <div>
                    <h2>Early Game Plan</h2>
                    <p>Paragraph explaining how to start the game with this leader.</p>
                </div>
            </div>
        </section>

        <section class="rounded-block">
            <div class="double">
                <img src="https://lipsum.app/320x480/" alt="Key card">
                <div>
                    <h2>Late Game Plan</h2>
                    <p>Paragraph explaining win conditions and closing plays.</p>
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
