import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Clock, Star } from 'lucide-react'

const ProgramsPreview = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Junior Club', 'Adult Sessions', 'Private Lessons', 'Tennis Camp']
  
  const programs = [
    {
      id: 1,
      name: 'Junior Beginners Program',
      category: 'Junior Club',
      description: 'Our Junior Beginners Program introduces young players to the basics of tennis in a fun and engaging way.',
      image: '/Junior Beginners Program.jpg',
      duration: '1 hour',
      participants: '5-12 years',
      level: 'Beginner',
      price: '$45/session'
    },
    {
      id: 2,
      name: 'Junior Intermediate Program',
      category: 'Junior Club',
      description: 'Designed for young players who have mastered the basics, focuses on developing more advanced strokes and strategies.',
      image: '/Junior Intermediate Program.jpg',
      duration: '1,30 hours',
      participants: '12-16 years',
      level: 'Intermediate',
      price: '$65/session'
    },
    {
      id: 3,
      name: 'Junior Advanced Program',
      category: 'Junior Club',
      description: 'For young players looking to take their game to the next level, the Junior Program offers high-performance training.',
      image: '/Junior Program.jpg',
      duration: '2 hours',
      participants: '16-20 years',
      level: 'Advanced',
      price: '$85/session'
    }
  ]

  const filteredPrograms = activeFilter === 'All' 
    ? programs 
    : programs.filter(program => program.category === activeFilter)

  return (
    <section className="mt-8">
      <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm mb-2">Elevate your game</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
              Tennis Programs for Everyone
              <br />
              <span className="text-black">from Beginners to Pros</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === filter
                    ? 'bg-neon-green text-black shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white border border-gray-200 rounded-2xl hover:bg-neon-green transition-all duration-300 group min-h-[380px] flex flex-col p-4">
                  <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden rounded-xl mb-4">                  <img 
                    src={`${program.image}`} 
                    alt={program.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-black text-lg">🎾</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 group-hover:bg-white text-black text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300">
                      {program.participants}
                    </span>
                    <span className="bg-gray-100 group-hover:bg-white text-black text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300">
                      {program.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black group-hover:text-black mb-3">{program.name}</h3>
                  <p className="text-gray-600 group-hover:text-black mb-6 flex-1 text-sm leading-relaxed">{program.description}</p>
                  
                  <button className="w-full bg-white group-hover:bg-black border-2 border-black text-black group-hover:text-neon-green font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Programs CTA */}
          <div className="text-center">
            <Link to="/programs" className="btn-primary inline-flex items-center gap-2">
              View All Programs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsPreview 