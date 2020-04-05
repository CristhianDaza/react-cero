import React, {useState} from 'react'
import CursoIdTarjeta from './CursoIdTarjeta'
import useCurso from '../CustomHooks/useCurso'



const CursoId = ({match}) => {
  
  const [comentario, setComentario] = useState ("Sin comentarios")

  const curso = useCurso(match.params.id)

  const miComentario = e => {
    setComentario(e.target.value)
  }
  return (
    <>
     <CursoIdTarjeta cursos={curso.cursos} miComentario={miComentario} comentario={comentario} />
    </>
  )
}




export default CursoId