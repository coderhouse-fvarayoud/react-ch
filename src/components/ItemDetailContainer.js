import { useEffect, useState } from 'react'
import { fetchItemDetail } from '../utils/fetchItemDetails'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetchItemDetail(id).then((item) => {
      console.log('aca: ', item)
      setItem(item[0])
    })
  }, [])

  return <div>{item ? <ItemDetail item={item} /> : null}</div>
}

export default ItemDetailContainer
