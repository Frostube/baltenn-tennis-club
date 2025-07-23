import { useParams, Link, useNavigate } from 'react-router-dom'
import { Calendar, User, Eye, ArrowLeft, Share2, Facebook, Twitter, LinkIcon, ArrowRight, Clock } from 'lucide-react'
import { getArticleById, getRelatedArticles } from '../data/articles'

const ArticlePage = () => {
  const { articleId } = useParams()
  const navigate = useNavigate()
  const article = getArticleById(articleId)

  if (!article) {
    return (
      <div className="min-h-screen pt-16 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedArticles = getRelatedArticles(article.id, article.category, 3)

  const handleShare = (platform) => {
    const url = window.location.href
    const title = article.title
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        // Show notification
        const notification = document.createElement('div')
        notification.textContent = 'Link copied to clipboard!'
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
        break
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Back Button */}
      <div className="section-padding py-6">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-neon-green transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </button>
      </div>

      {/* Article Header */}
      <article className="section-padding pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="h-64 md:h-96 w-full overflow-hidden">
              <img
                src={`/${article.image}`}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8 lg:p-12">
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-neon-green text-black text-sm font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Eye size={16} />
                  <span>{article.views} views</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Author and Date */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <User size={18} />
                    <span className="font-medium">By {article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">Share:</span>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                    title="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-full border border-gray-300 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-200"
                    title="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-2 rounded-full border border-gray-300 hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-200"
                    title="Copy Link"
                  >
                    <LinkIcon size={16} />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
              <div className="bg-white rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Related Articles
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/blog/${relatedArticle.id}`}
                      className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="h-48 w-full overflow-hidden">
                        <img
                          src={`/${relatedArticle.image}`}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-neon-green text-black text-xs font-semibold px-2 py-1 rounded-full">
                            {relatedArticle.category}
                          </span>
                          <span className="text-gray-400 text-xs">{relatedArticle.readTime}</span>
                        </div>
                        
                        <h3 className="font-bold text-lg text-black mb-2 group-hover:text-neon-green transition-colors duration-200 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3 line-clamp-3 text-sm">
                          {relatedArticle.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{relatedArticle.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
                    View All Articles
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12">
          <div className="bg-black rounded-3xl shadow-xl p-1 md:p-2">
            <div className="bg-black rounded-2xl p-6 md:p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Enjoyed this article? <span className="text-neon-green">Subscribe for More</span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest tennis insights, tips, and club updates delivered directly to your inbox.
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
        </div>
      </article>
    </div>
  )
}

export default ArticlePage 