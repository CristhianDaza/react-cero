import React from 'react';
import '../styles/styles.scss'
import CursoTarjeta from './Organisms/CursoTarjeta'
import Formulario from './Pages/Formulario'
import CursoId from './Molecules/CursoId'
import Header from './Organisms/Header'
import Historial from './Pages/Historial'
import Usuarios from './Pages/Usuarios'
import Home from './Pages/Home';
import Error404 from './Pages/404'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'



const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={CursoId} />
      <Route path="/historial" component={Historial} />
      <Route path="/usuarios" component={()=> <Usuarios />} />
      <Route path="/cursos" component={CursoTarjeta} />
      <Route path="/formulario" component={Formulario} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default App;