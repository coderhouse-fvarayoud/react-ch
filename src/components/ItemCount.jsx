import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

const ItemCount = ({ stock, initial, onAdd, onClose, isAddModalVisible }) => {
  const [currentAmount, setCurrentAmount] = useState(0)
  const [buttonText, setButtonText] = useState('Agregar')

  useEffect(() => {
    if (initial === 0) setCurrentAmount(1)
    else {
      setButtonText('Editar')
      setCurrentAmount(initial)
    }
  }, [initial])

  return (
    <Modal
      onAccept={() => stock > 0 && onAdd(currentAmount)}
      onClose={onClose}
      acceptButtonText={buttonText}
      visible={isAddModalVisible}
    >
      <div className="flex items-center gap-2 py-5">
        <span className="text-gray-500">{stock} disponibles</span>
      </div>
      {stock > 0 ? (
        <div className="flex items-center w-full gap-4">
          <span>Cantidad: </span>
          <div className="flex items-center select-none">
            <div
              onClick={(e) => {
                e.stopPropagation()
                currentAmount > 1 && setCurrentAmount(currentAmount - 1)
              }}
              className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-purple-600 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <p className="text-xl font-bold">{currentAmount}</p>
            <div
              onClick={(e) => {
                e.stopPropagation()
                currentAmount < stock && setCurrentAmount(currentAmount + 1)
              }}
              className="flex items-center justify-center w-8 h-8 ml-4 text-white bg-purple-600 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      ) : (
        <span>El producto no tiene stock</span>
      )}
    </Modal>
  )
}

export default ItemCount
