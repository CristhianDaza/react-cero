import React, {Component} from 'react'
import axios from 'axios'
import '../../styles/Loader.css'
import UsuarioTarjeta from '../Organisms/UsuariosTarjeta'

class Usuarios extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuarios: []
    }
  }

  componentDidMount() {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    axios.get(URL)
      .then(res => {
        this.setState({
          usuarios: res.data
        })
      })
  }

  render() {
    const {usuarios} = this.state

    return <UsuarioTarjeta usuarios={usuarios} />
  }
}

export default Usuarios