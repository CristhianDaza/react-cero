import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const MainMenu = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Link to="/">
          <img src="https://ux.ed.team/img/edteam-ux-logo.svg" alt="Logo" className="main-logo"/>
        </Link>
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
          <ul className="ed-menu l-horizontal">
            <li><NavLink exact to="/" >Inicio</NavLink></li>
            <li><NavLink to="/cursos" >Cursos</NavLink></li>
            <li><NavLink to="/formulario" >Formulario</NavLink></li>
            <li><NavLink to="/historial" >Historial</NavLink></li>
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
      </div>
    </div>
  </header>
)

export default MainMenu