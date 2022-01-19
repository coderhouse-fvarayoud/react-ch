import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Coderhouse | React" />
    </div>
  )
}

export default App
