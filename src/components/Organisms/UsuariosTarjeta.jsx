import React from 'react';
import Usuario from '../Molecules/Usuario'
import withLoader from '../HOC/withLoader';

const UsuarioTarjeta = ({usuarios}) => {
  return (
    <div className="ed-grid">
      <h1>Usuarios</h1>
      <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
        {
          usuarios.map(usuario => (
            <Usuario 
              key={usuario.id}
              name={usuario.name}
              username={usuario.username}
              email={usuario.email}
            />
            ) )
        }
          
      </div>
    </div>
  )
}

export default withLoader("usuarios", UsuarioTarjeta)