// --- SOLO POKEAPI REAL ---
// No tocamos ni añadimos, ni editamos Pokémon reales.

export const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const response = await fetch(url);
  const { results } = await response.json();

  return results.map((pokemon) => {
    const id = pokemon.url.split("/").filter(Boolean).pop();
    return {
      id: Number(id),
      name: pokemon.name,
    };
  });
};

export const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);

  if (!response.ok) return null;

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((t) => t.type.name),
    img: data.sprites.other["official-artwork"].front_default,
  };
};

// --- FUNCIONES "VISUALES" (NO AFECTAN A LA API REAL) ---

export const addPokemon = (pokemon) => {
  // No se guarda en ninguna base real
  console.log("ADD VISUAL:", pokemon);
};

export const modifyName = (id, newName) => {
  console.log(`MODIFY VISUAL: id=${id}, newName=${newName}`);
};

export const deletePokemonById = (id) => {
  console.log(`DELETE VISUAL: id=${id}`);
};
