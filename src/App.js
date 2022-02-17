import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { AppProvider } from './context/AppContext'

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/item/:itemID" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
)

export default App
