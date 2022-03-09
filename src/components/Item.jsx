import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Item = ({ item }) => {
  const { id, name, price, category, img } = item
  const { getCategoryName } = useAppContext()

  return (
    <Link to={`/item/${id}`} className="w-full md:w-60">
      <div className="flex flex-col items-center justify-end p-4 h-[18rem] m-2 text-center bg-white border-2 rounded-xl border-cardBackground transition ease-in-out duration-200 hover:scale-105">
        <div className="p-2 mb-4 w-36">
          <img src={img} alt={`Imagen del producto ${name}`} />
        </div>
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <p className="text-sm text-gray-500">{getCategoryName(category)}</p>
      </div>
    </Link>
  )
}

export default Item
