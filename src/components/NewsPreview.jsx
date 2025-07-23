import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { articles } from '../data/articles'

const NewsPreview = () => {
  // Get the first 3 articles for preview
  const previewArticles = articles.slice(0, 3)

  return (
    <section className="mt-8 space-y-4">
      {/* Header Container - Black Background */}
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 text-white">
        <div className="text-left">
          <p className="text-gray-300 text-sm mb-2">Discover articles covering trends</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white">News and Blog Update</span>
          </h2>
        </div>
      </div>

      {/* Cards Container - Light Gray Background */}
      <div className="bg-gray-50 rounded-3xl shadow-xl p-1 md:p-2">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {previewArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="bg-white border border-gray-200 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer overflow-hidden min-h-[380px]"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={`/${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-neon-green text-black text-xs font-semibold px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
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

          <div className="text-center">
            <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsPreview 