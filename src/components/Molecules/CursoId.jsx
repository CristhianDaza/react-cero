import React, {Component} from 'react'
import axios from 'axios'
import CursoIdTarjeta from './CursoIdTarjeta'


class CursoId extends Component {
  constructor(props){
    super(props)

    this.state = {
      cursos: []
    }
  }

  componentDidMount() {
    const URL = `http://my-json-server.typicode.com/CristhianDaza/json-db/cursos/${this.props.match.params.id}`
    axios.get(URL)
      .then(respuesta => {
        this.setState({
          cursos: respuesta.data
        })
      })
  }

  render() {
    const {cursos} = this.state
    return (
      <>
      {
        <CursoIdTarjeta cursos={cursos} />
      }
      </>
    )
  }
}




export default CursoId