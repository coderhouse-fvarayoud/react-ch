import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from './Button'

const CartItem = ({ item }) => {
  const { id, name, price, amount } = item
  const { removeItem } = useCart()

  return (
    <div className="flex flex-col justify-center p-4 m-2 bg-cardBackground rounded-xl ">
      <p>
        Nombre: <b>{name}</b>
      </p>
      <p>
        Cantidad: <b>{amount}</b>
      </p>
      <p>
        Precio por unidad: <b>${price}</b>
      </p>
      <div className="flex gap-2 py-4">
        <Link to={`/item/${id}`}>
          <Button>Editar</Button>
        </Link>
        <Button onClick={() => removeItem(id)}>Eliminar</Button>
      </div>
    </div>
  )
}

export default CartItem
