import React from 'react'
import { Formik, Form } from 'formik'
import Input from '../../components/Input'

import IsLoading from '../../components/Loading'
import FormLoading from './FormLoading'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const FormPay = ({ initialValues, handleSubmit }) => {
    const stateIsLoading = useSelector(state => state.moneyReducers.money.isLoadingMoney)
    return (
        <>

            <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={handleSubmit} >
                <Form>
                    <h1>Balanço do Mês</h1>
                    {/* <FormLoading /> */}
                    {stateIsLoading ? <FormLoading /> : (<div className="row form">
                        <div className="column collectionInput">
                            <h2>Saldo</h2>
                            <Input type='number' as='input' name='saldo.salario' label='Salário:' classInput='money' />
                            <Input type='number' as='input' name='saldo.ajuda' label='Ajuda:' classInput='money' />
                            <Input type='number' as='input' name='saldo.emprestimo' label='Crédito:' classInput='money' />
                            <Input type='number' as='input' name='saldo.guardado' label='Guardado:' classInput='money' />

                        </div>
                        <div classas="column collectionInput">
                            <h2>Contas</h2>
                            <Input type='number' as='input' name='contas.carro' label='Carro:' classInput='money' />
                            <Input type='number' as='input' name='contas.emprestimo' label='Cheque Especial/Emprestimo:' classInput='money' />
                            <Input type='number' as='input' name='contas.celular' label='Celular:' classInput='money' />
                            <Input type='number' as='input' name='contas.seguro' label='Seguro de Vida/Carro:' classInput='money' />
                            <Input type='number' as='input' name='contas.cartaoR' label='Cartao de Crédito 1:' classInput='money' />
                            <Input type='number' as='input' name='contas.cartaoN' label='Cartao de Crédito 2:' classInput='money' />
                        </div>
                    </div>)}
                    <div className='sendButton'>
                        <button type='submit'>Atualizar <FontAwesomeIcon icon={faSyncAlt} size='sm' /></button>
                    </div>
                </Form>
            </Formik >

        </>
    )
}

export default FormPay