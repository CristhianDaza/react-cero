import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({imagenCurso, titulo, imagenProfesor, precio, profesor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={imagenCurso} alt={`Curso ${titulo}`} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
       {titulo}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={imagenProfesor} alt={titulo} />
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="/">$ {precio}</a>
      </div>
    </div>
  </article>
)
Curso.propTypes = {
  titulo: PropTypes.string,
  imagenCurso: PropTypes.string,
  imagenProfesor: PropTypes.string,
  precio: PropTypes.string,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  titulo: 'No se encotró título',
  imagenCurso: 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
  imagenProfesor: 'https://www.gserviceshop.de/store/images/errore.png',
  precio: '0',
  profesor: 'Sin profesor'
}

export default Curso;