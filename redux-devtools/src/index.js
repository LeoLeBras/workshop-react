import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import DevTools from './utils/DevTools'
import TodosContainer from './containers/TodosContainer'

const App = () => (
  <Provider store={createStore(initialState)}>
    <div>
      <TodosContainer />
      <DevTools />
    </div>
  </Provider>
)

render(<App />, document.querySelector('.app'));
