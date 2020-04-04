import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/styles.scss'
import Curso from './Pages/Curso'
import cursos from '../lib/cursos'
import Formulario from './Pages/Formulario'
import CursoId from './Molecules/CursoId'
import Header from './Organisms/Header'
import Historial from './Pages/Historial'
import Home from './Pages/Home';



const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
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