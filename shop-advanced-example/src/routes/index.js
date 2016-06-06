/* @flow */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from '@layouts/DefaultLayout'
import ShopContainer from '@containers/ShopContainer'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute name="Shop" component={ShopContainer} />
  </Route>
)
