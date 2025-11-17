import React, { useState } from "react";
import { API_BASE } from "../config";

export default function AddLeader({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    color: "",
    playstyle: ""
  });

  const [status, setStatus] = useState("");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (form.name.trim().length < 2)
      return "Name must be at least 2 characters.";
    if (!form.image.startsWith("http"))
      return "Image must be a URL starting with http or https.";
    if (form.color.trim().length < 3)
      return "Color must be at least 3 characters.";
    if (form.playstyle.trim().length < 3)
      return "Playstyle must be at least 3 characters.";

    return null;
  };

  // Submit form
  const submit = async (e) => {
    e.preventDefault();
    setStatus("");

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/leaders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const msg = await res.json();
        setStatus(msg.error || "Unable to add leader.");
        return;
      }

      const saved = await res.json();

      if (onAdd) {
        onAdd(saved);
      }

      setStatus("success");
      setForm({
        name: "",
        image: "",
        color: "",
        playstyle: ""
      });

    } catch (err) {
      setStatus("Server unreachable. Check API URL.");
    }
  };

  return (
    <main className="add-leader-page">
      <h1>Add a New Leader</h1>

      <form className="leader-form" onSubmit={submit}>
        <label>
          Leader Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Roronoa Zoro"
            required
          />
        </label>

        <label>
          Image URL
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={update}
            placeholder="https://example.com/zoro.png"
            required
          />
        </label>

        <label>
          Color
          <input
            type="text"
            name="color"
            value={form.color}
            onChange={update}
            placeholder="Green"
            required
          />
        </label>

        <label>
          Playstyle
          <textarea
            name="playstyle"
            value={form.playstyle}
            onChange={update}
            placeholder="Aggro, Board Control"
            rows="3"
            required
          />
        </label>

        <button type="submit">Add Leader</button>

        {status === "success" && (
          <p className="status success">✓ Leader successfully added!</p>
        )}

        {status !== "" && status !== "success" && (
          <p className="status error">{status}</p>
        )}
      </form>
    </main>
  );
}
