import ItemCount from './ItemCount'
import { getCategoryName } from '../utils/categoryUtils'

const ItemDetail = ({ item }) => {
  const { id, name, description, stock, category } = item
  return (
    <div>
      <div className="p-4 bg-cardBackground rounded-xl">
        <p>
          <b>ID:</b> {id}
        </p>
        <p>
          <b>Nombre:</b> {name}
        </p>
        <p>
          <b>Descripción:</b> {description}
        </p>
        <p>
          <b>Categoria:</b> {getCategoryName(category)}
        </p>
        <ItemCount stock={stock} />
      </div>
    </div>
  )
}

export default ItemDetail
