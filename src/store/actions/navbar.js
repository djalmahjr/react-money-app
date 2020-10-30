import {types} from '../types'

const selectTab =  value => ({
        type: types.NAV_SELECT_TAB,
        payload: value
    })

const init = location => {
    return [
        selectTab(location)
    ]
}


export {selectTab, init}