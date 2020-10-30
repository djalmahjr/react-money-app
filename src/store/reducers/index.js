import {combineReducers} from 'redux' 
import {reducers as todoReducers} from './todo'
import {reducers as moneyReducers} from './money'
import {reducers as navbarReducers} from './navbar'
const reducers = combineReducers({
    todoReducers,
    moneyReducers,
    navbarReducers
})

export {reducers}