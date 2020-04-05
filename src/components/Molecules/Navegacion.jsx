import React from 'react'
import {NavLink} from 'react-router-dom'
import CartCounter from '../Atoms/CartCounter'

const Navegacion = () => (
  <nav className="main-menu" id="main-menu">
    <ul className="ed-menu l-horizontal">
      <li><NavLink exact to="/" >Inicio</NavLink></li>
      <li><NavLink to="/cursos" >Cursos</NavLink></li>
      <li><NavLink to="/formulario" >Formulario</NavLink></li>
      <li><NavLink to="/historial" >Historial</NavLink></li>
      <li><NavLink to="/usuarios" >Usuarios</NavLink></li>
      <CartCounter />
    </ul>
  </nav>
)

export default Navegacion