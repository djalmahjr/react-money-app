import React from 'react'
import View from './views/view'
import './global.css'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <View />
      </BrowserRouter>
    </>
  )
}

export default App;
