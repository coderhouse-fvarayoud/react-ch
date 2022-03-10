import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Button from './Button'

const CartItem = ({ item }) => {
  const { id, name, price, amount, img } = item
  const { removeItem } = useAppContext()

  return (
    <div className="flex p-4 md:m-2 bg-white border-2 border-cardBackground rounded-xl">
      <img
        src={img}
        alt={`Imagen del producto ${name}`}
        className="max-w-[4rem] md:max-w-[100px] h-auto object-contain mr-8"
      />
      <div className="flex flex-col justify-center  ">
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
            <Button primary={false}>Editar</Button>
          </Link>
          <Button primary={false} onClick={() => removeItem(id)}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
