const Item = ({ item }) => {
  const { id, name } = item

  return (
    <div className="p-4 bg-cardBackground rounded-xl">
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}

export default Item
