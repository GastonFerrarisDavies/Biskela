import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronDown,ArrowLeftFromLine } from 'lucide-react';
import { data } from '../mocks/data.js';

export default function Cart() {
  const [filter, setFilter] = useState('todos')

  const filtrar = (p) => (filter === "todos" || filter === p.category.toLowerCase())

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
    <div className="flex flex-row justify-between align-center w-screen p-3 bg-gebum-violet">
    <span className="text-white font-extrabold text-[1.3rem]" onClick={goHome} >Gebum</span>
    <ArrowLeftFromLine className="" onClick={() => navigate(-1)} color="white" size={30} />
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mx-auto flex gap-4">
          <div className="relative">
            <select
              className="bg-gebum-gray border-none border-gray-300 text-gray-900 text-md rounded-lg focus:ring-gebum-violet focus:border-gebum-violet block w-full p-3 dark:bg-[#b5b5b5] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gebum-violet"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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