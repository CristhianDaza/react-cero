import {createStore, combineReducers, applyMiddleware} from 'redux'
import {ADD_TO_CART, DELETE_FROM_CART, GET_CURSO_LISTA} from './actions'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialStore = {
  cart: []
}

const initialCursos = {
  cursos: []
}

const cartReducer = (state = initialStore, {type, id}) => {
  if(type === ADD_TO_CART) {
    if (state.cart.find(a => a === id)) return state
      return {
        ...state,
        cart: state.cart.concat(id)
      } 
  }
  if(type === DELETE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter(c => c !== id)
    }
  }

  return state
}

const cursosReducer = (state = initialCursos, action) => {
  if (action.type === GET_CURSO_LISTA) {
    return {
      ...state,
      cursos: action.cursos
    }
  }
  return state
}

export default createStore(combineReducers({cartReducer, cursosReducer}),composeWithDevTools( applyMiddleware(thunk)))