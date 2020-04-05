import React from 'react';
import {Link} from 'react-router-dom'
import withLoader from '../HOC/withLoader';

const CursoIdTarjeta = ({cursos, miComentario, comentario}) => {
  return (
    <>
      <div className="ed-grid m-grid-3">
        <h1 className="m-cols-3">Curso {cursos.titulo}</h1>
        <img className="m-cols-1" src={cursos.imagenCurso} alt={cursos.titulo}/>
        <p className="m-cols-2">
          Profesor: {cursos.profesor}
        </p>
        <Link to="/cursos">
          <button className="button">Atras</button>
        </Link>
      </div>
      <div>
        <h2>Escribe tu comentario</h2>
        <input type="text" placeholder="Escribe..." onChange={miComentario.bind(this)}/>
        <p>{comentario}</p>
      </div>
    </>
  )
}

export default withLoader("cursos", CursoIdTarjeta)