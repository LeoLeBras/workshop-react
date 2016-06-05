import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class DefaultLayout extends Component {
  static defaultProps = {
    children: PropTypes.ReactElement,
    products: PropTypes.Array,
  }

  render() {
    const { products, children } = this.props
    return (
      <div>
        <Header products={products} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(DefaultLayout)
