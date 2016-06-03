import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, completeTodo } from '../store/modules/todos'

class TodosContainer extends Component {
  static propTypes = {
    todos: PropTypes.array
  }

  onSubmit(e) {
    e.preventDefault()
    const { addTodo } = this.props
    const { input } = this.refs
    addTodo(input.value)
    input.value = ''
  }

  render() {
    const { todos, removeTodo, completeTodo } = this.props
    return (
      <div>
        <h1>Todos</h1>
        <form onSubmit={::this.onSubmit}>
          <input ref="input" />
          <button>Add</button>
        </form>
        <ul>
          { todos.map((todo, index) => (
            <li key={index}>
              <span onClick={() => completeTodo(index)} style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>{todo.name}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

export default connect(mapStateToProps, {
  addTodo, removeTodo, completeTodo
})(TodosContainer)
