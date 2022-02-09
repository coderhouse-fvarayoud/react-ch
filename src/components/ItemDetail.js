import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { getCategoryName } from '../utils/categoryUtils'

const ItemDetail = ({ item }) => {
  const { id, name, description, stock, category } = item
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)

  return (
    <>
      <ItemCount
        stock={stock}
        isAddModalVisible={isAddModalVisible}
        onAdd={(selectedAmount) => {
          setSelectedAmount(selectedAmount)
          setIsAddModalVisible(false)
        }}
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
          <div className="flex gap-3 py-4">
            <button
              onClick={() => {
                setIsAddModalVisible(true)
              }}
              className="p-2 font-bold text-white rounded-lg cursor-pointer bg-primary disabled:bg-gray-600"
            >
              {selectedAmount ? 'Editar cantidad' : 'Agregar al carrito'}
            </button>
            {selectedAmount ? (
              <Link to="/cart">
                <button className="p-2 font-bold text-white rounded-lg cursor-pointer bg-primary disabled:bg-gray-600">
                  Terminar compra
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
