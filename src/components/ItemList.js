import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div className="flex ">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
