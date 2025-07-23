import { useEffect } from 'react'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author,
  publishedTime,
  modifiedTime 
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      if (!content) return
      
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${property}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, property)
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author)

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true) 
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:site_name', 'Baltenn Tennis Club', true)

    // Twitter Card tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    updateMetaTag('twitter:card', 'summary_large_image', true)

    // Article specific tags
    if (type === 'article') {
      updateMetaTag('article:author', author, true)
      updateMetaTag('article:published_time', publishedTime, true)
      updateMetaTag('article:modified_time', modifiedTime, true)
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (url) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', url)
    }

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime])

  return null // This component doesn't render anything
}

export default SEOHead 