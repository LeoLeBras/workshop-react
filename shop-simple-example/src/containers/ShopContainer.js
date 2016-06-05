import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Product from '../components/Product'
import { addToCart } from '../store/modules/products'

class ShopContainer extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
      { this.props.products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addToCart={::this.props.addToCart}
        />
      )) }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
})

const mapDispatchToProps = { addToCart }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopContainer)
