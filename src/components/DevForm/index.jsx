import React, { useState, useEffect } from 'react'

import './DevForm.css'

function DevForm( { onSubmit } ) {

  const [ github_username, setGituhubUsername ] = useState( '' )
  const [ techs, setTechs ] = useState( '' )
  const [ latitude, setLatitude ] = useState( '' )
  const [ longitude, setLongitude ] = useState( '' )

  useEffect( () => {
    navigator.geolocation.getCurrentPosition( 
      position => {
        const { latitude, longitude } = position.coords
        setLatitude( latitude )
        setLongitude( longitude )
      },
      error => {
        console.log( error )
      }, {
        timeout: 30000
      } 
    )
  }, [] )

  const handleSubmit = async ( e ) => {
    e.preventDefault()
    await onSubmit( {
      github_username,
      techs,
      latitude,
      longitude
    } )

    setGituhubUsername( '' )
    setTechs( '' )
  }

  return (

    <>
      <h1 className="form-register_title">Cadastrar</h1>

      <form className="form-register_form" onSubmit={ handleSubmit }>
        <div className="input-block">
          <label htmlFor="github_username" className="form-register_label">Usuário do Github</label>
          <input type="text" name="github_username" id="github_username" 
            className="form-register_input" 
            required
            value={ github_username }
            onChange={ e => setGituhubUsername( e.target.value ) }
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs" className="form-register_label">Tecnologias</label>
          <input type="text" name="techs" id="techs" 
            className="form-register_input" 
            required
            value={ techs }
            onChange={ e => setTechs( e.target.value ) }
          />
        </div>

        <div className="input-group">
          
          <div className="input-block">
            <label htmlFor="latitude" className="form-register_label">Latitude</label>
            <input type="number" name="latitude" id="latitude" 
              className="form-register_input" 
              required
              value={ latitude }
              onChange={ e => setLatitude( e.target.value ) }
            />
          </div>
            
          <div className="input-block">
            <label htmlFor="longitude" className="form-register_label">Longitude</label>
            <input type="number" name="longitude" id="longitude" 
              className="form-register_input" 
              required
              value={ longitude }
              onChange={ e => setLongitude( e.target.value ) }
            />
          </div>

        </div>

        <button type="submit" className="form-register_button">Salvar</button>

      </form>
    </>
  )
}

export default DevForm