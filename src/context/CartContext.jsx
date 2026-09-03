import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const productIndex = currentCart.findIndex((product) => product.id === productId)

      if (productIndex === -1) return currentCart

      return currentCart.filter((_, index) => index !== productIndex)
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
