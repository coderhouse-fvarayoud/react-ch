import MenuIcon from '../assets/menu.svg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import categories from '../data/categories.json'

const renderCategories = () => (
  <ul className="flex gap-4">
    {categories.map((category, idx) => (
      <Link key={category.id} to={`/category/${category.id}`}>
        <li key={idx}>{category.name}</li>
      </Link>
    ))}
  </ul>
)

const NavBar = () => {
  return (
    <header className="">
      <div className="sticky flex items-center justify-between w-full h-16 px-10 text-white bg-black">
        <div className="block cursor-pointer lg:hidden">
          <img src={MenuIcon} alt="Menu icon" />
        </div>
        <Link to="/">
          <div className="text-xl font-bold">Logo</div>
        </Link>
        <div className="hidden lg:block">{renderCategories()}</div>
        <Link to="/cart">
          <div className="flex items-center gap-4">
            <CartWidget />
          </div>
        </Link>
      </div>
      <div className="flex justify-center p-6 text-white lg:hidden bg-slate-900">
        {renderCategories()}
      </div>
    </header>
  )
}

export default NavBar
