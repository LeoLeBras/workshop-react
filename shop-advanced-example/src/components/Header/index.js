/* @flow */

import React from 'react'
import type { Products } from '@store/modules/products'
import styles from './Header.css'

type Props = {
  products: Array<Products>,
}

const Header = (props: Props): React$Element => {
  const totalQuantity = props.products.reduce(
    (productA, productB) => productA.quantity + productB.quantity
  ) || 0
  return (
    <span className={styles.container}>
      Number of items in cart: {totalQuantity} !
    </span>
   )
}

export default Header
