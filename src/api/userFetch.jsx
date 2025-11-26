import { pokemons } from './dbPokemons'

export const getPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const response = await fetch(url)
    const pokemonsWithoutFormat = await response.json()
    const pokemonsWithFormat = formatArray(pokemonsWithoutFormat)
    return pokemonsWithFormat
    }

const formatArray = (arrayPokemons) => {
    const newArray = arrayPokemons.results.map((pokemon, index) => {
        return {
            id: index,
            name: pokemon.name,
            url: pokemon.url
        }
    })
    return newArray
}

export const getpokemonByName = async (nameParam) => {
    if(!nameParam) return undefined
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
    const url = baseURL + nameParam
    const response = await fetch(url)
    const pokemonWithoutFormat = await response.json()
    const retAux = formatPokemonObject(pokemonWithoutFormat)
    return retAux

}
export const formatPokemonObject = (pokemon) => {
    return{
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(t => {
            return t.type.name
        }),
    }
}

 /* ************************** */




export const getPokemonsById = (idParam) => {
    let pokemonAux = pokemons.find(pokemon => pokemon.id == idParam)
    return pokemonAux
}

/* export const getNextId = () => {
    if (pokemons.length === 0) return 1
    return Math.max(...pokemons.map(p => Number(p.id))) + 1
}
 */export const addPokemon = (id, name, height, weight, type, description) => {
    pokemons.push({
        id: id,
        name: name,
        height: height,
        weight: weight,
        type: type,
        description: description
    })
}

export const deletePokemonById = (idPokemon) => {
    let pokemonAux = pokemons.findIndex(p => p.id == idPokemon)
    pokemons.splice(pokemonAux, 1)
}

export const modifyName = (idPokemon, newName) => {
    pokemons.map(pokemon => {
        if (pokemon.id == idPokemon){
            pokemon.name = newName
        }
    })
}
