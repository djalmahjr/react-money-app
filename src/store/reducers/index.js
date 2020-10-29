import {combineReducers} from 'redux' 
import {reducers as todoReducers} from './todo'
import {reducers as moneyReducers} from './money'

const reducers = combineReducers({
    todoReducers,
    moneyReducers
})

export {reducers}