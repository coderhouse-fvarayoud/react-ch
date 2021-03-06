import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <header>
      <Sidebar
        visible={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="fixed z-40 top-0 left-0 flex items-center justify-between w-full h-16 px-10 text-white bg-black">
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
