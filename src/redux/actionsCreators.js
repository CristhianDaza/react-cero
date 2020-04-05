import {ADD_TO_CART} from './actions'
import {DELETE_FROM_CART} from './actions'
import {GET_CURSO_LISTA} from './actions'
import axios from 'axios'

const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  id
})

const getCursoLista = () => dispatch => {
  axios.get('http://my-json-server.typicode.com/CristhianDaza/json-db/cursos')
    .then(respuesta => {
      return dispatch({
        type: GET_CURSO_LISTA,
        cursos: respuesta.data
      })
    })
}

export {addToCart, deleteFromCart, getCursoLista}