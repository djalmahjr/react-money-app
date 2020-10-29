import axios from 'axios'
import { actions as actionTodo } from '../actions/todo'

const BASE_URL = 'https://my-json-server.typicode.com/Almallito/apifake-test'

const todoThunks = {
    getList: () => dispatch => {
        axios.get(`${BASE_URL}/list`)
            .then(resp => resp.data)
            .then(resp => dispatch([
                actionTodo.getList(resp)
            ]))
    },
    pushList: value => dispatch => {
        axios.post(`${BASE_URL}/list`, value)
            .then(resp => dispatch(actionTodo.addList(resp.data)))
        
    }
}

export { todoThunks }