import { useEffect } from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div className='flex '>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  )
}

export default ItemList
