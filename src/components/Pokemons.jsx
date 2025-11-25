"use client";
import React from 'react'
import { getPokemons } from '../pages/api/userFectch';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pokemons({ addFavourite, favourites }) {

  const [pokemons, setPokemons] = useState([])

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    let pokemonsAux = getPokemons()
    setPokemons(pokemonsAux)
  }, [])

  
  return (
    <div className='pokemon-section'>
      <h2 className='subtitle'>All Pokemon</h2>
      <div className='pokemons-list'>
      {
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
      }
      </div>
    </div>
  )
}


