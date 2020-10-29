import {combineReducers} from 'redux'
import {types} from '../types'

const INITIAL_VALUES = {
    bruto: {saldo:{}, contas:{}}, 
    sumSaldo: 0, 
    sumContas: 0, 
    isLoadingDisplay: true,
    isLoadingMoney: true}

const money = (state = INITIAL_VALUES, action) => {
    
    switch(action.type){
        case types.MONEY_GET:
            return {
                ...state,
                bruto: action.payload
            }
        case types.MONEY_ATT:
            return {
                ...state,
                bruto: action.payload
            }
        case types.MONEY_SUM_CONTAS: 
            return {
                ...state,
                sumContas: action.payload
            }
        case types.MONEY_SUM_SALDO: 
            return {
                ...state,
                sumSaldo: action.payload
            }
        case types.IS_LOADING_DISPLAY: 
            return {
                ...state,
                isLoadingDisplay: action.payload[0]
            }
        case types.IS_LOADING_MONEY: 
        console.log(action.payload[0])
            return {
                ...state,
                isLoadingMoney: action.payload[0]
            }

        default: 
            return state
    }
}

const reducers = combineReducers({
    money
})

export {reducers}