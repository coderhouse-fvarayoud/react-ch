import MenuIcon from '../assets/menu.svg'

const options = [
  {
    name: 'Categoria 1',
    href: 'about:blank',
  },
  {
    name: 'Categoria 2',
    href: 'about:blank',
  },
  {
    name: 'Categoria 3',
    href: 'about:blank',
  },
  {
    name: 'Categoria 4',
    href: 'about:blank',
  },
]

const NavBar = () => {
  return (
    <div className="sticky flex items-center justify-between w-full h-16 px-10 text-white bg-black">
      <div className="block cursor-pointer lg:hidden">
        <img src={MenuIcon} alt="Menu icon" />
      </div>
      <a className="text-xl font-bold" href="/">
        Logo
      </a>
      <div className="hidden lg:block">
        <ul className="flex gap-4">
          {options.map((option) => (
            <li>
              <a href={option.href}>{option.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a href="about:blank">Iniciar sesión</a>
      </div>
    </div>
  )
}

export default NavBar
