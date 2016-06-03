const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { name: action.todo, completed: false },
      ]
    case REMOVE_TODO: {
      const { index } = action
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    }
    case COMPLETE_TODO:
      const { index } = action
      const currentTodo = state[index]
      return [
        ...state.slice(0, index),
        { ...currentTodo, completed: !currentTodo.completed },
        ...state.slice(index + 1),
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

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  index
})
