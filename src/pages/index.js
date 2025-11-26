"use client";
import Link from 'next/link'
import Pokemons from '../components/Pokemons';
import Favourits from '../components/Favourits';
import { useState } from 'react';


// cambiar: quitar imágenes, cambiar por URL, dejar solo name y url en el menu

export default function Home() {
   const [favourites, setFavourites] = useState([])

  const addFavourite = (pokemon) => {
    if (!favourites.find(f => f.id === pokemon.id)) {
      setFavourites([...favourites, pokemon])
    }
  }

  const deleteFavourite = (pokemon) => {
    setFavourites(favourites.filter(f => f.id !== pokemon.id));
  };

  return (
     <div className='page'>
      <h1 className='title'>POKEMON</h1>
      <div className='menu'>

        <button>
          <Link className='button-link' href={'/AddPage'}>ADD POKEMON</Link> 
        </button>
        <button>
          <Link className='button-link' href={'/ContactPage'}>CONTACT</Link> 
        </button>
      </div>
      <div>
        <Pokemons addFavourite={addFavourite} favourites={favourites}  />
      </div>
      <div>
         <Favourits favourites={favourites} deleteFavourite={deleteFavourite} />
       </div>
    </div>
  );
}
