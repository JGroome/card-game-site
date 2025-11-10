import { Link } from "react-router-dom";
import React from "react";
export default function StarterDecks() {
  return (
<><main>
  <section className="rounded-block">
    <h1>Starter Decks</h1>
    <div className="starter-row">
      <img alt="Starter deck 22 image" src="https://onepiece.gg/wp-content/uploads/sites/28/2025/03/ST22-Product-Image.png"/>
      <div className="starter-desc">
        <p>One Piece Card Game Starter Decks includes a 51-card deck and a play sheet, that you can start playing immediately. ST22 features the Whitebeard Pirates with new effects!</p>
        <h2>Release Date</h2>
        <p>September 12, 2025</p>
      </div>
    </div>
  </section>
  <section className="rounded-block">
    <h2>Future Starter Decks</h2>
    <div className="starter-row">
      <img alt="Starter deck image" src="https://tcgplayer-cdn.tcgplayer.com/product/628478_in_800x800.jpg"/>
      <div className="starter-desc">
        <p>The Learn together deck set is a starter kit that includes Three leaders to play from. Red ST21 Luffy, Green OP12 Zoro, and Yellow Blue OP11 Nami</p>
        <h2>Release Date</h2>
        <p>October 3rd, 2025</p>
      </div>
    </div>
  </section>
</main></>
    );
  }
