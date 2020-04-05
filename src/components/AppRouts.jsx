import React from 'react'
import Cursos from './Pages/Cursos'
import Formulario from './Pages/Formulario'
import CursoId from './Molecules/CursoId'
import Header from './Organisms/Header'
import Historial from './Pages/Historial'
import Usuarios from './Pages/Usuarios'
import Home from './Pages/Home';
import Error404 from './Pages/404'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRouts = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={CursoId} />
      <Route path="/historial" component={Historial} />
      <Route path="/usuarios" component={()=> <Usuarios />} />
      <Route path="/cursos" component={Cursos} />
      <Route path="/formulario" component={Formulario} />
      <Route component={Error404} />
    </Switch>
  </Router>
)

export default AppRouts
