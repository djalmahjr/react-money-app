import {types} from '../types'

const actions = {
    getMoney: list => {
        return {
            type: types.MONEY_GET,
            payload: list
        }
    },
    
    attMoney: newlist => {
        return {
            type: types.MONEY_ATT,
            payload: newlist
        }
    },
    attSumSaldo: newvalue => {
        return {
            type: types.MONEY_SUM_SALDO,
            payload: newvalue
        }
    },
    attSumContas: newvalue => {
        return {
            type: types.MONEY_SUM_CONTAS,
            payload: newvalue
        }
    },
    attIsLoadingDisplay: value => {
        return {
            type: types.IS_LOADING_DISPLAY,
            payload: value
        }
    },
    attIsLoadingMoney: value => {
        return {
            type: types.IS_LOADING_MONEY,
            payload: value
        }
    }
}

export{actions}