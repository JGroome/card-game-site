import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { API_BASE } from "../config";


const API_BASE =
  (import.meta && import.meta.env && import.meta.env.VITE_API_BASE) ||
  process.env.REACT_APP_API_BASE ||
  "https://card-game-site-api.onrender.com/";

export default function Leaders() {
  const [leaders, setLeaders] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("All");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setStatus("loading");
        const res = await fetch(`${API_BASE}/api/leaders`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setLeaders(Array.isArray(data) ? data : []);
          setStatus("success");
        }
      } catch (e) {
        if (!cancelled) {
          setError(String(e));
          setStatus("error");
        }
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leaders.filter((l) => {
      const matchesText =
        !q ||
        l.name.toLowerCase().includes(q) ||
        (l.playstyle || "").toLowerCase().includes(q);
      const matchesColor = color === "All" || (l.color || "").toLowerCase().includes(color.toLowerCase());
      return matchesText && matchesColor;
    });
  }, [leaders, query, color]);

  <Link className="add-button" to="/add-leader">
  + Add New Leader
  </Link>

  return (
    <main className="leaders-page">
      <header className="leaders-header">
        <h1>Leaders</h1>

        <div className="leaders-controls">
          <input
            className="leaders-search"
            type="search"
            placeholder="Search by name or playstyle…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search leaders"
          />
          <select
            className="leaders-filter"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            aria-label="Filter by color"
          >
            <option>All</option>
            <option>Green</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Purple</option>
            <option>Blue / Purple</option>
            <option>Black</option>
            <option>Yellow</option>
          </select>
        </div>
      </header>

      {status === "loading" && (
        <p className="leaders-status">Loading leaders…</p>
      )}
      {status === "error" && (
        <p className="leaders-status error">
          Couldn’t load leaders.
        </p>
      )}

      {status === "success" && (
        <section className="leaders-grid">
          {filtered.map((l) => (
            <article className="leader-card" key={l.name}>
              <div className="leader-img-wrap">
                <img
                  src={`${API_BASE}/${l.image}`}
                  alt={l.name}
                  loading="lazy"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{l.name}</h3>
                <p className="leader-meta"><strong>Color:</strong> {l.color}</p>
                <p className="leader-meta">
                  <strong>Playstyle:</strong> {l.playstyle}
                </p>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="leaders-status">No leaders match your filters.</p>
          )}
        </section>
        
      )}
    </main>
  );
}
