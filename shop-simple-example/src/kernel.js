import React from 'react';
import { Provider } from 'react-redux'
import ShopContainer from './containers/ShopContainer'
import DefaultLayout from './layouts/DefaultLayout'
import createStore from './store/createStore'

const Kernel = () => {
  return (
    <Provider store={createStore()}>
      <DefaultLayout>
        <ShopContainer />
      </DefaultLayout>
    </Provider>
  )
}

export default Kernel
