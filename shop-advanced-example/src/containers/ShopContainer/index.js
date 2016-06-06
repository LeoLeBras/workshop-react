/* @flow */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '@store/modules/products'
import Products from './components/Products'

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = { addToCart }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => (
  <div>
    <Products {...props} />
  </div>
))
