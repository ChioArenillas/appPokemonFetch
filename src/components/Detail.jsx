"use client";
import React from "react";

export default function PokemonDetail({ pokemon, description }) {
  if (!pokemon) return null; // Seguridad extra

  return (

    <div>
      <h2 className="title">{pokemon.name.toUpperCase()}</h2>
    <div className="details">
      <img className="pokemon-img-card" src={pokemon.img} alt={pokemon.name} />

      <div>
        <b>Height:</b> {pokemon.height / 10} m
      </div>
      <div>
        <b>Weight:</b> {pokemon.weight / 10} kg
      </div>

      <div>
        <b>Types:</b>
        <div className="types">
          {pokemon.types?.map((t) => (
            <span key={t} className={`type-badge ${t}`}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <b>Description:</b>
        <p>{description || "No description available."}</p>
      </div>

    </div>
    </div>
  );
}
