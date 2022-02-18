import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../api/index'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [error, setError] = useState('')
  const { itemID } = useParams()

  useEffect(() => {
    if (!itemID) return

    fetchProductById(itemID)
      .then((item) => {
        if (item) {
          setItem(item)
        } else {
          setError('No se encontro el producto.')
        }
      })
      .catch((error) => {
        console.error(error)
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
