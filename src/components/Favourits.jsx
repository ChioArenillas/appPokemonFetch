"use client";

import React, { useEffect, useState } from "react";
import { getPokemonById } from "../api/userFetch";
import Link from "next/link";

export default function Favourits({ favourites, deleteFavourite }) {
  const [fullFavs, setFullFavs] = useState([]);

  useEffect(() => {
    async function load() {
      if (favourites.length === 0) {
        setFullFavs([]);
        return;
      }

      const promises = favourites.map((f) => getPokemonById(f.id));
      const results = await Promise.all(promises);
      setFullFavs(results);
    }

    load();
  }, [favourites]);

  return (
    <div className="pokemon-section">
      <h2 className="subtitle">Favourites</h2>

      <div className="pokemons-list">
        
        {/* 🔥 Mostrar card de vacío */}
        {fullFavs.length === 0 && (
          <div className="card empty-card">
            <p className="empty-text">Not favourite pokemons yet. Add some.</p>
          </div>
        )}

        {fullFavs.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <Link href={`/DetailPage?id=${pokemon.id}`}>
              <img
                className="pokemon-img-card"
                src={pokemon.img}
                alt={pokemon.name}
              />
            </Link>

            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>

            <div className="types">
              {pokemon.types.map((t, index) => (
                <span key={index} className={`type-badge ${t}`}>
                  {t}
                </span>
              ))}
            </div>

            <button onClick={() => deleteFavourite(pokemon)}>
              Remove from favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
