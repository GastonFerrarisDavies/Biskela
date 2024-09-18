import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeftFromLine } from 'lucide-react';
import { data } from '../mocks/data.js';

export default function Products() {
  const [filter, setFilter] = useState('todos')

  const filtrar = (p) => (filter === "todos" || filter === p.category.toLowerCase())

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const product = {
    burger_name: "Crispy",
    category: "Hamburguesa",
    price: 6,
    id: 3
  }

  return (
    <>
      <div className="flex flex-row justify-between align-center w-screen p-3 bg-gebum-violet">
      <span className="text-white font-extrabold text-[1.3rem]" onClick={goHome} >Gebum</span>
      <ArrowLeftFromLine className="" onClick={() => navigate(-1)} color="white" size={30} />
      </div>
      <div className="container mx-auto px-4 pt-3">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mx-auto flex gap-2">
            <div className="relative">
              <select
                className="bg-gebum-gray border-none border-gray-300 text-black text-md rounded-lg ring-red-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                value={filter}
                onChange={(v) => setFilter(v.target.value)}
             >
               <option value="todos">Todos los productos</option>
                <option value="hamburguesa">Hamburguesas</option>
                <option value="extra">Extras</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.filter((a) => filtrar(a)).map(product => (
          <div key={product.id} className="flex flex-col justify-between align-center bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-row justify-between align-middle">
            <div className="p-4 mx-4">
              <h2 className="text-lg font-semibold mb-2">{product.burger_name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            </div>
              <img src='../../public/hambur.png' alt={product.name} className="my-auto mx-4 h-[110px]" />
          </div>
          <div className="m-2">
            <button className="m-auto w-full bg-gebum-violet text-white py-2 rounded-md hover:bg-gebum-violet transition-colors">
                Agregar
            </button>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}