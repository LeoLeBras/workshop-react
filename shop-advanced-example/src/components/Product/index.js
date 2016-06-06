/* @flow */

import React from 'react'
import styles from './Product.css'

type Props = {
  id: number,
  name: string,
  quantity: number,
  addToCart: (id: number) => any,
}

const Product = (props: Props): React$Element => {
  const { name, quantity, id, addToCart } = props
  return (
    <div>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <button className={styles.button} onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default Product
