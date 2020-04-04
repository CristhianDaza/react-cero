import React from 'react'

const Historial = ({match, location, history}) => (
  <div>
    <h3>{JSON.stringify(match)}</h3>
    <h3>{JSON.stringify(location)}</h3>
    <h3>{JSON.stringify(history)}</h3>
  </div>
)

export default Historial