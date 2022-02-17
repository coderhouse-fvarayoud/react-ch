import Button from './Button'
const Modal = ({
  visible,
  onClose,
  onAccept,
  acceptButtonText = 'Aceptar',
  children,
}) => {
  return visible ? (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col justify-between w-4/5 gap-4 p-6 rounded-lg lg:w-1/2 bg-cardBackground transition-all ease-in-out duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>{children}</div>
        <div className="flex justify-end">
          <Button onClick={onAccept}>{acceptButtonText}</Button>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
