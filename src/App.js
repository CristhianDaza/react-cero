import React from 'react';
import './styles/styles.scss'
import Curso from './Curso'
import cursos from './cursos'
import Banner from './Banner'
import Formulario from './Formulario'



const App = () => (
  <>
    <Banner />
    <Formulario />
    <div className="ed-grid m-grid-3">
      {
        cursos.map(curso => <Curso 
          titulo={curso.titulo} 
          imagenCurso={curso.imagenCurso} 
          profesor={curso.profesor} 
          imagenProfesor={curso.imagenProfesor} 
          precio={curso.precio}/>)
      }
    </div>
  </>
);

export default App;
