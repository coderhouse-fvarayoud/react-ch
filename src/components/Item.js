import { Link } from 'react-router-dom'
import { getCategoryName, getCategoryIcon } from '../utils/categoryUtils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = ({ item }) => {
  const { id, name, category } = item

  return (
    <Link to={`/item/${id}`}>
      <div className="flex flex-col items-center justify-center p-8 m-2 bg-cardBackground rounded-xl">
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
        <p className="text-sm text-gray-500">{getCategoryName(category)}</p>
      </div>
    </Link>
  )
}

export default Item
