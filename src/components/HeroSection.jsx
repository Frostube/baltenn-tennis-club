import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  const quickLinks = [
    { name: 'Tennis Club', href: '/about' },
    { name: 'Coaching Program', href: '/programs' },
    { name: 'Professional Coach', href: '/about#coaches' },
    { name: 'Intense Match', href: '/programs#competitive' }
  ]

  return (
    <div className="w-full overflow-hidden">
      {/* Container 1: Main Hero Content */}
      <section className="w-full">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2 w-full">
          <div className="bg-neon-green rounded-2xl p-6 md:p-8 text-black relative w-full overflow-hidden">
            {/* About us label */}
            <div className="absolute top-4 left-6 md:top-6 md:left-8">
              <span className="text-black/70 text-sm font-medium">About us</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mt-8">
              {/* Left Column - Main Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Welcome to Baltenn.
                    <br />
                    Official Tennis Club!
                  </h1>
                  
                  <p className="text-black/80 text-lg md:text-xl leading-relaxed">
                    At Baltenn Official Tennis Club, we are passionate about the game of tennis and dedicated to 
                    fostering a vibrant community for players of all levels. Established with a mission to promote 
                    excellence in tennis, our club offers top-notch facilities, professional coaching, and a 
                    supportive environment for players to thrive.
                  </p>
                </div>
              </div>

              {/* Right Column - Quick Links & CTA */}
              <div className="space-y-5 flex flex-col lg:items-end items-center">
                {/* Quick Links Dropdown-style Box */}
                <div className="bg-white rounded-2xl p-4 border border-gray-200 max-w-xs w-full lg:w-fit">
                  <div className="grid grid-cols-1 gap-3">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.href}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                      >
                        <span className="text-black font-medium text-sm">{link.name}</span>
                        <ArrowRight size={14} className="text-black opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <Link to="/programs" className="bg-black text-neon-green font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-2 text-lg">
                    Explore Now
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container 2: Tennis Ball CTA Card (Separate Section) */}
      <section className="mt-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2 w-full">
          <div 
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[400px] md:min-h-[500px] flex flex-col justify-between w-full"
            style={{ backgroundImage: 'url(/tennis-court-bg.jpg)' }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            {/* Content positioned on the left */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px] md:min-h-[500px] w-full">
              {/* Main content at top left */}
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-left leading-tight">
                  <span className="whitespace-nowrap">Take your game to</span><br />
                  <span className="text-neon-green">the next level</span>
                </h2>
                
                <p className="text-white/90 text-xl md:text-1xl text-left leading-relaxed">
                  Unlock your potential with our Premium 
                  experience for every level from beginner.
                </p>
              </div>

              {/* Button at bottom left */}
              <div className="mt-8">
                <button className="bg-white text-black font-semibold px-10 py-5 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-3 text-lg">
                  <Play size={22} />
                  Start 7-day trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection 