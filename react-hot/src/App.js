import React, { Component } from 'react';

class App extends Component {
  state = { counter: 0 }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <span>{counter}</span>
        <button onClick={::this.increment}>+1</button>
      </div>
    );
  }
}

export default App
