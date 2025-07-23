import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="text-neon-green text-3xl md:text-4xl leading-none">baltenn.</span>
            {/* <span className="text-2xl md:text-3xl">🎾</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-5">
            <Link to="/cart" className="text-gray-300 hover:text-neon-green transition-colors duration-200">
              <ShoppingCart size={24} />
            </Link>
            <Link to="/membership" className="btn-primary">
              Get Membership
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 transform ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  } ${
                    isActive(item.href)
                      ? 'text-neon-green'
                      : 'text-gray-300 hover:text-neon-green'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/membership" 
                className={`btn-primary inline-block text-center mt-4 transform transition-all duration-300 ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${navigation.length * 50}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Membership
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 