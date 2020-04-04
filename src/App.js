import React from 'react';
import './styles/styles.scss'
import Curso from './components/Curso'
import cursos from './lib/cursos'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import CursoId from './components/CursoId'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Historial from './components/Historial'



const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={CursoId} />
      <Route path="/historial" component={Historial} />
      <Route path="/cursos" component={
          ()=> <div className="ed-grid m-grid-4">
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
        } />
        <Route path="/formulario" component={()=> <Formulario />} />
        <Route component={()=> (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )} />
    </Switch>
  </Router>
);

export default App;