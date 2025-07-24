import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, User, ArrowRight, Filter, Clock, Eye } from 'lucide-react'
import { articles } from '../data/articles'
import SEOHead from '../components/SEOHead'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [articlesPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const categories = ['All', 'News', 'Tournament', 'Analysis', 'Coaching', 'Tips', 'Events']

  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <SEOHead
        title="News & Blog - Tennis Club"
        description="Stay updated with the latest tennis news, tips, and club updates from our community of experts and enthusiasts."
        keywords="tennis news, tennis tips, tennis club, tennis tournaments, tennis analysis"
      />
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            News & <span className="text-neon-green">Blog</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Stay updated with the latest tennis news, tips, and club updates from our community of experts and enthusiasts.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2 mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
              {/* Search Bar */}
              <div className="relative flex-1 w-full lg:max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter size={20} className="text-gray-500" />
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-neon-green text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {paginatedArticles.length} of {filteredArticles.length} articles
                {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Featured Articles Grid */}
            {selectedCategory === 'All' && searchTerm === '' && currentPage === 1 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-black mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {articles.filter(article => article.featured).slice(0, 2).map(article => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.id}`}
                      className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-64 w-full overflow-hidden">
                        <img
                          src={`/${article.image}`}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-neon-green text-black text-xs font-semibold px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                          <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Eye size={12} />
                            <span>{article.views}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-bold text-xl text-black mb-3 group-hover:text-neon-green transition-colors duration-200">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="bg-transparent hover:bg-black border border-black text-black hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-sm inline-flex items-center gap-1">
                          Read Full Article
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Main Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="bg-white border border-gray-200 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden min-h-[420px]"
                >
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={`/${article.image}`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-neon-green text-black text-xs font-semibold px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-xs">{article.readTime}</span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Eye size={12} />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg text-black mb-2 group-hover:text-neon-green transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="bg-transparent hover:bg-black border border-black text-black hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-sm inline-flex items-center gap-1">
                      Read more
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      currentPage === index + 1
                        ? 'bg-neon-green text-black font-medium'
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
                >
                  Next
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Search size={48} className="mx-auto text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search terms or selected category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setCurrentPage(1)
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-black rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-black rounded-2xl p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Never Miss an <span className="text-neon-green">Update</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest tennis news, tips, and exclusive club updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green"
              />
              <button className="btn-primary px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage 