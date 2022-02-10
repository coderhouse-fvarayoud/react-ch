import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'
import { useEffect } from 'react'

const CartWidget = () => {
  const [itemCount, setItemCount] = useState(0)
  const { cart } = useCart()

  useEffect(() => {
    let newCount = 0
    cart.prodsSelected.forEach((prod) => {
      newCount += prod.amount
    })
    setItemCount(newCount)
  }, [cart.prodsSelected])

  return (
    <div
      className={`relative cursor-pointer ${
        itemCount ? 'visible' : 'invisible'
      }`}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <div className="absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -right-3 -top-2">
        <span className="text-sm font-bold text-white">{itemCount}</span>
      </div>
    </div>
  )
}

export default CartWidget
