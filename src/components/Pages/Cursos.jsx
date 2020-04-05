import React from 'react';
import '../../styles/Loader.css'
import CursoTarjeta from '../Organisms/CursosTarjeta';
import {connect} from 'react-redux'

const Cursos = ({cursos}) =>  <CursoTarjeta  cursos={cursos} />

const mapStateToProps = state => ({
  cursos: state.cursosReducer.cursos
})


export default connect(mapStateToProps, {})(Cursos)