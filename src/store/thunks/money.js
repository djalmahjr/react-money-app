import axios from 'axios'
import { actions } from '../actions/money'

const BASE_URL = 'https://my-json-server.typicode.com/Almallito/apifake-test'


const moneyThunks = {
    getMoney: () => dispatch => {
        axios.get(`${BASE_URL}/money`)
            .then(resp => resp.data)
            .then(resp => dispatch([
                actions.getMoney(resp),
                actions.attIsLoadingMoney([false]),
                actions.attIsLoadingDisplay([false])
            ]))

    },
    attMoney: values => dispatch => {
        axios.put(`${BASE_URL}/money`, values)
            .then(resp => resp.data)
            .then(resp => dispatch([
                actions.attMoney(resp),
                actions.attIsLoadingDisplay([false])
            ]))
    },
    attDados: (resp) => {
        const totalSaldo = Object.values(resp.saldo).length === 0 ? '0' : Object.values(resp.saldo).reduce((sum, value) => sum + value)
        const totalContas = Object.values(resp.contas).length === 0 ? '0' : Object.values(resp.contas).reduce((sum, value) => sum + value)
        return [
            actions.attSumSaldo(totalSaldo),
            actions.attSumContas(totalContas)
        ]
    }

}

export { moneyThunks }