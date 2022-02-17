import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../api/index'
import ItemList from './ItemList'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const ItemListContainer = () => {
  const [items, setItems] = useState(null)
  const [error, setError] = useState('')
  const { categoryID } = useParams()
  const { getCategoryName } = useAppContext()

  const getItems = (categoryID) => {
    fetchProducts(categoryID)
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    setItems(null)
    setError('')
    getItems(categoryID)
  }, [categoryID])

  return (
    <div className="px-10 py-4">
      <div className="py-8">
        <Link to="/">
          <span className="text-xl font-bold ">Todos los productos</span>
        </Link>
        {categoryID ? <span> | {getCategoryName(categoryID)}</span> : null}
      </div>
      {items ? (
        items.length ? (
          <ItemList items={items} />
        ) : (
          <p>No se encontraron productos</p>
        )
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default ItemListContainer
