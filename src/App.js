import React from 'react';
import './styles/styles.scss'
import Curso from './components/Curso'
import cursos from './lib/cursos'
import Banner from './components/Bannerents/Banner'
import Formulario from './components/Formulario'



const App = () => (
  <>
    <Banner />
    <Formulario />
    <div className="ed-grid m-grid-3">
      {
        cursos.map(curso => <Curso 
          key={curso.id}
          id={curso.id}
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
