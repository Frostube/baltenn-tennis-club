import { useState } from 'react'
import { Clock, Users, Trophy, Star, ArrowRight, Target, Award, Heart, Calendar, Phone, Mail, CheckCircle, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const ProgramsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Junior Programs', 'Adult Programs', 'Private Coaching', 'Specialty Camps']
  
  const programs = [
    {
      id: 1,
      name: 'Little Aces (Ages 4-6)',
      category: 'Junior Programs',
      description: 'Our youngest players start their tennis journey with fun-filled activities that develop hand-eye coordination, motor skills, and love for the game using age-appropriate equipment.',
      image: '/Junior Beginners Program.jpg',
      duration: '45 minutes',
      participants: 'Ages 4-6',
      level: 'Beginner',
      price: '€35/session',
      groupSize: '4-6 players',
      schedule: 'Saturdays 9:00-9:45 AM',
      features: [
        'Modified equipment and courts',
        'Fun games and activities',
        'Parent participation encouraged',
        'Focus on fundamental movement',
        'Social skills development',
        'Positive reinforcement approach'
      ],
      highlights: ['Award-winning curriculum', 'Certified youth coaches', 'Small group attention']
    },
    {
      id: 2,
      name: 'Future Champions (Ages 7-10)',
      category: 'Junior Programs',
      description: 'Building on basic skills, this program introduces proper stroke technique, basic strategy, and competitive elements while maintaining a fun, encouraging environment.',
      image: '/Junior Program.jpg',
      duration: '1 hour',
      participants: 'Ages 7-10',
      level: 'Beginner to Intermediate',
      price: '€45/session',
      groupSize: '6-8 players',
      schedule: 'Saturdays 10:00-11:00 AM',
      features: [
        'Basic stroke development',
        'Introduction to scoring',
        'Fitness and agility training',
        'Character development focus',
        'Mini-tournament opportunities',
        'Progress tracking system'
      ],
      highlights: ['Tournament preparation', 'Character building', 'Skills progression']
    },
    {
      id: 3,
      name: 'Competitive Juniors (Ages 11-16)',
      category: 'Junior Programs',
      description: 'For serious young players ready to compete, this high-performance program focuses on advanced technique, mental toughness, and tournament preparation.',
      image: '/Junior Intermediate Program.jpg',
      duration: '1.5 hours',
      participants: 'Ages 11-16',
      level: 'Intermediate to Advanced',
      price: '€65/session',
      groupSize: '4-6 players',
      schedule: 'Weekdays 4:00-5:30 PM',
      features: [
        'Advanced stroke refinement',
        'Mental toughness training',
        'Match play strategies',
        'Physical conditioning',
        'Tournament entry assistance',
        'College recruitment guidance'
      ],
      highlights: ['College preparation', 'Tournament success', 'Elite coaching']
    },
    {
      id: 4,
      name: 'Adult Beginner Academy',
      category: 'Adult Programs',
      description: 'Never played tennis before? Perfect! Our adult beginner program provides a welcoming environment to learn proper technique and build confidence on the court.',
      image: '/Adult Beginner Classes.jpg',
      duration: '1.5 hours',
      participants: 'Adults 18+',
      level: 'Beginner',
      price: '€55/session',
      groupSize: '6-8 players',
      schedule: 'Evenings & Weekends',
      features: [
        'Fundamental stroke instruction',
        'Court etiquette and rules',
        'Equipment recommendations',
        'Flexible scheduling options',
        'Supportive learning environment',
        'Progress to intermediate groups'
      ],
      highlights: ['Beginner-friendly', 'Professional instruction', 'Social atmosphere']
    },
    {
      id: 5,
      name: 'Competitive Adult League',
      category: 'Adult Programs',
      description: 'Join our thriving adult competitive scene with organized leagues, tournaments, and regular match play designed to challenge and improve your game.',
      image: '/Adult Competitive League.webp',
      duration: '2 hours',
      participants: 'Adults 18+',
      level: 'Intermediate to Advanced',
      price: '€75/session',
      groupSize: '8-12 players',
      schedule: 'Multiple time slots',
      features: [
        'Organized league play',
        'Skill-based divisions',
        'Tournament opportunities',
        'Social events and mixers',
        'Professional supervision',
        'Awards and recognition'
      ],
      highlights: ['Active community', 'Competitive matches', 'Social events']
    },
    {
      id: 6,
      name: 'Cardio Tennis',
      category: 'Adult Programs',
      description: 'High-energy fitness program combining tennis skills with cardiovascular exercise. Perfect for players wanting to improve fitness while having fun.',
      image: '/premium_photo-1664303119944-4cf5302bb701.avif',
      duration: '1 hour',
      participants: 'Adults 18+',
      level: 'All Levels',
      price: '€40/session',
      groupSize: '8-12 players',
      schedule: 'Multiple weekly sessions',
      features: [
        'High-intensity workout',
        'Music-driven sessions',
        'Tennis skill development',
        'Calorie burning focus',
        'Group motivation',
        'No pressure environment'
      ],
      highlights: ['Fitness focused', 'Fun atmosphere', 'All skill levels']
    },
    {
      id: 7,
      name: 'Private Coaching',
      category: 'Private Coaching',
      description: 'One-on-one instruction with our certified professionals. Customized training plans designed specifically for your goals and skill level.',
      image: '/One-on-One Coaching.JPG',
      duration: '1 hour',
      participants: 'Individual',
      level: 'All Levels',
      price: '€120/session',
      groupSize: '1-on-1',
      schedule: 'Flexible scheduling',
      features: [
        'Personalized instruction',
        'Video analysis available',
        'Customized training plans',
        'Flexible scheduling',
        'Goal-oriented approach',
        'Rapid skill development'
      ],
      highlights: ['Personalized attention', 'Fastest improvement', 'Expert coaching']
    },
    {
      id: 8,
      name: 'Semi-Private Lessons',
      category: 'Private Coaching',
      description: 'Share the cost and experience with a friend or family member. Perfect for couples, siblings, or friends wanting personalized attention.',
      image: '/Adult Beginner Classes.jpg',
      duration: '1 hour',
      participants: '2 players',
      level: 'All Levels',
      price: '€80/session per person',
      groupSize: '2 players',
      schedule: 'Flexible scheduling',
      features: [
        'Shared learning experience',
        'Cost-effective option',
        'Personalized attention',
        'Partner motivation',
        'Flexible scheduling',
        'Customized instruction'
      ],
      highlights: ['Shared experience', 'Cost effective', 'Partner motivation']
    },
    {
      id: 9,
      name: 'Summer Tennis Camp',
      category: 'Specialty Camps',
      description: 'Week-long intensive program combining skill development, fitness, competition, and fun activities. The ultimate tennis experience for young players.',
      image: '/Summer Tennis Camp.avif',
      duration: '5 days, 6 hours/day',
      participants: 'Ages 8-16',
      level: 'All Levels',
      price: '€350/week',
      groupSize: '12-16 players',
      schedule: 'Summer holidays',
      features: [
        'Daily skill development',
        'Fitness and conditioning',
        'Tournament play',
        'Mental training sessions',
        'Guest professional clinics',
        'Awards ceremony'
      ],
      highlights: ['Intensive training', 'Professional clinics', 'Complete experience']
    },
    {
      id: 10,
      name: 'Adult Tennis Weekend',
      category: 'Specialty Camps',
      description: 'Intensive weekend program for adults looking to jumpstart their tennis journey or break through to the next level with focused instruction.',
      image: '/rivalry.avif',
      duration: '2 days, 4 hours/day',
      participants: 'Adults 18+',
      level: 'All Levels',
      price: '€180/weekend',
      groupSize: '8-12 players',
      schedule: 'Monthly weekends',
      features: [
        'Intensive instruction',
        'Video analysis sessions',
        'Mental game workshop',
        'Equipment consultation',
        'Group meals included',
        'Take-home practice plan'
      ],
      highlights: ['Intensive format', 'Video analysis', 'Complete package']
    }
  ]

  const coachHighlights = [
    {
      name: 'Maria Rodriguez',
      title: 'Head of Junior Development',
      specialization: 'Youth Tennis & Character Development',
      experience: '15+ years',
      achievements: ['Former WTA Top 100', 'Youth Coach of the Year 2023', 'Over 50 junior tournament winners'],
      image: '/coach1.avif'
    },
    {
      name: 'James Thompson',
      title: 'Adult Program Director',
      specialization: 'Adult Coaching & League Management',
      experience: '12+ years',
      achievements: ['USPTA Elite Professional', 'Former College Coach', 'Adult Program Innovation Award'],
      image: '/coach2.jpg'
    },
    {
      name: 'Sophie Chen',
      title: 'High Performance Coach',
      specialization: 'Competitive Training & Mental Game',
      experience: '10+ years',
      achievements: ['Sports Psychology Certified', 'Former Professional Player', '3 National Junior Champions'],
      image: '/coach3.jpg'
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      program: 'Adult Beginner Academy',
      text: 'I was terrified to start tennis at 35, but the beginner program made me feel so welcome. The instructors are patient and encouraging, and I\'ve made great friends too!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      program: 'Competitive Juniors',
      text: 'My daughter has grown so much in the competitive program. Not just as a tennis player, but as a confident young person. The coaching is exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      program: 'Private Coaching',
      text: 'The private lessons transformed my game completely. The personalized attention and video analysis helped me break through plateaus I\'d been stuck at for years.',
      rating: 5
    }
  ]

  const programStats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '25+', label: 'Programs Offered' },
    { number: '15+', label: 'Certified Coaches' },
    { number: '95%', label: 'Student Satisfaction' }
  ]

  const filteredPrograms = activeFilter === 'All' 
    ? programs 
    : programs.filter(program => program.category === activeFilter)

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <SEOHead 
        title="Tennis Programs | Tennis Lessons & Training" 
        description="Discover our comprehensive tennis programs for players of all ages and skill levels. From beginner to advanced, we offer personalized coaching and training options." 
        keywords="tennis programs, tennis lessons, tennis training, tennis coaching, tennis for beginners, tennis for adults, tennis camps, private coaching" 
      />
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 lg:p-12 text-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-16 h-16 border-4 border-black rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Tennis <span className="text-black">Programs</span>
              </h1>
              <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                From first-time players to competitive athletes, discover the perfect program to elevate your tennis journey with expert coaching and comprehensive training.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#programs" className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Explore Programs
                </a>
                <a href="#contact" className="bg-white/20 border border-black text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                  Schedule Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Tennis Excellence by the <span className="text-neon-green">Numbers</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our programs have helped hundreds of players achieve their tennis goals and build lasting friendships.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {programStats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Find Your Perfect <span className="text-neon-green">Program</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Whether you're a complete beginner or seasoned competitor, we have the right program to help you achieve your tennis goals.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-neon-green text-black shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-all duration-300 group">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-neon-green text-black text-xs font-semibold px-3 py-1 rounded-full">
                          {program.level}
                        </span>
                        <span className="bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border">
                          {program.participants}
                        </span>
                        {program.highlights.slice(0, 1).map((highlight, index) => (
                          <span key={index} className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-neon-green transition-colors duration-300">
                        {program.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {program.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock size={14} />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users size={14} />
                          <span>{program.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={14} />
                          <span>{program.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Trophy size={14} />
                          <span>{program.level}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-neon-green">{program.price}</span>
                          {program.id === 9 && <span className="text-gray-600 text-sm ml-1">/week</span>}
                          {program.id === 10 && <span className="text-gray-600 text-sm ml-1">/weekend</span>}
                        </div>
                        <Link 
                          to={`/programs/${program.id}`}
                          className="bg-neon-green hover:bg-tennis-green text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm inline-flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coach Highlights */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Meet Our <span className="text-neon-green">Expert Coaches</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Learn from the best with our team of certified professionals who bring years of experience and passion to every lesson.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coachHighlights.map((coach, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-neon-green to-tennis-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">{coach.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">{coach.name}</h3>
                  <p className="text-neon-green font-semibold mb-2">{coach.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{coach.specialization}</p>
                  <div className="bg-white rounded-lg p-3 mb-4">
                    <p className="text-black font-semibold text-sm mb-2">{coach.experience} Experience</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle size={10} className="text-neon-green" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Student <span className="text-neon-green">Success Stories</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from our students about their tennis journey and the progress they've made in our programs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-neon-green text-sm font-medium">{testimonial.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding py-16">
        <div className="bg-black rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-black rounded-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Tennis <span className="text-neon-green">Journey Today</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Ready to take your game to the next level? Join one of our programs or schedule a trial lesson to see which program is perfect for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl p-6 text-center">
                <Target className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule a Trial Lesson</h3>
                <p className="text-gray-300 mb-4">
                  Try any program with a complimentary trial lesson to find your perfect fit.
                </p>
                <button className="bg-neon-green text-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-green transition-all duration-300 w-full">
                  Book Trial Lesson
                </button>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center">
                <Phone className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Speak with Our Team</h3>
                <p className="text-gray-300 mb-4">
                  Have questions? Our program coordinators are here to help you choose the right program.
                </p>
                <button className="bg-white/20 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 w-full">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">
                Questions about programs? Call us at{' '}
                <a href="tel:+15551230000" className="text-neon-green hover:underline">
                  +1 (555) 123-TENNIS
                </a>
                {' '}or email{' '}
                <a href="mailto:programs@baltenn.com" className="text-neon-green hover:underline">
                  programs@baltenn.com
                </a>
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
                <span>✓ Trial lessons available</span>
                <span>✓ Flexible scheduling</span>
                <span>✓ All skill levels welcome</span>
                <span>✓ Professional instruction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage 