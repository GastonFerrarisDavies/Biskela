
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Admin from './pages/Admin';
import './App.css'

export function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
    </>
  )
}
 