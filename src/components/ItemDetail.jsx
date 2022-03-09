import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useAppContext } from '../context/AppContext'
import Button from './Button'

const ItemDetail = ({ item }) => {
  const { id, name, price, description, stock, category, img } = item
  const [isAddModalVisible, setIsAddModalVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)
  const { addItem, getAmountOfItem, getCategoryName } = useAppContext()

  useEffect(() => {
    setSelectedAmount(getAmountOfItem(id))
  }, [getAmountOfItem, id])

  const onItemAdd = (amount) => {
    addItem({
      id,
      name,
      price,
      amount,
      img,
    })
    setIsAddModalVisible(false)
  }

  return (
    <div>
      <ItemCount
        stock={stock}
        isAddModalVisible={isAddModalVisible}
        onAdd={onItemAdd}
        initial={selectedAmount}
        onClose={() => {
          setIsAddModalVisible(false)
        }}
      />
      <div className="flex flex-col md:flex-row">
        <img
          src={img}
          alt={`Imagen del producto ${name}`}
          className="w-full md:max-w-[400px] h-auto p-4 object-cover self-start"
        />
        <div className="p-4 rounded-xl md:ml-4">
          <p className="text-3xl">
            <b>{name}</b>
          </p>
          <p className=" text-gray-400">{getCategoryName(category)}</p>
          <p className="text-3xl text-red-600 py-5">
            <b>${price}</b>
          </p>
          <p className="">{stock} disponibles</p>
          <div className="flex flex-col md:flex-row  gap-3 py-4">
            <Button
              disabled={!stock}
              onClick={() => {
                setIsAddModalVisible(true)
              }}
            >
              {!stock
                ? 'El producto no tiene stock'
                : selectedAmount
                ? `Editar cantidad (${selectedAmount})`
                : 'Agregar al carrito'}
            </Button>
            {selectedAmount ? (
              <Link to="/cart" className="w-full">
                <Button className="flex-grow w-full md:w-auto">
                  Terminar mi compra
                </Button>
              </Link>
            ) : null}
          </div>
          <p className="pt-10 font-bold">Descripción</p>
          <p className="py-5">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
