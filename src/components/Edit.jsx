"use client";
import React, { useState } from 'react'
import { modifyName } from '../pages/api/userFetch'

export default function Edit({ pokemonId }) {




/*     
    const [newName, setNewName] = useState('')
    const [confirmNewName, setConfirmNewName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChangeNewNameHandle = (e) => {
        setNewName(e.target.value)
    }
    const onChangeConfirmNewNameHandle = (e) => {
        setConfirmNewName(e.target.value)
    }
    const changeName = () => {
        if (newName === confirmNewName) {
            modifyName(pokemonId, newName)
            setError(false)
            setSuccess(true)
            setNewName('')
            setConfirmNewName('')
        } else {
            setError(true)
            setSuccess(false)
        }
    }
 */
    return (
        <div>
            <div>
                <h2 className='subtitle'>Edit Pokemon Name</h2>
            </div>
            <div className='form'>
                <div>
                    <label>New Name: </label>
                    <input type="text" value={newName} onChange={onChangeNewNameHandle} />
                </div>
                <div>
                    <label>Confirm New Name: </label>
                    <input type="text" value={confirmNewName} onChange={onChangeConfirmNewNameHandle} />
                </div>
            </div>
            <div className='change'>
                <div>
                    {
                        error ?
                            <div>
                                <span className='error'>Error: Names do not mach</span>
                            </div>
                            :
                            null
                    }
                    {
                        success ?
                            <div>
                                <span className='success'>Name changed</span>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <button onClick={changeName}>Change Name</button>
                </div>
            </div>
        </div>
    )
}
