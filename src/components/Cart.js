import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'
import { useAppContext } from '../context/AppContext'
import Button from './Button'
import CartItem from './CartItem'
import { addOrder, reduceStock } from '../api'
import Modal from './Modal'

const Cart = () => {
  const { cart, clearCart } = useAppContext()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalText, setModalText] = useState('')
  const navigate = useNavigate()

  const generarOrden = () => {
    setLoading(true)
    const buyer = {
      name: 'User Name',
      phone: '541111111111',
      email: 'email@provider.com',
    }
    const items = cart.prodsSelected.map((item) => {
      return {
        id: item.id,
        title: item.name,
        qty: item.amount,
        price: item.price,
      }
    })
    const date = serverTimestamp()
    const total = cart.total
    const order = {
      buyer,
      items,
      date,
      total,
    }

    addOrder(order)
      .then((data) => {
        items.forEach((item) => reduceStock(item.id, item.qty))
        setLoading(false)
        setModalText(`Orden creada correctamente. ID: ${data.id}`)
        setIsModalVisible(true)
      })
      .catch((e) => {
        setLoading(false)
        setModalText(`Error al crear orden, intente nuevamente`)
        setIsModalVisible(true)
      })
  }

  return (
    <>
      <Modal
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false)
        }}
        onAccept={() => {
          clearCart()
          setIsModalVisible(false)
          navigate('/')
        }}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="px-10 py-4">
        <div className="flex flex-wrap justify-between my-8">
          <p className="text-xl font-bold">Carrito</p>
          <div className="flex gap-4">
            <Button onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button
              loading={loading}
              disabled={!cart.prodsSelected.length}
              onClick={() => generarOrden()}
            >
              Finalizar compra
            </Button>
          </div>
        </div>
        {cart.prodsSelected.length ? (
          cart.prodsSelected.map((cartItem, idx) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="flex flex-col gap-4">
            <p>Aún no tiene productos en el carrito</p>
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        )}
        {cart.total ? (
          <div className="flex p-8">
            <p className="text-xl font-bold ">Total: ${cart.total}</p>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Cart
