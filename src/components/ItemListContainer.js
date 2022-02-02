import { useEffect, useState } from 'react'
import { fetchItemDetail } from '../utils/fetchItemDetails'
import { fetchItems } from '../utils/fetchItems'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])

  const getItems = () => {
    fetchItemDetail(2).then((data) => {
      console.log('Data: ', data)
      setItems(data)
    })
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="p-10">
      <span className="text-xl font-semibold text-blue-900 ">{greeting}</span>
      <ItemList items={items} />
      <ItemDetailContainer id={1} />
    </div>
  )
}

export default ItemListContainer
