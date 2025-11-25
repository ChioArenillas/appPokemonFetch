"use client";
import React, { useEffect, useState } from 'react';
import { getPokemonsById } from '../pages/api/userFetch';

export default function PokemonDetail({ pokemonId }) {

  const [pokemonLocal, setPokemonLocal] = useState({})

  useEffect(() => {
    let pokemonAux = getPokemonsById(pokemonId)
    setPokemonLocal(pokemonAux)
  }, [])

  return (
    <div className='details'>
      <img className='pokemon-img-card' src={pokemonLocal?.img} alt={pokemonLocal?.name} />
      <div>
        <div>
          <span className='detail-title'>Height: </span>
          <span>{pokemonLocal?.height}</span>
        </div>
        <div>
          <span className='detail-title'>Weight: </span>
          <span>{pokemonLocal?.weight}</span>
        </div>
      </div>
      <div>
        <span className='detail-title'>Type: </span>
        <div className="types">
          {pokemonLocal?.type?.map((t, index) => (
            <span key={index} className={`type-badge ${t.toLowerCase()}`}>
              {t}
            </span>
          ))}
        </div>
      </div>        
      <div>
        <span className='detail-title'>Description: </span>
        <span>{pokemonLocal?.description}</span>
      </div>
    </div>
  )
}
