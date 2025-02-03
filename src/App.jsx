
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
<<<<<<< HEAD
<<<<<<< HEAD
import Admin from './pages/Admin';
=======
import Prueba from './pages/Prueba';
>>>>>>> 421941c2b4219465d2d69ed6a84cfdf91dcb92fb
=======
import Prueba from './pages/Prueba';
>>>>>>> 421941c2b4219465d2d69ed6a84cfdf91dcb92fb
import './App.css'

export function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/admin" element={<Admin />} />
=======
        <Route path="/prueba" element={<Prueba />} />
>>>>>>> 421941c2b4219465d2d69ed6a84cfdf91dcb92fb
=======
        <Route path="/prueba" element={<Prueba />} />
>>>>>>> 421941c2b4219465d2d69ed6a84cfdf91dcb92fb
      </Routes>
    </Router>
    </>
  )
}
 