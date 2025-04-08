
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Admin from './pages/Admin';
import FinPedido from './pages/FinPedido';
import InicioSesion from './pages/InicioSesion';
import Registro from './pages/Registro';
import { CartProvider } from './context/Cart';
import { AuthProvider } from './context/sesion';
import './App.css'

export function App() {

  return (
    <CartProvider>
    <AuthProvider>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/FinPedido" element={<FinPedido />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
    </>
    </AuthProvider>
    </CartProvider>
  )
}
 