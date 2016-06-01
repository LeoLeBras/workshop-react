const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const MARK_TODO = 'MARK_TODO'

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { name: action.todo, marked: false },
      ]
    case REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    case MARK_TODO:
      const currentTodo = state[action.index]
      return [
        ...state.slice(0, action.index),
        { ...currentTodo, marked: !currentTodo.marked },
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
})

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index
})

export const markTodo = (index) => ({
  type: MARK_TODO,
  index
})
