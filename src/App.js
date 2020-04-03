import React from 'react';
import './styles/styles.scss'
import Curso from './Curso'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://ed-grid.com/assets/img/docs-banner.jpg" alt="Banner"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso React</p>
            <p> en EDTeam</p>
            <a href="/" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso 
        titulo="React desde Cero" 
        imagenCurso="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png" 
        precio="75.000 pesos"
        profesor="Cristhian Daza"
        imagenProfesor="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-0/p480x480/69584194_10157856948884684_1057082779730182144_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_eui2=AeEjt6EkDqXSYyCn5j1Acx-F6Linn_IYpx_z_CjWFJQeP5emydbo2e6nUrqPzkzfxSERz3l5-d1eSj27hkshNFdnxq9dFGmI-d8awnIMH5qY1g&_nc_ohc=fW1ypQYRGIEAX8Fb_ho&_nc_ht=scontent-bog1-1.xx&_nc_tp=6&oh=759292a3547e17910009fd23be7378d5&oe=5EAAAB43"
      />

      <Curso 
        titulo="React - Manejo del estado de la aplicación" 
        imagenCurso="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png" 
        precio="100.000 pesos"
        profesor="Cristhian Daza"
        imagenProfesor="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-0/p480x480/69584194_10157856948884684_1057082779730182144_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_eui2=AeEjt6EkDqXSYyCn5j1Acx-F6Linn_IYpx_z_CjWFJQeP5emydbo2e6nUrqPzkzfxSERz3l5-d1eSj27hkshNFdnxq9dFGmI-d8awnIMH5qY1g&_nc_ohc=fW1ypQYRGIEAX8Fb_ho&_nc_ht=scontent-bog1-1.xx&_nc_tp=6&oh=759292a3547e17910009fd23be7378d5&oe=5EAAAB43"
      />

      <Curso 
        titulo="Plataforma de educación online con React.js" 
        imagenCurso="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20plataforma%20de%20cursos.png" 
        precio="350.000 pesos"
        profesor="Cristhian Daza"
        imagenProfesor="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-0/p480x480/69584194_10157856948884684_1057082779730182144_o.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_eui2=AeEjt6EkDqXSYyCn5j1Acx-F6Linn_IYpx_z_CjWFJQeP5emydbo2e6nUrqPzkzfxSERz3l5-d1eSj27hkshNFdnxq9dFGmI-d8awnIMH5qY1g&_nc_ohc=fW1ypQYRGIEAX8Fb_ho&_nc_ht=scontent-bog1-1.xx&_nc_tp=6&oh=759292a3547e17910009fd23be7378d5&oe=5EAAAB43"
      />
    </div>
  </>
);

export default App;
