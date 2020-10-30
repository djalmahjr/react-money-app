import {combineReducers} from 'redux'
import {types} from '../types'
const INITIAL_VALUE = { selectTab: '' }

const navbar = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case types.NAV_SELECT_TAB:
            return {
                selectTab: action.payload
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    navbar
})

export {reducers}
