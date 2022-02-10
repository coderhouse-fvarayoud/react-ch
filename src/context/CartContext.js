import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const INITIAL_STATE = {
  prodsSelected: [],
  total: 0,
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE)

  useEffect(() => {
    const calculateTotal = () => {
      let currentTotal = 0
      cart.prodsSelected.forEach((prod) => {
        currentTotal += prod.price * prod.amount
      })
      return currentTotal
    }

    setCart({ ...cart, total: calculateTotal() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.prodsSelected])

  const addItem = (item) => {
    if (getAmountOfItem(item.id)) {
      const newProdsSelected = [...cart.prodsSelected]
      const editObjIndex = newProdsSelected.findIndex(
        (prod) => prod.id === item.id
      )
      newProdsSelected[editObjIndex].amount = item.amount
      setCart({ ...cart, prodsSelected: newProdsSelected })
    } else setCart({ ...cart, prodsSelected: [...cart.prodsSelected, item] })
  }

  const getAmountOfItem = (id) => {
    const item = cart.prodsSelected.find((prod) => prod.id === id)
    return item ? item.amount : 0
  }

  const removeItem = (id) => {
    setCart({
      ...cart,
      prodsSelected: cart.prodsSelected.filter((prod) => prod.id !== id),
    })
  }

  const removeAll = () => {
    setCart({ ...cart, prodsSelected: [] })
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, getAmountOfItem, removeItem, removeAll }}
    >
      {children}
    </CartContext.Provider>
  )
}
