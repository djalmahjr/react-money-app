import {combineReducers} from 'redux'
import {types} from '../types'

const INITIAL_LIST = []

const listTodo = (state = INITIAL_LIST, action) => {
    if(!action.payload){
        action.payload = {}
    }
    switch(action.type){
        case types.TODO_GET_LIST: 
            return action.payload
        case types.TODO_ADD_LIST:
            return [
                ...state,
                action.payload
            ]
        case types.TODO_EMPLY_LIST:
            return INITIAL_LIST
        default: 
            return state
    }
}

const reducers = combineReducers({
    listTodo,
})

export {reducers}