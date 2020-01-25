import React, { useState, useEffect } from 'react'
import api from './services/api'

import './css/global.css'
import './App.css'
import './components/DevItem/DevItem.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

function App() {

  const [ devs, setDevs ] = useState( [] )

  useEffect(  () => {
    loadDevs()
  }, [])

  const loadDevs = async () => {
    const { data } = await api.get( '/devs' )
    setDevs( data )
  } 

  const handleAddDev = async ( dataSubmit ) => {
    
    const { data } = await api.post( '/devs', dataSubmit )
    setDevs( [ ...devs, data ] )
  }

  return (
    <div id="app">

      <aside className="form-register">
        <DevForm onSubmit={ handleAddDev }/>
      </aside>

      <main className="main-container">
        <ul className="dev-container">

          { devs.map( dev => (
            
            <DevItem dev={dev}  key={ dev._id }/>            
          ) ) }

        </ul>
      </main>
    </div>
  )

}

export default App
