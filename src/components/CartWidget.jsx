import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useAppContext } from '../context/AppContext'

const CartWidget = () => {
  const { cart } = useAppContext()

  return (
    <div className={`relative cursor-pointer `}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <div
        className={`absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -right-3 -top-2 ${
          cart.itemCount ? 'visible' : 'invisible'
        }`}
      >
        <span className="text-sm font-bold text-white">{cart.itemCount}</span>
      </div>
    </div>
  )
}

export default CartWidget
