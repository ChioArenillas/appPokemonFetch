"use client";
import React from 'react'
import Link from 'next/link'

export default function Favourits({ favourites, deleteFavourite }) {

  return (
    <div className='pokemon-section'>
      <div>
        <h2 className='subtitle'>Favourite Pokemon</h2>
      </div>
      <div className='pokemons-list'>
        
          {favourites.length === 0 && (
            <span className='card'>Not favourite Pokemon yet. Add some.</span>
          )}
          {favourites.length > 0 && favourites.map((pokemon) => {
            return <div className='card' key={pokemon.id} >
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
          <button onClick={() => deleteFavourite(pokemon)} >Remove from Favourites</button>
          </div>
        })
      }
      </div>
    </div>
  )}
