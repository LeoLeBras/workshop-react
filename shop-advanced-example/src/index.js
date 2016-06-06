/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import DevTools from '@utils/DevTools'
import createStore from '@store/createStore'
import routes from '@routes'

const Root = () => (
  <Provider store={createStore()}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>
)

ReactDOM.render(<Root />, document.querySelector('.app'));
