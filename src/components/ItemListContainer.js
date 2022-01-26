import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
  const onAdd = (amount) => {
    console.log(`Agregar ${amount} productos.`)
  }

  return (
    <div className="p-10">
      <span className="text-xl font-semibold text-blue-900 ">{greeting}</span>
      <div className="flex flex-col gap-4 my-4">
        <ItemCount
          itemName="Demo product with stock"
          stock={5}
          initial={1}
          onAdd={onAdd}
        />
        <ItemCount
          itemName="Demo product without stock"
          stock={0}
          initial={1}
          onAdd={onAdd}
        />
      </div>
    </div>
  )
}

export default ItemListContainer
