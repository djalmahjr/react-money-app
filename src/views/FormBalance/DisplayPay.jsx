import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { moneyThunks } from '../../store/thunks/money'
import IsLoading from '../../components/Loading'

const Display = props => {

    useEffect(() => {
        attDado()
    })

    const stateIsLoading = useSelector(state => state.moneyReducers.money.isLoadingDisplay)
    const stateDado = useSelector(state => state.moneyReducers.money.bruto)
    const stateSumSaldo = useSelector(state => state.moneyReducers.money.sumSaldo)
    const stateSumContas = useSelector(state => state.moneyReducers.money.sumContas)
    const dispatch = useDispatch()



    function attDado() {
        dispatch(moneyThunks.attDados(stateDado))
    }

    return (
        <div className='column'>
            <h1>Consolidação do mês</h1>
            <div className='display'>
                {stateIsLoading ? <IsLoading /> : (
                    <table>
                        <thead>
                            <tr>
                                <th>Total saldo</th>
                                <th>Total Contas</th>
                                <th>Restante</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{stateSumSaldo}</td>
                                <td>{stateSumContas}</td>
                                <td>{stateSumSaldo - stateSumContas}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Display