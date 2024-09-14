import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search,ArrowLeftFromLine } from 'lucide-react'
// Sample product data
const products = [
  { id: 1, name: 'Classy', price: 5.000, category: 'Hamburguesa', image: '../../public/hambur.png' },
  { id: 2, name: 'Crispy', price: 39.99, category: 'Hamburguesa', image: '../../public/hambur.png' },
  { id: 3, name: 'Chama', price: 89.99, category: 'Hamburguesa', image: '../../public/hambur.png' },
  { id: 4, name: 'De Verga', price: 129.99, category: 'Hamburguesa', image: '../../public/hambur.png' },
  { id: 5, name: 'Big Bum', price: 59.99, category: 'Hamburguesa', image: '/../../public/hambur.png' },
  { id: 6, name: 'Patty Melt', price: 199.99, category: 'Hamburguesa', image: '../../public/hambur.png' },
]

export default function Cart() {
  const [sortBy] = useState('name')
  const [filterCategory, setFilterCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAndSortedProducts = products
    .filter(product => 
      (filterCategory === 'All' || product.category === filterCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'priceLow') return a.price - b.price
      if (sortBy === 'priceHigh') return b.price - a.price
      return 0
    })

  return (
    <>
    <div className="flex flex-row justify-between align-center w-screen p-3 bg-gebum-violet">
      <span className="text-white font-extrabold text-[1.3rem]">Gebum</span>
      <ArrowLeftFromLine className="" color="white" size={30} />
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative mb-4 md:mb-0 mx-auto">
          <input
            type="text"
            placeholder="Buscá productos..."
            className="pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        
        <div className="mx-auto flex gap-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border rounded-md pl-4 pr-10 py-2"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">Todos los productos</option>
              <option value="Clothing">Hamburguesas</option>
              <option value="Accessories">Extras</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} className="flex flex-col justify-between align-center bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-row justify-between align-middle">
              <div className="p-4 mx-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              </div>
                <img src={product.image} alt={product.name} className="my-auto mx-4 h-[110px]" />
            </div>
            <div className="m-2">
              <button className="m-auto w-full bg-gebum-violet text-white py-2 rounded-md hover:bg-gebum-violet transition-colors">
                  Agregar
              </button>
            </div>
            
            
          </div>
        ))}
      </div>
    </div>
    </>
  )
}