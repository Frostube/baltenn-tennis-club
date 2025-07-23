// SEO utility functions for generating structured data and meta tags

export const generatePageMetaTags = (pageType, customData = {}) => {
  const baseUrl = 'https://baltenn.com'
  const defaultImage = `${baseUrl}/og-image.jpg`
  
  const pages = {
    home: {
      title: 'Baltenn Tennis Club - Premier Tennis Club | Professional Coaching & Programs',
      description: 'Join Baltenn Official Tennis Club! Professional coaching, modern facilities, junior & adult programs, tournaments, and tennis equipment. Elevate your game with our expert coaches and vibrant tennis community.',
      keywords: 'tennis club, tennis coaching, tennis lessons, junior tennis, adult tennis, tennis programs, tennis equipment, tennis courts, professional tennis coach, tennis community, tennis tournaments',
      url: baseUrl,
      image: defaultImage,
      type: 'website'
    },
    about: {
      title: 'About Baltenn Tennis Club - Your Premier Tennis Destination',
      description: 'Discover the story of Baltenn Tennis Club, our commitment to excellence, and the world-class facilities we offer. Join our thriving community of tennis enthusiasts.',
      keywords: 'tennis club about, tennis facilities, tennis community, professional tennis coaching, tennis club history, tennis excellence',
      url: `${baseUrl}/about`,
      image: defaultImage,
      type: 'website'
    },
    programs: {
      title: 'Tennis Programs | Professional Tennis Lessons & Training',
      description: 'Discover our comprehensive tennis programs for players of all ages and skill levels. From beginner to advanced, we offer personalized coaching and training options.',
      keywords: 'tennis programs, tennis lessons, tennis training, tennis coaching, tennis for beginners, tennis for adults, tennis camps, private coaching',
      url: `${baseUrl}/programs`,
      image: defaultImage,
      type: 'website'
    },
    shop: {
      title: 'Tennis Shop - Premium Tennis Equipment and Apparel',
      description: 'Shop the best tennis equipment and apparel for players of all levels. From professional rackets to court shoes, find everything you need to elevate your game.',
      keywords: 'tennis shop, tennis equipment, tennis rackets, tennis shoes, tennis bags, tennis apparel, tennis gear, tennis store',
      url: `${baseUrl}/shop`,
      image: defaultImage,
      type: 'website'
    },
    blog: {
      title: 'Tennis News & Blog - Latest Updates and Tips',
      description: 'Stay updated with the latest tennis news, expert tips, and club updates from our community of tennis professionals and enthusiasts.',
      keywords: 'tennis news, tennis blog, tennis tips, tennis updates, tennis analysis, tennis community, tennis articles',
      url: `${baseUrl}/blog`,
      image: defaultImage,
      type: 'website'
    },
    contact: {
      title: 'Contact Baltenn Tennis Club - Get in Touch',
      description: 'Contact Baltenn Tennis Club for membership inquiries, tennis programs, court reservations, and more. Located in Sports City, SC. We\'re here to help start your tennis journey.',
      keywords: 'contact tennis club, tennis club location, sports city tennis, tennis membership, tennis court reservations, tennis contact',
      url: `${baseUrl}/contact`,
      image: defaultImage,
      type: 'website'
    },
    membership: {
      title: 'Tennis Club Membership - Join Baltenn Tennis Club',
      description: 'Join Baltenn Tennis Club and enjoy unlimited court access, professional coaching, exclusive events, and member benefits. Choose from individual, family, or student memberships.',
      keywords: 'tennis membership, tennis club membership, join tennis club, tennis club benefits, tennis court access, tennis member privileges',
      url: `${baseUrl}/membership`,
      image: defaultImage,
      type: 'website'
    }
  }

  const pageData = pages[pageType] || pages.home
  return { ...pageData, ...customData }
}

export const generateProgramStructuredData = (program) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': program.name,
    'description': program.description,
    'provider': {
      '@type': 'Organization',
      'name': 'Baltenn Tennis Club',
      'url': 'https://baltenn.com'
    },
    'educationalLevel': program.level,
    'duration': program.duration,
    'offers': {
      '@type': 'Offer',
      'price': program.price.replace(/[^\d.,]/g, ''),
      'priceCurrency': 'EUR',
      'availability': 'https://schema.org/InStock'
    },
    'audience': {
      '@type': 'Audience',
      'audienceType': program.participants
    }
  }
}

export const generateProductStructuredData = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description || `Premium ${product.category.toLowerCase()} for tennis players`,
    'category': product.category,
    'brand': {
      '@type': 'Brand',
      'name': 'Baltenn Pro Shop'
    },
    'offers': {
      '@type': 'Offer',
      'price': product.price.replace(/[^\d.,]/g, ''),
      'priceCurrency': 'EUR',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Baltenn Tennis Club'
      }
    },
    'image': product.image
  }
}

export const generateArticleStructuredData = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.excerpt,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'datePublished': article.date,
    'dateModified': article.date,
    'publisher': {
      '@type': 'Organization',
      'name': 'Baltenn Tennis Club',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://baltenn.com/logo.png'
      }
    },
    'image': {
      '@type': 'ImageObject',
      'url': `https://baltenn.com/${article.image}`
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://baltenn.com/blog/${article.id}`
    }
  }
}

// Performance optimization for images
export const generateImageSEO = (src, alt, width, height) => {
  return {
    src,
    alt,
    loading: 'lazy',
    decoding: 'async',
    ...(width && { width }),
    ...(height && { height })
  }
}

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  }
} 