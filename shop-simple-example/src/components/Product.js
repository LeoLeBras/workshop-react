import React from 'react'

function Product(props) {
  const { name, quantity, id, addToCart } = props
  return (
    <div>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default Product
