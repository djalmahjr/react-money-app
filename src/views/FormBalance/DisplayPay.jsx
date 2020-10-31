import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { moneyThunks } from '../../store/thunks/money'
import IsLoading from '../../components/Loading'
import DisplayLoading from './DisplayLoading'

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
            <h2>Consolidação do mês</h2>
            <div className='display'>
                {stateIsLoading ? <DisplayLoading /> : (
                    <table>
                        <thead>
                            <tr>
                                <th>Saldo Disponivel</th>
                                <th>Debitos Somados</th>
                                <th>Saldo Total Restante</th>
                                <th>Salário Restante</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>R${stateSumSaldo}</span></td>
                                <td><span>R${stateSumContas}</span></td>
                                <td><span>R${stateSumSaldo - stateSumContas}</span></td>
                                <td><span>R${stateDado.saldo.salario - stateSumContas}</span></td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default Display