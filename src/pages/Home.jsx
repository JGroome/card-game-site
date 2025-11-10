import React from "react";
export default function Home() {
  return (
<><main>
    <section className="hero hero--slider">
        <img alt="Sliding banner image" src="/images/newset.png"/>
        <div className="hero-cta">
            <p>New set "Premium Booster 2" (prb-02) releasing October 3rd</p>
        </div>
    </section>
    <section className="announcement">
        <p>Top Leaders</p>
    </section>
    <section className="two-col">
    <div className="col">
        <h2>ENGLISH</h2>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP12-020.webp"/></div>
            <div className="desc">
                <h3>Green - Zoro</h3>
                <p>Green Zoro is a unique psudo board control leader centered around sword atribute characters.</p>
                <p>His main strategy is to use characters like  Tashigi(OP12-031) to rest characters and activate his leader skill to attack into a character and then do damage to the opponents leader.</p>
            </div>
        </div>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP11-040.webp"/></div>
            <div className="desc">
                <h3>Blue Purple - Luffy</h3>
                <p>Blue Purple Luffy is a deck with high late-game potential built around straw-hat crew type characters</p>
                <p>His leader skill alllows you to constantly add cards to your hand and stack the top of your deck late once at 8 Don!! cards. Allowing for poweful synergy with Sanji(OP06-119)</p>
            </div>
        </div>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP12-001.webp"/></div>
            <div className="desc">
                <h3>Red - Silvers Rayleigh</h3>
                <p>The Silvers Rayleigh strategy is all about speed. Capped at cards costing 4 or less, this deck exploits its leader's unique ability to turn a field of low-cost characters into high-powered threats, creating devastating attack waves out of nowhere.</p>
            </div>
        </div>
    </div>
    <div className="divider" role="presentation"></div>
    <div className="col">
        <h2>JAPANESE</h2>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP13-079.webp"/></div>
            <div className="desc">
                <h3>Black - Imu</h3>
                <p>Imu is a deck thrives on recovery and board control.</p>
                <p>They are a leader that overwhelms opponents with relentless waves of threats and cheats out powerful characters to secure board control</p>
            </div>
        </div>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP13-002.webp"/></div>
            <div className="desc">
                <h3>Red Blue - Ace</h3>
                <p>Ace is a leader that has access to some of the strongest Whitebeard Pirates support available in both colors.</p>
                <p>His ability allows you comfortably run cards without counters, thanks to his built-in defense. </p>
            </div>
        </div>
        <div className="card-row">
            <div className="thumb"><img alt="" src="https://static.dotgg.gg/onepiece/card/OP13-004.webp"/></div>
            <div className="desc">
                <h3>Red Black - Sabo</h3>
                <p>Red Black Sabo is a leader centered around the new revolutionary army type cards with built in protection thanks to their increased cost.</p>
                <p>This deck relies heavily on 8-cost Characters to enable its strategy, so we run multiple mid-game cards that can give themselves a cost boost, giving you access to your Leader's Power boost ability on earlier turns.</p>
            </div>
            </div>
        </div>
    </section>
</main></>
  );
}
