import React, { useState } from 'react'
import Detail from '../components/Detail'
import { useRouter } from 'next/router'
import Link from 'next/link'
//import { getPokemonsById, deletePokemonById   } from './api/userFetch'
import Edit from '../components/Edit'

export default function DetailPage() {




/*   const router = useRouter()
  const { id } = router.query

  const [isEditing, setIsEditing] = useState(false)

  const deletePokemon = () => {
    deletePokemonById(id)
    router.back()
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }
  const pokemon = getPokemonsById(id)
  
 */  return (

  
    <div className='page'>
      <div>
  {/*       <h2 className='title'>{pokemon?.name}</h2>
      </div>
      <div>
        {
          !isEditing ? (
            <Detail pokemonId={id} />
          ) : (
          <Edit pokemonId={id}/>)
        }
      </div>
    <div>
      {!isEditing && (
        <button onClick={toggleEdit}>Edit Pokemon</button>
      )}
    </div>
      <div>
        {!isEditing &&
          <button  onClick={deletePokemon}>Delete Pokemon</button>
        }
          </div>  
      <div>
        <button>
        <Link className='button-link' href={{
            pathname:'/'
            }}>Back to Homepage</Link>
        </button> */}
      </div>
    </div>
  )
}
