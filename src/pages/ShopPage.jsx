import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const products = [
  {
    id: 1,
    name: 'Wilson Pro Staff Racket',
    category: 'Gear',
    price: '€229.00',
    image: '/Wilson Pro Staff Racket.webp'
  },
  {
    id: 2,
    name: 'Nike Court Shoes',
    category: 'Footwear',
    price: '€109.00',
    image: '/Nike Court Shoes.webp'
  },
  {
    id: 3,
    name: 'Head Tennis Bag',
    category: 'Gear',
    price: '€89.00',
    image: '/Head Tennis Bag.webp'
  },
  {
    id: 4,
    name: 'Training Jersey',
    category: 'Jersey',
    price: '€45.00',
    image: '/Training Jersey.avif'
  }
]

const categories = ['All', 'Jersey', 'Footwear', 'Gear']

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title="Tennis Shop - Premium Tennis Equipment and Apparel"
        description="Discover the best tennis equipment and apparel for players of all levels. From rackets to shoes, we have everything you need."
        keywords="tennis, tennis equipment, tennis shoes, tennis rackets, tennis bags, tennis apparel"
      />
      <div className="section-padding py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tennis <span className="text-neon-green">Shop</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Premium tennis equipment and apparel for every player.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition"
            >
              <Link to={`/shop/${product.id}`} className="block group">
                <div className="w-full h-64 rounded-xl mb-6 flex items-center justify-center" style={{ background: '#f6f6f6' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <p className="text-neon-green font-bold text-lg mb-4">
                  {product.price}
                </p>
              </Link>
              <div className="flex gap-2">
                <Link 
                  to={`/shop/${product.id}`}
                  className="flex-1 bg-white border border-black text-black py-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  View Item
                </Link>
                <button className="bg-black text-white py-2 px-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage 