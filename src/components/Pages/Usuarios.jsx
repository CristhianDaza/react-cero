import React, {Component} from 'react'
import Usuario from '../Molecules/Usuario'
import axios from 'axios'

class Usuarios extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuarios: []
    }
  }

  // componentDidMount() {
  //   const URL = 'https://jsonplaceholder.typicode.com/users'
  //   fetch(URL, {method: 'get'})
  //     .then(respuesta => respuesta.json())
  //     .then(data =>{
  //       this.setState({
  //         usuarios: data
  //       })
  //     })
  // }

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

    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {usuarios.map(usuario => (
            <Usuario 
              key={usuario.id}
              name={usuario.name}
              username={usuario.username}
              email={usuario.email}
            />
            ) )}
        </div>
      </div>
    )
  }
}

export default Usuarios