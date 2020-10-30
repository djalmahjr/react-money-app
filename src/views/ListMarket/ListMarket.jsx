import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectors } from '../../store/selectors/todo'
import { actions } from '../../store/actions/todo'
import { todoThunks } from '../../store/thunks/todo'
function App() {

  useEffect(() => {
    getListAPI()
  }, [])

  const [inputText, updateInput] = useState('')

  const list = useSelector(selectors.getList)
  const sizeList = useSelector(selectors.getSizeList)

  const dispatch = useDispatch()

  const handleChangeInput = event => {
    updateInput(event.target.value)
  }

  const getListAPI = () => {
    dispatch(todoThunks.getList())
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    const newItem = { item: inputText }
    dispatch(todoThunks.pushList(newItem))
    updateInput('')
  }

  const reset = () => {
    dispatch(actions.emplyList())
    updateInput('')
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmitForm}>
          <input type="text" onChange={handleChangeInput} value={inputText} />
          <button type='button' onClick={() => reset()}>Limpar</button>
          <button type='submit'>Add</button>
          <ul>
            {list.map((e, i) =>
              <li key={i}>{e.item}</li>
            )}
          </ul>
          <br />
          <span>Tamanho da lista: <bold>{sizeList}</bold></span>
        </form>
      </div>
    </>
  )
}

export default App;
