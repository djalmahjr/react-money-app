import { createSelector } from 'reselect'

const getList = createSelector(
    state => state.todoReducers.listTodo,
    list => list
)

const getSizeList = createSelector(
    state => state.todoReducers.listTodo,
    list => list.length,
)

const selectors = {
    getList,
    getSizeList
}

export { selectors }