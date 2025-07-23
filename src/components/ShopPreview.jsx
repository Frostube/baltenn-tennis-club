import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { getFeaturedProducts } from '../data/products'

const ShopPreview = () => {
  const { addToCart } = useCart()
  const featuredProducts = getFeaturedProducts(3)

  const handleQuickAdd = (product) => {
    // Add with default selections (first color, first size)
    addToCart(product, product.colors[0], product.sizes[0], 1)
    
    // Optional: Show a quick notification
    const notification = document.createElement('div')
    notification.textContent = 'Added to cart!'
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #22c55e;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 1000;
      font-weight: 600;
    `
    document.body.appendChild(notification)
    setTimeout(() => notification.remove(), 2000)
  }

  return (
    <section className="mt-8">
      <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Catalog Promo */}
            <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 text-black">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Browse Our
                <br />
                Catalog for
                <br />
                <span className="text-black">Tennis Product</span>
              </h2>
              
              <p className="text-black/80 text-base mb-6 max-w-md">
                Discover premium tennis equipment, apparel, and accessories 
                from top brands. Everything you need to elevate your game.
              </p>

              <Link to="/shop" className="bg-black text-neon-green font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-2">
                Shop Now
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Side - Featured Products */}
            <div className="space-y-4">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                  Featured Products
                </h3>
                <p className="text-gray-600">
                  Hand-picked essentials for every tennis player
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {featuredProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/shop/${product.id}`}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group cursor-pointer block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="text-gray-400 text-xl hidden">🎾</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500">{product.category}</span>
                        </div>
                        <h4 className="font-bold text-base text-black mb-1 group-hover:text-neon-green transition-colors duration-200">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-black">{product.price}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {product.colors.length} colors • {product.sizes.length} sizes
                        </div>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleQuickAdd(product)
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-neon-green text-black p-2 rounded-lg hover:bg-tennis-green"
                        title="Quick add to cart"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center lg:text-left">
                <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                  View All Products
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopPreview 