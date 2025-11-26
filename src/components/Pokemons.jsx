"use client";
import React from 'react'
import { getpokemonByName, getPokemons } from '../api/userFetch';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pokemons({ addFavourite, favourites }) {

  const [pokemons, setPokemons] = useState([])

/*   const router = useRouter()
  const {id} = router.query
 */
  useEffect(() => {
    const fetchToPokemon = async () =>{ //este es el llamado a la api
    const pokemonsAux = await getPokemons()
    setPokemons(pokemonsAux)
    }
    fetchToPokemon()
  }, [])

  const onClickHandler = async (name) => {
    const pokemonDetails = await getpokemonByName(name)
    console.log(pokemonDetails)
  }
  
  return (

    
    <div className='pokemon-section'>
      <h2 className='subtitle'>All Pokemon</h2>
      <div className='pokemons-list'>
        {pokemons.map((pokemon, index) => {
          return <div className='card' key={index}>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <div>{pokemon.url}</div>
    {/*       <div>
            <Link href={{
              pathname: 'DetailPage',
              query: {
                name: pokemon.name
              }
            }}>Info</Link>
          </div> */}
            <button onClick={() => onClickHandler(pokemon.name)}>Details</button>
            </div>
        })}










{/*       {
        pokemons.map((pokemon) => {
          const isFavourite = favourites.find(f => f.id === pokemon.id);
          return (
            <div className='card' key={pokemon.id} >
          <div>
            <Link href={{
              pathname: 'DetailPage',
              query: {
                id: pokemon.id
              }
            }}><img className='pokemon-img-card' src={pokemon.img} alt={pokemon.name} /></Link>
          </div>
          <div>{pokemon.id} </div>
          <div>{pokemon.name} </div>
        <div className="types">
          {pokemon?.type?.map((t, index) => (
            <span key={index} className={`type-badge ${t.toLowerCase()}`}>
              {t}
            </span>
          ))}
      </div> 
          {!isFavourite &&(
          <button onClick={() => addFavourite(pokemon)} >Add to Favourites</button>
          )}
          </div>
        )})
      } */}
      </div>
    </div>
  )
}


