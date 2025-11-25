import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { addPokemon, getNextId } from './api/userFetch'

export default function AddPage() {

  const router = useRouter()

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const [error, setError] = useState(false)
  useEffect(() => {
    const nextId = getNextId()
    setId(nextId)
  }, [])

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const heightHandler = (e) => {
    setHeight(e.target.value)
  }
  const weightHandler = (e) => {
    setWeight(e.target.value)
  }
  const typeHandler = (e) => {
    setType(e.target.value)
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const addPokemonClick = () => {
    if(
      id === '' ||
      name === '' ||
      weight === '' ||
      type === '' ||
      description === ''
    ){
      setError(true)
      return
    }
    setError(false)
    addPokemon (id, name, height, weight, type, description)
    router.back()
  }

  return (
    <div className='page'>
      <div>
        <h2 className='title'>ADD POKEMON</h2>
      </div>
      <div className='form'>
        <div>
          <span>Id: </span>
          <input type="number" value={id} disabled />
        </div>
        <div>
          <span>Name: </span>
          <input type="text" value={name} onChange={nameHandler} />
        </div>
        <div>
          <span>Height: </span>
          <input type="number" value={height} onChange={heightHandler}/>
        </div>
        <div>
          <span>Weight: </span>
          <input type="number" value={weight} onChange={weightHandler}/>
        </div>
        <div>
          <span>Type: </span>
          <input type="text" value={type} onChange={typeHandler} />
        </div>
        <div>
          <span>Description: </span>
          <input type="text" value={description} onChange={descriptionHandler}/>
        </div>
      </div>
      {
        error && (
          <div className='error'>
            <span>Error: empty fields</span>

          </div>
        )
      }
      <div>
        <button onClick={addPokemonClick}>Add Pokemon</button>
      </div>
      <div>
        <button>
        <Link className='button-link' href={{
            pathname:'/'
            }}>Back to Homepage</Link>
        </button>
      </div>
    </div>
  )
}
