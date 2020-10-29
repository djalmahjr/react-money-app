import React, { useEffect } from 'react'
import FormList from './FormList'
import FormPay from './FormPay'
import Display from './DisplayPay'
import './App.css'
import { moneyThunks } from './store/thunks/money'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from './store/actions/money'


function App() {

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
      <FormList />
      <br />
      <br />
      <div className="pay">
        <FormPay initialValues={moneyStore} handleSubmit={handleFormSubmit}/>
        <Display />
      </div>
    </>
  )
}

export default App;
