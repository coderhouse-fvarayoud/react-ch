import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItems } from '../utils/mockAPI'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const { categoryID } = useParams()

  const getItems = (categoryID) => {
    fetchItems(categoryID)
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    setItems([])
    setError('')
    getItems(parseInt(categoryID))
  }, [categoryID])

  return (
    <div className="px-10 py-4">
      <p className="py-8 text-xl font-bold">Lista de productos</p>
      {items.length ? (
        <ItemList items={items} />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default ItemListContainer
