import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import Button from './Button'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, clearCart } = useAppContext()

  return (
    <div className="px-10 py-4">
      <div className="flex flex-wrap justify-between my-8">
        <p className="text-xl font-bold">Carrito</p>
        <div className="flex gap-4">
          <Button onClick={() => clearCart()}>Vaciar carrito</Button>
          <Button>Finalizar compra</Button>
        </div>
      </div>
      {cart.prodsSelected.length ? (
        cart.prodsSelected.map((cartItem) => <CartItem item={cartItem} />)
      ) : (
        <div className="flex flex-col gap-4">
          <p>Aún no tiene productos en el carrito</p>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      )}
      {cart.total ? (
        <div className="flex p-8">
          <p className="text-xl font-bold ">Total: ${cart.total}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Cart
