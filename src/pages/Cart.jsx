import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search,ArrowLeftFromLine } from 'lucide-react'
// Sample product data
const products = [
  { id: 1, name: 'Classic T-Shirt', price: 19.99, category: 'Clothing', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Leather Wallet', price: 39.99, category: 'Accessories', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Running Shoes', price: 89.99, category: 'Footwear', image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Wireless Earbuds', price: 129.99, category: 'Electronics', image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Denim Jeans', price: 59.99, category: 'Clothing', image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Smartwatch', price: 199.99, category: 'Electronics', image: '/placeholder.svg?height=200&width=200' },
]

export default function Cart() {
  const [sortBy, setSortBy] = useState('name')
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
      <span className="text-[1.3rem]">Gebum</span>
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
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}