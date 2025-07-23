import { createContext, useContext, useReducer } from 'react'


const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, color, size, quantity = 1 } = action.payload
      const existingItemIndex = state.items.findIndex(
        item => 
          item.id === product.id && 
          item.color === color && 
          item.size === size
      )

      if (existingItemIndex > -1) {
        // Item already exists, update quantity
        const newItems = [...state.items]
        newItems[existingItemIndex].quantity += quantity
        return { ...state, items: newItems }
      } else {
        // New item, add to cart
        const newItem = {
          id: product.id,
          name: product.name,
          category: product.category,
          price: parseFloat(product.price.replace('€', '')),
          image: product.image,
          color,
          size,
          quantity
        }
        return { ...state, items: [...state.items, newItem] }
      }
    }

    case 'REMOVE_FROM_CART': {
      const { id, color, size } = action.payload
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === id && item.color === color && item.size === size)
        )
      }
    }

    case 'UPDATE_QUANTITY': {
      const { id, color, size, quantity } = action.payload
      if (quantity === 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.id === id && item.color === color && item.size === size)
          )
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id && item.color === color && item.size === size
            ? { ...item, quantity }
            : item
        )
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    default:
      return state
  }
}

const initialState = {
  items: []
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product, color, size, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, color, size, quantity }
    })
  }

  const removeFromCart = (id, color, size) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, color, size }
    })
  }

  const updateQuantity = (id, color, size, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, color, size, quantity }
    })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 