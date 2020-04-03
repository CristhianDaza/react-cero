import React from 'react'

class Formulario extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      nombre: "",
      correo: "",
      fecha: new Date()
    }
    this.cambiarNombre = this.cambiarNombre.bind(this)
    this.cambiarCorreo = this.cambiarCorreo.bind(this)
    this.cambiarFecha = this.cambiarFecha.bind(this)
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }

  cambiarCorreo(e) {
    this.setState({
      correo: e.target.value
    })
  }

  cambiarFecha(){
    this.setState({
      fecha: new Date()
    })
  }

  render(){
    return (
      <div className="ed-grid">
        <h1 className="center">Formulario</h1>
        <h3>Fecha Actual {Math.ceil(this.state.fecha/1000)}</h3>
        <form id="formulario">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label>Nombre completo</label>
              <input 
                type="text" 
                onChange={this.cambiarNombre}
              />
            </div>
            <div className="form__item">
              <label>Correo electrónico</label>
              <input 
                type="email"
                onChange={this.cambiarCorreo}
              />
            </div>
            <div>
              <h2>{`Hola ${this.state.nombre}`}</h2>
              <span>{`Tu correo es ${this.state.correo}`}</span>
            </div>
          </div>
        </form>
      </div>
    )
  }
  componentDidMount(){
    console.log('Componente Montado')
    // this.intervaloFecha = setInterval(() => {
    //   this.cambiarFecha()
    //   console.log(new Date())
    // }, 1000);
  }
  componentDidUpdate(prevProps, prevState){
    // console.log('Componente Actualizado')
    // console.log(prevProps)
    // console.log(prevState)
    // console.log('------------------')
  }
  componentWillUnmount(){
    clearInterval(this.intervaloFecha)
  }
}

export default Formulario