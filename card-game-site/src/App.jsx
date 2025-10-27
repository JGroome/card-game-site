import { Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Part7ContactUsHtml from './pages/Part7ContactUsHtml.jsx';
import Part7HowToPlayHtml from './pages/Part7HowToPlayHtml.jsx';
import Part7IndexHtml from './pages/Part7IndexHtml.jsx';
import Part7LeaderHtml from './pages/Part7LeaderHtml.jsx';
import Part7LeadersHtml from './pages/Part7LeadersHtml.jsx';
import Part7SetsHtml from './pages/Part7SetsHtml.jsx';
import Part7StarterDecksHtml from './pages/Part7StarterDecksHtml.jsx';

export default function App() {
  return (
    <div className="site-wrap">
      <Header />
      <Routes>
        <Route path="/part7\contact-us.html" element={<Part7ContactUsHtml />} />
        <Route path="/part7\how-to-play.html" element={<Part7HowToPlayHtml />} />
        <Route path="/part7\index.html" element={<Part7IndexHtml />} />
        <Route path="/part7\leader.html" element={<Part7LeaderHtml />} />
        <Route path="/part7\leaders.html" element={<Part7LeadersHtml />} />
        <Route path="/part7\sets.html" element={<Part7SetsHtml />} />
        <Route path="/part7\starter-decks.html" element={<Part7StarterDecksHtml />} />
      </Routes>
      <Footer />
    </div>
  );
}
