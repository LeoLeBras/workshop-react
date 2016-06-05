import React, { PropTypes } from 'react'

function Header(props) {
  const totalQuantity = props.products.reduce(
    (productA, productB) => productA.quantity + productB.quantity
  ) || 0
  return (
    <span>
      Number of items in cart: {totalQuantity} !
    </span>
   )
}

Header.propTypes = {
  products: PropTypes.array,
}

export default Header
