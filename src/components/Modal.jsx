import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'

const Modal = ({
  visible,
  onClose,
  onAccept,
  acceptButtonText = 'Aceptar',
  cancelButtonText,
  children,
}) => {
  return (
    <AnimatePresence>
      {visible ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.25 } }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`flex flex-col justify-between w-4/5 gap-4 p-6 rounded-lg lg:w-1/2 bg-cardBackground transition-all ease-in-out duration-500 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div>{children}</div>
              <div className="flex justify-end gap-4">
                {cancelButtonText ? (
                  <Button primary={false} onClick={onClose}>
                    Cancelar
                  </Button>
                ) : null}

                <Button primary={false} onClick={onAccept}>
                  {acceptButtonText}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
