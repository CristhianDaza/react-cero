import React, {Component} from 'react';
import Curso from '../Pages/Curso'
import Axios from 'axios';
import '../../styles/Loader.css'

class CursoTarjeta extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cursos: []
    }
  }

  componentDidMount() {
    const URL = 'http://my-json-server.typicode.com/CristhianDaza/json-db/cursos'
    Axios.get(URL)
      .then(respuesta => {
        this.setState({
          cursos: respuesta.data
        })
      })
  }

  render(){
    const {cursos} = this.state

    return (
      <div className="ed-grid m-grid-4">
        { cursos.length === 0 
          ? <div className="s-center">
              <div class="lds-hourglass"></div>
              <h1 className="t3">Cargando ...</h1>
            </div>
          
          : 
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
    )
  }
}

export default CursoTarjeta