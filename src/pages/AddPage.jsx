"use client";
import React, { useState } from 'react';
import { addPokemon } from '../api/userFetch';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AddPage() {

  const router = useRouter();

  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const addPokemonClick = () => {
    if (!name || !weight || !type || !description) {
      setError(true);
      return;
    }

    setError(false);

    addPokemon({
      name,
      height,
      weight,
      type,
      description
    });

    alert("This action is visual only (not saved in real API).");

    router.back();
  };

  return (
    <div className="page">
      <h2 className="title">ADD POKEMON</h2>

      <div className="form">
        <div>
          <span>Name: </span>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <span>Height: </span>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <span>Weight: </span>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div>
          <span>Type: </span>
          <input value={type} onChange={(e) => setType(e.target.value)} />
        </div>

        <div>
          <span>Description: </span>
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </div>

      {error && <div className="error">Error: Empty fields</div>}

      <button onClick={addPokemonClick}>Add Pokemon</button>

      <button>
        <Link className="button-link" href="/">Back to Homepage</Link>
      </button>
    </div>
  );
}
