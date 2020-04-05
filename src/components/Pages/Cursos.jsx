import React, {Component} from 'react';
import Axios from 'axios';
import '../../styles/Loader.css'
import CursoTarjeta from '../Organisms/CursosTarjeta';
// import withLoader from '../HOC/withLoader';

class Cursos extends Component {
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

    return <CursoTarjeta  cursos={cursos} />
  }
}

export default Cursos