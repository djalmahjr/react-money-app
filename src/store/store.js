import { createStore, applyMiddleware} from 'redux'
import {reducers} from './reducers'
import ReduxThunk from 'redux-thunk'
import ReduxMulti from 'redux-multi'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(ReduxThunk, ReduxMulti)(createStore)(reducers, devTools) 

// const store = applyMiddleware(thunk,promise)(createStore)(reducers)

export {store}