import {useState, useEffect} from 'react'
import axios from 'axios'

const useCurso = id => {
  const [curso, setCurso] = useState({
    cursos: []
  })

  useEffect(()=> {
    axios.get(`http://my-json-server.typicode.com/CristhianDaza/json-db/cursos/${id}`)
      .then(respuesta => {
        setCurso({
          ...curso,
          cursos: respuesta.data
        })
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return curso
}

export default useCurso