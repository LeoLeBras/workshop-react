const ADD_TO_CART = 'ADD_TO_CART'

const initialState = [{
  id: 0,
  name: 'Product 1',
  quantity: 1,
}, {
  id: 1,
  name: 'Product 2',
  quantity: 0,
}]

export function products(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      const currentProduct = state[id]
      return [
        ...state.slice(0, id),
        { ...currentProduct, quantity: currentProduct.quantity + 1 },
        ...state.slice(id + 1),
      ]
      return state
    default:
      return state
  }
}

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
})
