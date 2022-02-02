import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryID" element={<ItemListContainer />} />
      <Route path="/item/:itemID" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
)

export default App
