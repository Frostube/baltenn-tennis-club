import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Membership', href: '/membership' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ]

  const programs = [
    { name: 'Junior Programs', href: '/programs#junior' },
    { name: 'Adult Sessions', href: '/programs#adult' },
    { name: 'Private Coaching', href: '/programs#private' },
    { name: 'Tennis Camps', href: '/programs#camps' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold">
              <span className="text-neon-green">baltenn</span>.
            </Link>
            <p className="text-gray-300 leading-relaxed">
              At Baltenn Official Tennis Club, we're passionate about tennis and dedicated to 
              fostering a vibrant community for players of all levels.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-neon-green flex-shrink-0" />
                <span className="text-sm">123 Tennis Court Lane, Sports City, SC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-neon-green flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-TENNIS</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-neon-green flex-shrink-0" />
                <span className="text-sm">info@baltenn.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-green">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-neon-green transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-green">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    to={program.href} 
                    className="text-gray-300 hover:text-neon-green transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neon-green">Club Hours</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-neon-green">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-colors duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news, updates, and exclusive offers from Baltenn Tennis Club.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Baltenn Tennis Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-neon-green transition-colors duration-200">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 