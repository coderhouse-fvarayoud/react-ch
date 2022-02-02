import MenuIcon from '../assets/menu.svg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

const NavBar = () => (
  <header className="sticky flex items-center justify-between w-full h-16 px-10 text-white bg-black">
    <div className="block cursor-pointer lg:hidden">
      <img src={MenuIcon} alt="Menu icon" />
    </div>
    <Link to="/">
      <div className="text-xl font-bold">Logo</div>
    </Link>
    <div className="hidden lg:block">
      <ul className="flex gap-4">
        {categories.map((category, idx) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            <li key={idx}>{category.name}</li>
          </Link>
        ))}
      </ul>
    </div>
    <Link to="/cart">
      <div className="flex items-center gap-4">
        <span>Iniciar sesión</span>
        <CartWidget counter="0" />
      </div>
    </Link>
  </header>
)

export default NavBar
