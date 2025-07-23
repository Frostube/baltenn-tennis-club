export const products = [
  {
    id: 1,
    name: 'Wilson Pro Staff Racket',
    category: 'Gear',
    price: '€229.00',
    image: '/Wilson Pro Staff Racket.webp',
    images: ['/Wilson Pro Staff Racket.webp', '/Wilson Pro Staff Racket.webp', '/Wilson Pro Staff Racket.webp'],
    description: 'Elite-level racket built for power and control. Professional grade equipment used by top players worldwide.',
    features: ['Professional grade carbon fiber construction', 'Enhanced sweet spot for power', 'Superior control and precision', 'Comfortable grip design'],
    colors: ['Black/Red', 'White/Blue', 'All Black'],
    sizes: ['Grip 1', 'Grip 2', 'Grip 3', 'Grip 4']
  },
  {
    id: 2,
    name: 'Nike Court Shoes',
    category: 'Footwear',
    price: '€109.00',
    image: '/Nike Court Shoes.webp',
    images: ['/Nike Court Shoes.webp', '/Nike Court Shoes.webp', '/Nike Court Shoes.webp'],
    description: 'Designed for ultimate grip and comfort on court. Professional tennis shoes for serious players.',
    features: ['Superior court traction', 'Comfortable cushioning', 'Durable construction', 'Breathable design'],
    colors: ['White/Navy', 'Black/White', 'Blue/Grey'],
    sizes: ['39', '40', '41', '42', '43', '44']
  },
  {
    id: 3,
    name: 'Head Tennis Bag',
    category: 'Gear',
    price: '€89.00',
    image: '/Head Tennis Bag.webp',
    images: ['/Head Tennis Bag.webp', '/Head Tennis Bag.webp', '/Head Tennis Bag.webp'],
    description: 'Spacious and stylish gear bag for serious players. Multiple compartments for rackets, shoes, and accessories.',
    features: ['Multiple racket compartments', 'Ventilated shoe compartment', 'Durable construction', 'Comfortable carry straps'],
    colors: ['Black/Blue', 'Navy/White', 'Black/Red'],
    sizes: ['6 Rackets', '9 Rackets', '12 Rackets']
  },
  {
    id: 4,
    name: 'Training Jersey',
    category: 'Jersey',
    price: '€45.00',
    image: '/Training Jersey.avif',
    images: ['/Training Jersey.avif', '/Training Jersey.avif', '/Training Jersey.avif'],
    description: 'Lightweight and breathable training top perfect for practice sessions and casual play.',
    features: ['Moisture-wicking fabric', 'Comfortable fit', 'Durable construction', 'Easy care'],
    colors: ['White', 'Black', 'Navy', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getFeaturedProducts = (count = 3) => {
  return products.slice(0, count)
} 