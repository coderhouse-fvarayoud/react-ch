import MenuIcon from '../assets/menu.svg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Portal from './Portal'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faX,
  faCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <header>
      <Sidebar
        visible={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="sticky flex items-center justify-between w-full h-16 px-10 text-white bg-black">
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex cursor-pointer"
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faX : faBars} />
        </div>
        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
          <div className="text-xl font-bold">GameStore</div>
        </Link>
        <Link to="/cart" onClick={() => setIsSidebarOpen(false)}>
          <div className="flex items-center gap-4">
            <CartWidget />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default NavBar
