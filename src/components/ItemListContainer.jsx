import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../api/index'
import ItemList from './ItemList'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { reloadProducts, fetchOrders } from '../api/index'
import Spinner from './Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faClock, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

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
    !categoryID && fetchOrders()
  }, [categoryID])

  useEffect(() => {
    setItems(null)
    setError('')
    getItems(categoryID)
  }, [categoryID])

  const resetBaseDeDatos = async () => {
    if (categoryID) return
    await reloadProducts()
  }

  return (
    <div className="px-6 md:px-10 py-4">
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
          <p onClick={resetBaseDeDatos}>No se encontraron productos</p>
        )
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ItemListContainer
