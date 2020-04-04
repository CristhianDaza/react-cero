import React from 'react'
import {NavLink} from 'react-router-dom'

const Navegacion = () => (
  <nav className="main-menu" id="main-menu">
    <ul className="ed-menu l-horizontal">
      <li><NavLink exact to="/" >Inicio</NavLink></li>
      <li><NavLink to="/cursos" >Cursos</NavLink></li>
      <li><NavLink to="/formulario" >Formulario</NavLink></li>
      <li><NavLink to="/historial" >Historial</NavLink></li>
    </ul>
  </nav>
)

export default Navegacion