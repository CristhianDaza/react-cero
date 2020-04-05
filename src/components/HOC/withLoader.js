import React, { Component } from "react"

const withLoader = (propValue, WrappedComponent) => {
  return class WithLoader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }

    render() {
      return this.props[propValue].length === 0
      ? <div className="s-center">
              <div className="lds-hourglass"></div>
              <h1 className="t3">Cargando ...</h1>
            </div>
      : <WrappedComponent {...this.props}/>
    }
  }
}

export default withLoader