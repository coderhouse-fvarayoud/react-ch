import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItemDetail } from '../utils/mockAPI'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [error, setError] = useState('')
  const { itemID } = useParams()

  useEffect(() => {
    if (!itemID) return

    fetchItemDetail(parseInt(itemID))
      .then((item) => {
        setItem(item)
      })
      .catch((error) => {
        setError(error)
      })
  }, [itemID])

  return (
    <div className="px-10 py-4">
      <p className="py-8 text-xl font-bold">Detalle del producto</p>
      {item ? (
        <ItemDetail item={item} />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        'Cargando...'
      )}
    </div>
  )
}

export default ItemDetailContainer
