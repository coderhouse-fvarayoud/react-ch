import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'
import { useAppContext } from '../context/AppContext'
import Button from './Button'
import CartItem from './CartItem'
import { addOrder, reduceStock } from '../api'
import Modal from './Modal'
import Input from './Input'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartArrowDown, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { initialCheckoutFormData } from '../utils'

const Checkout = () => {
  const { cart, clearCart } = useAppContext()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalText, setModalText] = useState('')
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialCheckoutFormData)

  useEffect(() => {
    setFormData(initialCheckoutFormData)
  }, [])

  const generarOrden = () => {
    setLoading(true)
    const buyer = {
      name: formData.name.value,
      surname: formData.surname.value,
      phone: formData.phone.value,
      email: formData.email.value,
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
        setModalText(`Su orden ha sido creada correctamente con ID: ${data.id}`)
        setIsModalVisible(true)
      })
      .catch((e) => {
        setLoading(false)
        setModalText(`Error al crear orden, intente nuevamente`)
        setIsModalVisible(true)
      })
  }

  const validateForm = () => {
    let errors = false
    let newFormData = formData
    for (const property in formData) {
      let error = validateInput(
        property,
        formData[property].value,
        formData[property].regex
      )
      if (error) {
        newFormData[property].error = error
        errors = true
      }
      newFormData[property].opened = true
    }
    if (formData.email.value !== formData.confirmedEmail.value) {
      errors = true
      newFormData.confirmedEmail.error =
        formData.confirmedEmail.errorMessages.isInvalidMessage
    } else {
      newFormData.confirmedEmail.error = null
    }
    setFormData({ ...newFormData })

    if (!errors) generarOrden()
  }

  const handleInputChange = (name, value, blur) => {
    const opened = blur ? true : formData[name].opened ? true : false
    let error = ''
    error = validateInput(name, value, formData[name].regex)
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value,
        error: opened ? error : '',
        opened: opened,
      },
    })
  }

  const validateInput = (name, value, regex) => {
    if (value.length <= 0) {
      return formData[name].errorMessages.isEmptyMessage
    } else if (regex && !checkRegex(regex, formData[name].value)) {
      return formData[name].errorMessages.isInvalidMessage
    } else return ''
  }

  const checkRegex = (regex, value) => regex.test(value)

  return (
    <>
      <Modal
        visible={isModalVisible}
        onAccept={() => {
          clearCart()
          setIsModalVisible(false)
          navigate('/')
        }}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="px-6 lg:px-10 py-4">
        <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-between my-8">
          <p className="text-xl font-bold">Checkout</p>
          <div className="flex gap-4">
            <Button onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button
              loading={loading}
              disabled={!cart.prodsSelected.length}
              onClick={() => validateForm()}
            >
              Finalizar compra
            </Button>
          </div>
        </div>
        {cart.prodsSelected.length ? (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <p className="font-semibold text-xl p-4">
                Tus productos ({cart.prodsSelected.length})
              </p>
              {cart.prodsSelected.map((cartItem, idx) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
              {cart.total ? (
                <div className="flex p-8 w-full justify-end">
                  <p className="text-xl font-bold text-right">
                    Total: ${cart.total}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/2">
              <p className="font-semibold text-xl p-4">Tus datos</p>
              <form className="flex flex-col w-full p-4 lato pb-52">
                <Input
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value, false)
                  }
                  value={formData.name.value}
                  name="name"
                  label="Nombre"
                  type="text"
                  icon={faUser}
                  error={formData.name.error}
                  maxLength={80}
                  onBlur={(e) =>
                    handleInputChange(e.target.name, e.target.value, true)
                  }
                />
                <Input
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value, false)
                  }
                  value={formData.surname.value}
                  name="surname"
                  label="Apellido"
                  type="text"
                  icon={faUser}
                  error={formData.surname.error}
                  maxLength={80}
                  onBlur={(e) =>
                    handleInputChange(e.target.name, e.target.value, true)
                  }
                />
                <Input
                  onChange={(e) =>
                    handleInputChange(
                      e.target.name,
                      e.target.value,

                      false
                    )
                  }
                  icon={faPhone}
                  value={formData.phone.value}
                  name="phone"
                  type="tel"
                  label="Teléfono"
                  error={formData.phone.error}
                  placeholder="Cod. de área + número, sin 0 ni 15"
                  maxLength={20}
                  onBlur={(e) =>
                    handleInputChange(e.target.name, e.target.value, true)
                  }
                />
                <Input
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value, false)
                  }
                  value={formData.email.value}
                  name="email"
                  label="Correo electrónico"
                  type="text"
                  icon={faUser}
                  error={formData.email.error}
                  maxLength={80}
                  onBlur={(e) =>
                    handleInputChange(e.target.name, e.target.value, true)
                  }
                />
                <Input
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value, false)
                  }
                  value={formData.confirmedEmail.value}
                  name="confirmedEmail"
                  label="Confirmar correo electrónico"
                  type="text"
                  icon={faUser}
                  error={formData.confirmedEmail.error}
                  maxLength={80}
                  onBlur={(e) =>
                    handleInputChange(e.target.name, e.target.value, true)
                  }
                />
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full h-full py-20 justify-center items-center">
            <FontAwesomeIcon icon={faCartArrowDown} size="3x" />
            <p className="mb-10">Aún no tiene productos en el carrito</p>
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Checkout
