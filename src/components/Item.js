import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCategoryIcon } from '../utils'
import { useAppContext } from '../context/AppContext'

const Item = ({ item }) => {
  const { id, name, price, category } = item
  const { getCategoryName } = useAppContext()

  return (
    <Link to={`/item/${id}`} className="w-full md:w-60">
      <div className="flex flex-col items-center justify-center p-8 m-2 bg-cardBackground rounded-xl ">
        <div className="p-2 mb-4">
          <FontAwesomeIcon
            icon={getCategoryIcon(category)}
            size="2x"
            className="text-primary"
          />
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
