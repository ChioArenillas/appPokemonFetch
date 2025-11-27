"use client";

import React, { useEffect, useState } from "react";
import { getPokemons } from "../api/userFetch";
import Link from "next/link";

export default function Pokemons({ addFavourite, favourites }) {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 20;

  useEffect(() => {
    async function load() {
      const data = await getPokemons();
      setPokemons(data);
    }
    load();
  }, []);

  // Calcular qué pokemons mostrar
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const visiblePokemons = pokemons.slice(start, end);

  const totalPages = Math.ceil(pokemons.length / PAGE_SIZE);

  return (
    <div className="pokemon-section">
      <h2 className="subtitle">All Pokémon</h2>

      <div className="pokemons-list">
        {visiblePokemons.map((pokemon) => {
          const isFavourite = favourites.some((f) => f.id === pokemon.id);

          return (
            <div className="card" key={pokemon.id}>

              <Link href={`/DetailPage?id=${pokemon.id}`}>
                <img
                  className="pokemon-img-card"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
              </Link>

              <div>{pokemon.id}</div>
              <div>{pokemon.name}</div>

              {!isFavourite && (
                <button onClick={() => addFavourite(pokemon)}>
                  Add to favourites
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* PAGINACIÓN */}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ← Prev
        </button>

        <span>{page} / {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
