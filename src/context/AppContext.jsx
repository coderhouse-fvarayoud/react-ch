import { createContext, useContext, useEffect, useState } from 'react'
import { fetchCategories } from '../api/index'
import useLocalStorage from '../hooks/useLocalStorage'

export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const INITIAL_STATE = {
  prodsSelected: [],
  itemCount: 0,
  total: 0,
}

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', INITIAL_STATE)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (categories.length) return
    fetchCategories().then((data) => {
      if (data) setCategories(data)
    })
  }, [categories])

  useEffect(() => {
    let currentTotal = 0
    let newCount = 0

    cart.prodsSelected.forEach((prod) => {
      currentTotal += prod.price * prod.amount
      newCount += prod.amount
    })

    setCart({ ...cart, total: currentTotal, itemCount: newCount })
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

  const clearCart = () => {
    setCart({ ...cart, prodsSelected: [] })
  }

  const getCategoryName = (categoryKey) => {
    if (!categories.length) return ''
    const name = categories.find((category) => category.key === categoryKey)
    if (name) {
      return name.name
    } else return ''
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        addItem,
        getAmountOfItem,
        removeItem,
        clearCart,
        categories,
        getCategoryName,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
