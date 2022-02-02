const ItemDetail = ({ item }) => {
  const { id, name } = item
  return (
    <div className="p-4 bg-cardBackground rounded-xl">
      <p className="text-xl font-semibold">Detalles</p>
      <p>ID: {id}</p>
      <p>Nombre: {name}</p>
    </div>
  )
}

export default ItemDetail
