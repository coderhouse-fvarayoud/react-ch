import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({
  stock,
  initial = 1,
  onAdd,
  onClose,
  isAddModalVisible,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(initial)

  return isAddModalVisible ? (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div className="flex flex-col justify-between w-1/2 gap-4 p-6 rounded-lg bg-cardBackground">
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
                  selectedAmount > 1 && setSelectedAmount(selectedAmount - 1)
                }}
                className="flex items-center justify-center w-8 h-8 mr-4 text-white rounded-full cursor-pointer bg-primary"
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <p className="text-xl font-bold">{selectedAmount}</p>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  selectedAmount < stock &&
                    setSelectedAmount(selectedAmount + 1)
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
        <button
          disabled={stock < 1}
          onClick={() => stock > 0 && onAdd(selectedAmount)}
          className="p-2 font-bold text-white rounded-lg cursor-pointer bg-primary disabled:bg-gray-600"
        >
          Agregar
        </button>
      </div>
    </div>
  ) : null
}

export default ItemCount
