
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { getProductById } from '../data/products'

const ProductDetailPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  
  const { addToCart } = useCart()

  if (!product) return <div className="p-10 text-center">Product not found.</div>

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    
    addToCart(product, product.colors[selectedColor], selectedSize, 1)
    setAddedToCart(true)
    
    // Reset the added state after 2 seconds
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft size={20} />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden max-w-lg mx-auto">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 max-w-md">
            {/* Category & Name */}
            <div>
              <p className="text-sm text-gray-600 mb-1">{product.category}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-black leading-tight">{product.name}</h1>
            </div>

            {/* Price */}
            <div className="text-xl font-semibold text-black">
              {product.price}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-base font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                      selectedColor === index 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold">Select Size</h3>
                <button className="text-sm text-gray-600 hover:text-black transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border text-center text-sm transition-colors ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Button */}
            <button 
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 ${
                addedToCart 
                  ? 'bg-green-600 text-white' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <ShoppingBag size={18} />
              {addedToCart ? 'Added to Cart!' : 'Add to Bag'}
            </button>

            {/* Favorite Button */}
            <button className="w-full border border-gray-300 py-3 rounded-full font-semibold hover:border-gray-500 transition-colors flex items-center justify-center gap-2">
              <Heart size={18} />
              Favourite
            </button>

            {/* Product Description */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm">
                {product.description}
              </p>
              
              <div>
                <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6 space-y-3">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-sm">
                  Product Details
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-3 text-gray-700 text-sm">
                  <p>High-quality {product.category.toLowerCase()} designed for optimal performance and durability.</p>
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-sm">
                  Free Delivery and Returns
                  <span className="transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-3 text-gray-700 text-sm">
                  <p>Free standard delivery on orders over €50. Free returns within 30 days.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
