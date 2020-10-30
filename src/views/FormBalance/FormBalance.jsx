import React, { useEffect } from 'react'
import FormPay from './FormPay'
import Display from './DisplayPay'
import { moneyThunks } from '../../store/thunks/money'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from '../../store/actions/money'



const FormBalance = props => {

  const dispatch = useDispatch()
  const moneyStore = useSelector(state => state.moneyReducers.money.bruto)

  const { getMoney, attMoney } = moneyThunks
  useEffect(() => {
    getListMoney()
  }, [])

  function getListMoney() {
    dispatch(getMoney())
  }

  function handleFormSubmit(values){
    dispatch(actions.attIsLoadingDisplay([true]))
    dispatch(attMoney(values))
  }

  return (
    <>
      <div>
        <FormPay initialValues={moneyStore} handleSubmit={handleFormSubmit}/>
        <Display />
      </div>
    </>
  )
}

export default FormBalance;
