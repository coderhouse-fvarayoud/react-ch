import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({ counter }) => (
  <div className="relative cursor-pointer">
    <FontAwesomeIcon icon={faShoppingCart} />
    <div className="absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -right-3 -top-2">
      <span className="text-sm font-bold text-white">{counter}</span>
    </div>
  </div>
)

export default CartWidget
