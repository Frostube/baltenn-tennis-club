import { Link } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../contexts/CartContext'

const CartPage = () => {
  const { items: cartItems, updateQuantity, removeFromCart } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.21 // 21% VAT
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Start Shopping
              <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-black mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-black text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.color, item.size)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="flex gap-4 text-sm text-gray-600 mb-4">
                      <span>Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-semibold text-black">€{(item.price * item.quantity).toFixed(2)}</p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-600">€{item.price.toFixed(2)} each</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-4">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (VAT 21%)</span>
                  <span className="font-medium">€{tax.toFixed(2)}</span>
                </div>
                
                {shipping === 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                    🎉 You qualify for free shipping!
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-black">Total</span>
                    <span className="text-lg font-bold text-black">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors mb-4">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Secure checkout with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage 