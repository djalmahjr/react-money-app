import React from 'react'
import { Formik, Form } from 'formik'
import Input from '../../components/Input'

import IsLoading from '../../components/Loading'
import { useSelector } from 'react-redux'

const FormPay = ({ initialValues, handleSubmit }) => {
    const stateIsLoading = useSelector(state => state.moneyReducers.money.isLoadingMoney)
    return (
        <>

            <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={handleSubmit} >
                <Form>
                    <h1>Balanço Setembro</h1>
                    {stateIsLoading ? <IsLoading /> : (<div className="row">
                        <div className="column">
                            <h2>Saldo</h2>
                            <Input type='number' as='input' name='saldo.salario' label='Salario:' classInput='money' />
                            <Input type='number' as='input' name='saldo.ajuda' label='Ajuda:' classInput='money' />
                            <Input type='number' as='input' name='saldo.emprestimo' label='Emprestimo:' classInput='money' />
                            <Input type='number' as='input' name='saldo.guardado' label='Guardado:' classInput='money' />

                        </div>
                        <div classas="column">
                            <h2>Contas</h2>
                            <Input type='number' as='input' name='contas.carro' label='Carro:' classInput='money' />
                            <Input type='number' as='input' name='contas.emprestimo' label='Emprestimo:' classInput='money' />
                            <Input type='number' as='input' name='contas.celular' label='Celular:' classInput='money' />
                            <Input type='number' as='input' name='contas.seguro' label='Seguro:' classInput='money' />
                            <Input type='number' as='input' name='contas.cartaoR' label='CartaoR:' classInput='money' />
                            <Input type='number' as='input' name='contas.cartaoN' label='CartaoN:' classInput='money' />
                        </div>
                    </div>)}
                    <button type='submit'>Atualizar</button>
                </Form>
            </Formik >

        </>
    )
}

export default FormPay