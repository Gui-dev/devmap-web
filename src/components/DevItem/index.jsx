import React from 'react'

import './DevItem.css'

function DevItem( { dev } ) {

  return (
    
    <li className="dev-item">
      <header className="dev-item_header">
        <img src={dev.avatar_url} alt={dev.name} className="dev-item_img"/>
        <div className="dev-item_info">
          <h1 className="dev-item_name">{ dev.name }</h1>
          <span className="dev-item_techs">
            { dev.techs.join( ', ' ) }
          </span>
        </div>
      </header>

      <p className="dev-item_bio">{ dev.bio }</p>
      <a href={`https://github.com/${dev.github_username}`} 
        className="dev-item_link"
        rel="noopener noreferrer"
        target="_blank"
      >
        Acessar Perfil
      </a>
    </li>
  )
}

export default DevItem