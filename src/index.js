import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Sets from "./pages/Sets";
import StarterDecks from "./pages/StarterDecks";
import Leaders from "./pages/Leaders";
import Leader from "./pages/Leader";
import ContactUs from "./pages/ContactUs";
import AddLeader from "./pages/AddLeader";
import "./index.css";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-to-play" element={<HowToPlay />} />
          <Route path="sets" element={<Sets />} />
          <Route path="starter-decks" element={<StarterDecks />} />
          <Route path="leaders" element={<Leaders />} />
          <Route path="leader" element={<Leader />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="add-leader" element={<AddLeader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
