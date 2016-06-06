/* @flow */

export type Products = Array<{
  id: number,
  name: string,
  quantity: number,
}>

type Action = {
  type: string,
  id: number,
}

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

export function products(state: Products = initialState, action: Action): Products {
  switch (action.type) {
    case ADD_TO_CART:
      const { id } = action
      const currentProduct = state[id]
      return [
        ...state.slice(0, id),
        { ...currentProduct, quantity: currentProduct.quantity + 1 },
        ...state.slice(id + 1),
      ]
    default:
      return state
  }
}

export const addToCart = (id: number): Action => ({
  type: ADD_TO_CART,
  id
})
