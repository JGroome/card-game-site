import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE =
  (import.meta && import.meta.env && import.meta.env.VITE_API_BASE) ||
  process.env.REACT_APP_API_BASE ||
  "https://card-game-site-api.onrender.com";

export default function Leaders() {
  const [leaders, setLeaders] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("All");

  const [editingName, setEditingName] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    image: "",
    color: "",
    playstyle: ""
  });
  const [actionMessage, setActionMessage] = useState("");

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

      const matchesColor =
        color === "All" ||
        (l.color || "").toLowerCase().includes(color.toLowerCase());

      return matchesText && matchesColor;
    });
  }, [leaders, query, color]);

  const validateLeader = (data) => {
  if (!data.name || data.name.trim().length < 2)
    return "Name must be at least 2 characters.";

    if (data.image && !/^https?:\/\/.+|^images\/.+$/.test(data.image)) {
    return "Image must be a full URL or a local path like images/file.png";
  }

  if (!data.color || data.color.trim().length < 3)
    return "Color must be at least 3 characters.";

  if (!data.playstyle || data.playstyle.trim().length < 3)
    return "Playstyle must be at least 3 characters.";

  return null;
  };

  const startEdit = (leader) => {
    setEditingName(leader.name);
    setEditForm({
      name: leader.name,
      image: `${API_BASE}/${leader.image}`.startsWith("http")
        ? leader.image
        : leader.image,
      color: leader.color || "",
      playstyle: leader.playstyle || ""
    });
    setActionMessage("");
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    setActionMessage("");

    const err = validateLeader(editForm);
    if (err) {
      setActionMessage(err);
      return;
    }

    try {
      const res = await fetch(
        `${API_BASE}/api/leaders/${encodeURIComponent(editingName)}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editForm)
        }
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setActionMessage(body.error || "Failed to update leader.");
        return;
      }

      const updated = await res.json();

      setLeaders((prev) =>
        prev.map((l) =>
          l.name.toLowerCase() === editingName.toLowerCase() ? updated : l
        )
      );

      setActionMessage("✓ Leader updated successfully.");
      setEditingName(null);
    } catch (err) {
      setActionMessage("Server unreachable. Could not update leader.");
    }
  };

  const deleteLeader = async (name) => {
    setActionMessage("");

    const ok = window.confirm(`Delete ${name}? This cannot be undone.`);
    if (!ok) return;

    try {
      const res = await fetch(
        `${API_BASE}/api/leaders/${encodeURIComponent(name)}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setActionMessage(body.error || "Failed to delete leader.");
        return;
      }

      setLeaders((prev) =>
        prev.filter((l) => l.name.toLowerCase() !== name.toLowerCase())
      );

      if (editingName && editingName.toLowerCase() === name.toLowerCase()) {
        setEditingName(null);
      }

      setActionMessage("✓ Leader deleted successfully.");
    } catch (err) {
      setActionMessage("Server unreachable. Could not delete leader.");
    }
  };

  return (
    <main className="leaders-page">
      <header className="leaders-header">
        <h1>Leaders</h1>

        <div className="leaders-header-actions">
          <Link className="add-button" to="/add-leader">
            + Add New Leader
          </Link>
        </div>

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

      {editingName && (
        <section className="leader-edit-panel">
          <h2>Edit Leader: {editingName}</h2>
          <form className="leader-edit-form" onSubmit={submitEdit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                required
              />
            </label>

            <label>
              Image URL
              <input
                type="url"
                name="image"
                value={editForm.image}
                onChange={handleEditChange}
                required
              />
            </label>

            <label>
              Color
              <input
                type="text"
                name="color"
                value={editForm.color}
                onChange={handleEditChange}
                required
              />
            </label>

            <label>
              Playstyle
              <textarea
                name="playstyle"
                rows="3"
                value={editForm.playstyle}
                onChange={handleEditChange}
                required
              />
            </label>

            <div className="leader-edit-actions">
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setEditingName(null);
                  setActionMessage("");
                }}
              >
                Cancel
              </button>
            </div>

            {actionMessage && (
              <p
                className={
                  actionMessage.startsWith("✓")
                    ? "action-message success"
                    : "action-message error"
                }
              >
                {actionMessage}
              </p>
            )}
          </form>
        </section>
      )}

      {status === "loading" && (
        <p className="leaders-status">Loading leaders…</p>
      )}

      {status === "error" && (
        <p className="leaders-status error">
          Couldn’t load leaders. {error && <span>{error}</span>}
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
                <p className="leader-meta">
                  <strong>Color:</strong> {l.color}
                </p>
                <p className="leader-meta">
                  <strong>Playstyle:</strong> {l.playstyle}
                </p>
              </div>
              <div className="leader-card-actions">
                <button
                  className="leader-btn edit"
                  onClick={() => startEdit(l)}
                >
                  Edit
                </button>
                <button
                  className="leader-btn delete"
                  onClick={() => deleteLeader(l.name)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="leaders-status">No leaders match your filters.</p>
          )}
        </section>
      )}

      {actionMessage && !editingName && (
        <p
          className={
            actionMessage.startsWith("✓")
              ? "action-message success"
              : "action-message error"
          }
        >
          {actionMessage}
        </p>
      )}
    </main>
  );
}
