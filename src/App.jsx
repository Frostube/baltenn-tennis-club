import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import EnrollmentPage from './pages/EnrollmentPage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import MembershipPage from './pages/MembershipPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:programId" element={<ProgramDetailPage />} />
            <Route path="/programs/:programId/enroll" element={<EnrollmentPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App 