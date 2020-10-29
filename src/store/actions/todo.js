import {types} from '../types'

const actions ={
    addList: value => ({type: types.TODO_ADD_LIST, payload: value}),
    emplyList: () => ({type: types.TODO_EMPLY_LIST, payload:''}),
    getList: value => ({type: types.TODO_GET_LIST, payload: value})
} 

export {actions}