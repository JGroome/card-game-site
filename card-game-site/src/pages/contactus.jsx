export default function contactus() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<!doctype html>
<html lang="en">
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="/styles.css"/>
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
        <main class="site-main contact-page">
            <section class="section">
                <div class="container">
                    <h1 class="page-title">Contact Us</h1>
                    <p class="text-muted">Questions or Feedback? Contact us Here!</p>
                    <form class="form card" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="86becab1-b62c-408c-b1f2-04fcalf70601">
                        <div class="form-row">
                            <div class="form-field">
                                <label for="name">Your Name <span aria-hidden="true">:</span></label>
                                <input id="name" type="text" name="name" required placeholder:="John Doe">
                            </div>
                            <div class="form-field">
                                <label for="email">Email <span aria-hidden="true">:</span></label>
                                <input id="email" type="email" name="email" required placeholder="you@example.com">
                            </div>
                        </div>
                        <div class="form-field">
                            <label for="message">Message <span aria-hidden="true">:</span></label>
                            <textarea id="message" name="message" required placeholder="How can we help?"></textarea>
                        </div>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success">
                        <div class="form-actions">
                            <button class="btn btn-primary" type="submit">Submit Form</button>
                        </div>
                    </form>
                <h1>Find our location Here!</h1>
                </div>
            <iframe
            id = "map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26471.19476582874!2d-81.00729801365654!3d33.969426504724126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8baef1321f791%3A0x83f44871f4a3c265!2sWilliams-Brice%20Stadium!5e0!3m2!1sen!2sus!4v1760672580637!5m2!1sen!2sus" 
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </section>
        </main>
        <footer class="site-footer">
            <div class="footer-inner">
                <p class="brand-blurb">Brief description.</p>
                <div class="legal">
                    <a href="/contact-us.html">Contact Us</a>
                    <span>Privacy</span>
                    <span>&copy; Joseph Groome</span>
                </div>
            </div>
        </footer>
    </div>
    <script src="contact-us.js"></script>
</body>
</html>

`}} />
);
}