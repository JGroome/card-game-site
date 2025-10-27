export default function howtoplay() {
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
                <h1>Deckbuilding Section</h1>
                <p>When building a deck you select a leader and then build a 50 card deck that is in the same color/colors as you leader is. (Only can put green with green for example)</p>
                <p>You can include and characters from throughout the game however you are at a max of 4 per deck. Character can have the same name just not the same set number</p>
                <img src="/images/Deckbuilt.png" alt="Deckbuilding" />
                <p>As a rule of thumb when making a deck its good to select a leader and then pick cards based on that leader attributes and effects</p>
                <p>A leaders attribute look like this just bellow the characters name. In this case we want to pick Navy or SWORD type characters when we are making this deck</p>
                <img src="/images/Kobytypes.png" alt="Deckbuilding" />
                <p>Its also important to have a plan even before going into a game with building you deck, selecting characters that you can play on don!! curve is important. Continuing with our example this deck want to go second in turn order because their don goes 2-4-6-8-10 allowing you to plan turns ahead of time.</p>
                <p>When it comes to building a deck the most important part is to experiment and find the ratios and characters you like playing. If you I also would reccomend look on our <a href="/leaders.html">Leaders</a> page for deckbuilding ideas.</p>

            </section>
            <section class="rounded-block">
                <h2>Gameplay Section</h2>
                <p>Before we start describing a game lets go into pre game setup. Firstly lestgo into zones, you have you leader area where you will put your leader you have you deck area for you deck, then you have you don!! deck which will have 10 don!! cards facedown, the you character zones, don zone, graveyard/trash, and life area. </p>
                <img src="/images/setup.png" alt="Gameplay" />
                <p>You and you opponent will roll a dice to select the player who will chose the turn order. Once you have decided who will go first you are read to draw your first hand. Each player will start by drawing 5 cards from the top of their deck which has been shuffled. They both have the option to keep their current hand or reshuffle their deck and draw 5 more cards for a new hand, you can do this only once.</p>
                <img src="/images/hand.png" alt="Gameplay" />
                <p>Now once you have decided on your hand you will put you top cards of your deck onto the life area face down, the number of life cards is designated by your leader card.</p>
                <img src="/images/life.png" alt="Gameplay" /> <img src="/images/life-facedown.png" alt="Gameplay" />
                <p>Now that you both have you life into your life area you may begin the game. The first player starts by putting a don!! from their don!! deck into the cost area, they start with 1 if they are goin first and 2 if they are going second. You do not draw a card to start if you are going first. Of you are going second you get to draw on you first turn. Leaders cannot attack on their first turn.</p>
                <p>At the start of your turn following the first player both players will now draw a card and put two don!! cards from their don!! deck as active. Up to a max of 10.</p>
                <p>To play a caharacter/event/stage you look at the top left of the card for its cost, this is how many don!!s you must rest to play it. For example Jozu requires 6 don!!s rested to be played.</p>
                <img src="/images/cost.png" alt="Gameplay" />
                <p>Characters cannot attack the turn they are played unless they include they keyword "Rush"</p>
                <p>To attack you rest a character/leader and declare a target, characters cannot attack active characters, unless stated otherwise, but can always attack leaders reguardless if they are rested or not.</p>
                <p>During a battle Power which is the number on the top left is compared between characters, if the attacking character has the same or higher power it wins and the defending character is KOed but if the defending character has higher power it lives.</p>
                <img src="/images/battle.png" alt="Gameplay" />
                <p>If the defending player wishes they can discard cards with counter to increase the power of their characetr/leader for the battle.</p>
                <img src="/images/Counter.png" alt="Gameplay" />
                <p>Defending players can also declare a "Blocker" which is a character with the "blocker" effect to redirect the attack to the blocker.</p>
                <p>To win the game a player must be attack at 0 life and not counter out. They dont lose once they hit 0 life it once they are attacked at 0.</p>
                <h2>Practice makes perfect</h2>
                <p>The best way to learn is to practice games a good resource to practice is real games, or the learn to play app for the One Piece trading card game which can be found in any appstore.</p>


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
</html>`}} />
  );
}