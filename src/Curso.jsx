import React from 'react'

const Curso = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png" alt="Curso" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Curso de React
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/paula-leon_400x400.png" alt="Profesora" />
            </div>
          </div>
          <span className="small">Cristhian Daza</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="/">$ 20USD</a>
      </div>
    </div>
  </article>
)

export default Curso;