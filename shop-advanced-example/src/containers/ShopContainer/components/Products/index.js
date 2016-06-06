/* @flow */

import React from 'react'
import type { Products } from '@store/modules/products'
import Product from '@components/Product'

type Props = {
  products: Products,
  addToCart: Function,
}

export default (props: Props): React$Element => {
  const { products, addToCart } = props
  return (
    <div>
    { products.map((product) => (
      <Product
        key={product.id}
        {...product}
        addToCart={addToCart}
      />
    )) }
    </div>
  )
}
