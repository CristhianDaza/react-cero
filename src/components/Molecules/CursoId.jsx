import React from 'react'
import cursos from '../../lib/cursos'
import {Link} from 'react-router-dom'

const CursoId = ({ match }) => {
  const CursoActual = cursos.filter(curso => curso.id === parseInt(match.params.id))[0]
  return (
    CursoActual ? (
      <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">Curso {CursoActual.titulo}</h1>
        <img className="m-cols-1" src={CursoActual.imagenCurso} alt={CursoActual.titulo}/>
        <p className="m-cols-2">
          Profesor: {CursoActual.profesor}
        </p>
        <Link to="/cursos">
          <button className="button">Atras</button>
        </Link>
      </div>
    )
    : (
      <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">Curso No encontrado</h1>
        <img className="m-cols-1" src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt="Curso no encontrado"/>
        <p className="m-cols-2">
          Sin información
        </p>
        <Link to="/cursos">
          <button className="button">Atras</button>
        </Link>
      </div>
    )
  )
}

export default CursoId