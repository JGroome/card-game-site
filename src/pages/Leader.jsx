import React from "react";
export default function Leader() {
  return (
    <><main>
<section className="leader-hero">
<div className="leader-hero-media"><img alt="Leader splash art" src="https://lipsum.app/640x800/"/></div>
<div className="leader-hero-info">
<nav className="pills">
<a className="active" href="#">Overview</a>
<a href="#">Key Cards</a>
<a href="#">Matchups</a>
<a href="#">Tips</a>
<a href="#">FAQ</a>
</nav>
<div className="pill-content">
<p>Brief description of the leader playstyle and why you might choose this leader.</p>
</div>
</div>
</section>
<section className="rounded-block">
<div className="double">
<img alt="Key card" src="https://lipsum.app/320x480/"/>
<div>
<h2>Early Game Plan</h2>
<p>Paragraph explaining how to start the game with this leader.</p>
</div>
</div>
</section>
<section className="rounded-block">
<div className="double">
<img alt="Key card" src="https://lipsum.app/320x480/"/>
<div>
<h2>Late Game Plan</h2>
<p>Paragraph explaining win conditions and closing plays.</p>
</div>
</div>
</section>
</main></>
  );
}
