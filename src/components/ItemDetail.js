import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { getCategoryName } from '../utils/categoryUtils'
import { useCart } from '../context/CartContext'
import Button from './Button'

const ItemDetail = ({ item }) => {
  const { id, name, price, description, stock, category } = item
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)
  const { addItem, getAmountOfItem } = useCart()

  useEffect(() => {
    setSelectedAmount(getAmountOfItem(id))
  }, [getAmountOfItem, id])

  const onItemAdd = (amount) => {
    addItem({
      id,
      name,
      price,
      amount,
    })
    setIsAddModalVisible(false)
  }

  return (
    <>
      <ItemCount
        stock={stock}
        isAddModalVisible={isAddModalVisible}
        onAdd={onItemAdd}
        initial={selectedAmount}
        onClose={() => {
          setIsAddModalVisible(false)
        }}
      />
      <div>
        <div className="p-4 bg-cardBackground rounded-xl">
          <p>
            <b>ID:</b> {id}
          </p>
          <p>
            <b>Nombre:</b> {name}
          </p>
          <p>
            <b>Descripción:</b> {description}
          </p>
          <p>
            <b>Categoria:</b> {getCategoryName(category)}
          </p>
          <p>
            <b>Precio:</b> ${price}
          </p>
          <div className="flex gap-3 py-4">
            <Button
              onClick={() => {
                setIsAddModalVisible(true)
              }}
            >
              {selectedAmount
                ? `Editar cantidad (${selectedAmount})`
                : 'Agregar al carrito'}
            </Button>
            {selectedAmount ? (
              <Link to="/cart">
                <Button>Terminar mi compra</Button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
