import React from 'react';
import Curso from '../Pages/Curso'
import whitLoader from '../HOC/withLoader'

const CursoTarjeta = ({cursos}) =>  {
  return (
    <div className="ed-grid m-grid-4">
      { cursos.map(curso => <Curso 
          key={curso.id}
          id={curso.id}
          titulo={curso.titulo} 
          imagenCurso={curso.imagenCurso} 
          profesor={curso.profesor} 
          imagenProfesor={curso.imagenProfesor} 
          precio={curso.precio}/>)
      
        }
    </div>
  )
}

export default whitLoader("cursos", CursoTarjeta)