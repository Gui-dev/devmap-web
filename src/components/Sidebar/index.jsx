import React from 'react'

import './Sidebar.css'

function Sidebar() {

  return (
    <aside className="form-register">
      <h1 className="form-register_title">Cadastrar</h1>

      <form className="form-register_form">
        <div className="input-block">
          <label htmlFor="github_username" className="form-register_label">Usuário do Github</label>
          <input type="text" name="github_username" id="github_username" className="form-register_input" required/>
        </div>

        <div className="input-block">
          <label htmlFor="techs" className="form-register_label">Tecnologias</label>
          <input type="text" name="techs" id="techs" className="form-register_input" required/>
        </div>

        <div className="input-group">
          
          <div className="input-block">
            <label htmlFor="latitude" className="form-register_label">Latitude</label>
            <input type="text" name="latitude" id="latitude" className="form-register_input" required/>
          </div>
            
          <div className="input-block">
            <label htmlFor="longitude" className="form-register_label">Longitude</label>
            <input type="text" name="longitude" id="longitude" className="form-register_input" required/>
          </div>

        </div>

        <button type="submit" className="form-register_button">Salvar</button>

      </form>
    </aside>
  )
}

export default Sidebar