/* @flow */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import type { Products } from '@store/modules/products'
import Header from '@components/Header'
import Wrapper from '@components/Wrapper'

type Props = {
  children: React$Element,
  products: Products,
}

class DefaultLayout extends Component<void, Props, void> {
  props: Props
  render(): React$Element {
    const { products, children } = this.props
    return (
      <Wrapper>
        <Header products={products} />
        {children}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(DefaultLayout)
