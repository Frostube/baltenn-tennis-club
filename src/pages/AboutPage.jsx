import { Users, Trophy, Heart, Award, Target, Clock, MapPin, Phone, Mail, Star, Calendar, CheckCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-neon-green" />,
      title: "Expert Coaching",
      description: "Our certified coaches bring years of professional experience and expertise to help you reach your tennis goals.",
      highlight: "15+ Years Average Experience"
    },
    {
      icon: <Trophy className="w-12 h-12 text-neon-green" />,
      title: "Competitive Excellence",
      description: "Experience high-level competitive play that challenges your skills and pushes you to new levels of performance.",
      highlight: "200+ Tournament Wins"
    },
    {
      icon: <Heart className="w-12 h-12 text-neon-green" />,
      title: "Welcoming Community",
      description: "Join a supportive community of tennis enthusiasts who share your passion for the sport and lifelong learning.",
      highlight: "500+ Active Members"
    }
  ]

  const coaches = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Head Coach & Club Director",
      image: "/coach1.avif",
      experience: "15+ years",
      specialty: "Professional Training & Tournament Prep",
      achievements: ["Former ATP Tour Player", "National Champion 2008", "USPTA Certified"],
      bio: "Maria brings world-class expertise to Baltenn, having competed professionally for over a decade before transitioning to coaching."
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Junior Development Coach",
      image: "/coach2.jpg",
      experience: "8+ years",
      specialty: "Youth Development & Mental Training",
      achievements: ["Junior Coach of the Year 2022", "Sports Psychology Degree", "200+ Junior Champions"],
      bio: "Specializing in nurturing young talent, James has guided dozens of juniors to regional and national championships."
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Fitness & Performance Coach",
      image: "/coach3.jpg",
      experience: "10+ years",
      specialty: "Physical Conditioning & Injury Prevention",
      achievements: ["Certified Strength Coach", "Sports Medicine Expert", "Olympic Training Experience"],
      bio: "Sarah ensures our players maintain peak physical condition while preventing injuries through scientific training methods."
    }
  ]

  const achievements = [
    {
      number: "500+",
      label: "Active Members",
      icon: <Users className="w-8 h-8 text-neon-green" />
    },
    {
      number: "15",
      label: "Professional Courts",
      icon: <Target className="w-8 h-8 text-neon-green" />
    },
    {
      number: "200+",
      label: "Tournament Wins",
      icon: <Trophy className="w-8 h-8 text-neon-green" />
    },
    {
      number: "14",
      label: "Years of Excellence",
      icon: <Award className="w-8 h-8 text-neon-green" />
    }
  ]

  const facilities = [
    "12 Professional Hard Courts",
    "4 Clay Courts with Advanced Drainage",
    "Indoor Climate-Controlled Courts",
    "High-Speed Video Analysis Systems",
    "Modern Fitness Center",
    "Recovery & Wellness Area",
    "Pro Shop & Equipment Rental",
    "Clubhouse with Café"
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <SEOHead
        title="About Baltenn Tennis Club - Your Premier Tennis Destination"
        description="Discover the story of Baltenn Tennis Club, our commitment to excellence, and the world-class facilities we offer. Join our thriving community of tennis enthusiasts."
        keywords="tennis club, tennis lessons, tennis training, competitive tennis, community tennis, sports facility, tennis courts, tennis equipment"
      />
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 lg:p-12 text-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-black rounded-full"></div>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-black/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-black/80 text-sm font-medium">EST. 2010</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  About Baltenn Tennis Club
                </h1>
                <p className="text-black/80 text-lg md:text-xl leading-relaxed mb-8">
                  Where passion meets excellence. Discover our journey of 14 years in developing tennis champions and building a thriving tennis community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#story" className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                    Our Story
                  </a>
                  <a href="#coaches" className="bg-white/20 border border-black text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                    Meet Our Team
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/20 rounded-2xl p-4">
                  <img src="/our story.jpg" alt="Tennis Club" className="w-full h-80 object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our <span className="text-neon-green">Achievements</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and community impact
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Our <span className="text-neon-green">Story</span>
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-black">Founded in 2010</strong>, Baltenn Tennis Club began with a simple vision: to create a world-class tennis facility where players of all levels could pursue their passion and reach their full potential.
                  </p>
                  <p>
                    What started as a small community initiative has evolved into one of the region's premier tennis destinations. Our commitment to excellence in coaching, facilities, and member experience has attracted tennis enthusiasts from all walks of life.
                  </p>
                  <p>
                    <strong className="text-black">We believe tennis is more than a sport</strong> – it's a vehicle for personal growth, character development, and lifelong friendships. Our holistic approach combines technical training, mental conditioning, and physical fitness to develop complete players.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 active members, from beginners taking their first lesson to competitive players pursuing professional careers. Our success is measured not just in trophies won, but in the confidence, skills, and joy our members gain through tennis.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-neon-green/20 to-tennis-green/20 rounded-2xl p-4">
                  <img src="/tennis-court-bg.jpg" alt="Tennis Courts" className="w-full h-96 object-cover rounded-xl shadow-lg" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-green mb-1">14+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Our <span className="text-neon-green-readable">Values</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These core values guide everything we do at Baltenn Tennis Club.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 text-center group-hover:text-neon-green transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center mb-4">
                    {value.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-neon-green text-black text-sm font-semibold px-3 py-1 rounded-full">
                      {value.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Coaches Section */}
      <section id="coaches" className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Meet Our <span className="text-neon-green-readable">Expert Team</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our certified coaches bring years of experience and passion to help you achieve your tennis goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {coaches.map((coach) => (
                <div key={coach.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-1">{coach.name}</h3>
                    <p className="text-neon-green font-semibold mb-3">{coach.role}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><span className="font-medium text-black">Experience:</span> {coach.experience}</p>
                      <p><span className="font-medium text-black">Specialty:</span> {coach.specialty}</p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {coach.bio}
                    </p>

                    <div className="space-y-1">
                      <p className="text-xs font-medium text-black mb-2">Key Achievements:</p>
                      {coach.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-neon-green" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  World-Class <span className="text-neon-green">Facilities</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our state-of-the-art facilities provide the perfect environment for training, competition, and community building.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-neon-green flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-neon-green/20 to-tennis-green/20 rounded-2xl p-4">
                  <img src="/Junior Beginners Program.jpg" alt="Tennis Facilities" className="w-full h-96 object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding py-16">
        <div className="bg-black rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-black rounded-2xl p-6 md:p-8 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit <span className="text-neon-green">Baltenn</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to start your tennis journey? Come visit us and experience the Baltenn difference firsthand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin size={32} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">123 Tennis Court Lane<br />Sports City, SC 12345</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone size={32} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-TENNIS<br />Available 7 days a week</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock size={32} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-300">Mon-Sun: 6:00 AM - 10:00 PM<br />Year-round operation</p>
              </div>
            </div>

            <div className="text-center">
              <a href="/membership" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                <Trophy size={20} />
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 