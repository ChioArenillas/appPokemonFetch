"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPokemonById } from "../api/userFetch";
import Link from "next/link";
import PokemonDetail from "../components/Detail";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      const data = await getPokemonById(id);
      setPokemon(data);

      // Traer descripción
      try {
        const speciesRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );
        const speciesData = await speciesRes.json();
        const flavorText = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        )?.flavor_text;
        setDescription(flavorText || "No description available.");
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="page">
      {/* Pasamos todo al componente */}
      <PokemonDetail pokemon={pokemon} description={description} />

      <button style={{ marginTop: "20px" }}>
        <Link href="/" className="button-link">
          Back to Home
        </Link>
      </button>
    </div>
  );
}
