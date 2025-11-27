"use client";
import React, { useState } from "react";
import { modifyName } from "../api/userFetch";

export default function Edit({ pokemonId }) {
  const [newName, setNewName] = useState("");
  const [confirmNewName, setConfirmNewName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const changeName = () => {
    if (newName !== confirmNewName) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);

    modifyName(pokemonId, newName);
    alert("This change is visual only (not saved in real API).");
  };

  return (
    <div>
      <h2 className="subtitle">Edit Pokemon Name</h2>

      <div className="form">
        <div>
          <label>New Name:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div>
          <label>Confirm New Name:</label>
          <input
            type="text"
            value={confirmNewName}
            onChange={(e) => setConfirmNewName(e.target.value)}
          />
        </div>
      </div>

      {error && <div className="error">Names do not match</div>}
      {success && <div className="success">Name changed (visually)</div>}

      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
