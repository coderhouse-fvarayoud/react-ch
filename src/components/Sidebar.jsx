import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Portal from './Portal'

const Sidebar = ({ visible, onClose }) => {
  const { categories } = useAppContext()

  return (
    <AnimatePresence>
      {visible ? (
        <Portal>
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, x: '-100%', transition: { duration: 0.25 } }}
            className="bg-black p-4 shadow-2xl text-white flex flex-col fixed top-[64px] bottom-0 left-0 w-full md:w-60"
          >
            <p className="font-bold text-xl">Categorias</p>
            {categories && (
              <ul className="flex gap-4 flex-col py-10">
                {categories.map((category, idx) => (
                  <Link
                    onClick={onClose}
                    key={category.id}
                    to={`/category/${category.id}`}
                  >
                    <li key={idx} className="hover:font-bold py-1 text-lg">
                      {category.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </motion.div>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}

export default Sidebar
