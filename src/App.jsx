import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import { AppProvider } from './context/AppContext'

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </AppProvider>
)

export default App
