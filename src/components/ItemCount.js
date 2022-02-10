import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

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

  return isAddModalVisible ? (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-between w-4/5 gap-4 p-6 rounded-lg lg:w-1/2 bg-cardBackground"
      >
        <div className="flex items-center gap-2">
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
                className="flex items-center justify-center w-8 h-8 mr-4 text-white rounded-full cursor-pointer bg-primary"
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <p className="text-xl font-bold">{currentAmount}</p>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  currentAmount < stock && setCurrentAmount(currentAmount + 1)
                }}
                className="flex items-center justify-center w-8 h-8 ml-4 text-white rounded-full cursor-pointer bg-primary"
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ) : (
          <span>El producto no tiene stock</span>
        )}
        <Button
          disabled={stock < 1}
          onClick={() => stock > 0 && onAdd(currentAmount)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  ) : null
}

export default ItemCount
