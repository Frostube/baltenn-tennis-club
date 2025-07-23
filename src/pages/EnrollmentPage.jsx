import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, DollarSign, Calendar, User, Mail, Phone, MapPin, CreditCard, Shield, Star, Award } from 'lucide-react'

const EnrollmentPage = () => {
  const { programId } = useParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Program Selection
    selectedSchedule: '',
    startDate: '',
    specialRequests: '',
    
    // Payment Information
    paymentMethod: 'monthly',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    
    // Agreements
    termsAccepted: false,
    waiverSigned: false,
    marketingOptIn: false
  })

  const programs = [
    {
      id: 1,
      name: 'Little Aces (Ages 4-6)',
      category: 'Junior Programs',
      price: '€35',
      priceType: 'session',
      duration: '45 minutes',
      groupSize: '4-6 players',
      level: 'Beginner',
      image: '/Junior Beginners Program.jpg',
      scheduleOptions: [
        { id: 1, day: 'Saturday', time: '9:00-9:45 AM', location: 'Court 1-2' },
        { id: 2, day: 'Sunday', time: '10:00-10:45 AM', location: 'Court 1-2' }
      ],
      packages: [
        { name: 'Single Session', price: 35, sessions: 1 },
        { name: '4-Session Package', price: 130, sessions: 4, savings: 10 },
        { name: '8-Session Package', price: 240, sessions: 8, savings: 40 }
      ]
    },
    {
      id: 2,
      name: 'Future Champions (Ages 7-10)',
      category: 'Junior Programs',
      price: '€45',
      priceType: 'session',
      duration: '1 hour',
      groupSize: '6-8 players',
      level: 'Beginner to Intermediate',
      image: '/Junior Program.jpg',
      scheduleOptions: [
        { id: 1, day: 'Saturday', time: '10:00-11:00 AM', location: 'Court 3-4' },
        { id: 2, day: 'Wednesday', time: '4:00-5:00 PM', location: 'Court 3-4' },
        { id: 3, day: 'Sunday', time: '11:00 AM-12:00 PM', location: 'Court 3-4' }
      ],
      packages: [
        { name: 'Single Session', price: 45, sessions: 1 },
        { name: '4-Session Package', price: 170, sessions: 4, savings: 10 },
        { name: '8-Session Package', price: 320, sessions: 8, savings: 40 }
      ]
    },
    {
      id: 3,
      name: 'Competitive Juniors (Ages 11-16)',
      category: 'Junior Programs',
      price: '€65',
      priceType: 'session',
      duration: '1.5 hours',
      groupSize: '4-6 players',
      level: 'Intermediate to Advanced',
      image: '/Junior Intermediate Program.jpg',
      scheduleOptions: [
        { id: 1, day: 'Monday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { id: 2, day: 'Wednesday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { id: 3, day: 'Friday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { id: 4, day: 'Saturday', time: '2:00-3:30 PM', location: 'Court 5-6' }
      ],
      packages: [
        { name: 'Single Session', price: 65, sessions: 1 },
        { name: '4-Session Package', price: 240, sessions: 4, savings: 20 },
        { name: '8-Session Package', price: 460, sessions: 8, savings: 60 }
      ]
    },
    {
      id: 4,
      name: 'Adult Beginner Academy',
      category: 'Adult Programs',
      price: '€55',
      priceType: 'session',
      duration: '1.5 hours',
      groupSize: '6-8 players',
      level: 'Beginner',
      image: '/Adult Beginner Classes.jpg',
      scheduleOptions: [
        { id: 1, day: 'Tuesday', time: '7:00-8:30 PM', location: 'Court 1-2' },
        { id: 2, day: 'Thursday', time: '7:00-8:30 PM', location: 'Court 1-2' },
        { id: 3, day: 'Saturday', time: '11:00 AM-12:30 PM', location: 'Court 1-2' },
        { id: 4, day: 'Sunday', time: '1:00-2:30 PM', location: 'Court 1-2' }
      ],
      packages: [
        { name: 'Single Session', price: 55, sessions: 1 },
        { name: '4-Session Package', price: 200, sessions: 4, savings: 20 },
        { name: '8-Session Package', price: 380, sessions: 8, savings: 60 }
      ]
    },
    {
      id: 5,
      name: 'Competitive Adult League',
      category: 'Adult Programs',
      price: '€75',
      priceType: 'session',
      duration: '2 hours',
      groupSize: '8-12 players',
      level: 'Intermediate to Advanced',
      image: '/Adult Competitive League.webp',
      scheduleOptions: [
        { id: 1, day: 'Monday', time: '7:00-9:00 PM', location: 'Court 3-6' },
        { id: 2, day: 'Wednesday', time: '7:00-9:00 PM', location: 'Court 3-6' },
        { id: 3, day: 'Saturday', time: '3:00-5:00 PM', location: 'Court 3-6' },
        { id: 4, day: 'Sunday', time: '3:00-5:00 PM', location: 'Court 3-6' }
      ],
      packages: [
        { name: 'Monthly Membership', price: 250, sessions: 4, description: '4 sessions per month' },
        { name: 'Quarterly Membership', price: 650, sessions: 12, savings: 100, description: '12 sessions over 3 months' }
      ]
    },
    {
      id: 6,
      name: 'Cardio Tennis',
      category: 'Adult Programs',
      price: '€40',
      priceType: 'session',
      duration: '1 hour',
      groupSize: '8-12 players',
      level: 'All Levels',
      image: '/premium_photo-1664303119944-4cf5302bb701.avif',
      scheduleOptions: [
        { id: 1, day: 'Monday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { id: 2, day: 'Wednesday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { id: 3, day: 'Friday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { id: 4, day: 'Saturday', time: '9:00-10:00 AM', location: 'Court 1-2' }
      ],
      packages: [
        { name: 'Drop-in Session', price: 40, sessions: 1 },
        { name: '5-Session Pass', price: 180, sessions: 5, savings: 20 },
        { name: '10-Session Pass', price: 340, sessions: 10, savings: 60 }
      ]
    },
    {
      id: 7,
      name: 'Private Coaching',
      category: 'Private Coaching',
      price: '€120',
      priceType: 'session',
      duration: '1 hour',
      groupSize: '1-on-1',
      level: 'All Levels',
      image: '/One-on-One Coaching.JPG',
      scheduleOptions: [
        { id: 1, day: 'Flexible', time: '7:00 AM - 9:00 PM', location: 'Any Court' }
      ],
      packages: [
        { name: 'Single Session', price: 120, sessions: 1 },
        { name: '5-Session Package', price: 550, sessions: 5, savings: 50 },
        { name: '10-Session Package', price: 1000, sessions: 10, savings: 200 }
      ]
    },
    {
      id: 8,
      name: 'Semi-Private Lessons',
      category: 'Private Coaching',
      price: '€80',
      priceType: 'session per person',
      duration: '1 hour',
      groupSize: '2 players',
      level: 'All Levels',
      image: '/Adult Beginner Classes.jpg',
      scheduleOptions: [
        { id: 1, day: 'Flexible', time: '7:00 AM - 9:00 PM', location: 'Any Court' }
      ],
      packages: [
        { name: 'Single Session', price: 80, sessions: 1, description: 'Per person' },
        { name: '5-Session Package', price: 375, sessions: 5, savings: 25, description: 'Per person' },
        { name: '10-Session Package', price: 700, sessions: 10, savings: 100, description: 'Per person' }
      ]
    },
    {
      id: 9,
      name: 'Summer Tennis Camp',
      category: 'Specialty Camps',
      price: '€350',
      priceType: 'week',
      duration: '5 days, 6 hours/day',
      groupSize: '12-16 players',
      level: 'All Levels',
      image: '/Summer Tennis Camp.avif',
      scheduleOptions: [
        { id: 1, day: 'Week 1', time: 'June 15-19, 9:00 AM-3:00 PM', location: 'All Courts' },
        { id: 2, day: 'Week 2', time: 'June 22-26, 9:00 AM-3:00 PM', location: 'All Courts' },
        { id: 3, day: 'Week 3', time: 'July 6-10, 9:00 AM-3:00 PM', location: 'All Courts' },
        { id: 4, day: 'Week 4', time: 'July 13-17, 9:00 AM-3:00 PM', location: 'All Courts' }
      ],
      packages: [
        { name: 'Single Week', price: 350, sessions: 1 },
        { name: '2-Week Package', price: 650, sessions: 2, savings: 50 },
        { name: 'Full Summer (4 weeks)', price: 1200, sessions: 4, savings: 200 }
      ]
    },
    {
      id: 10,
      name: 'Adult Tennis Weekend',
      category: 'Specialty Camps',
      price: '€180',
      priceType: 'weekend',
      duration: '2 days, 4 hours/day',
      groupSize: '8-12 players',
      level: 'All Levels',
      image: '/rivalry.avif',
      scheduleOptions: [
        { id: 1, day: 'March Weekend', time: 'March 15-16, 9:00 AM-1:00 PM', location: 'Courts 3-6' },
        { id: 2, day: 'April Weekend', time: 'April 19-20, 9:00 AM-1:00 PM', location: 'Courts 3-6' },
        { id: 3, day: 'May Weekend', time: 'May 17-18, 9:00 AM-1:00 PM', location: 'Courts 3-6' }
      ],
      packages: [
        { name: 'Single Weekend', price: 180, sessions: 1 },
        { name: '2-Weekend Package', price: 320, sessions: 2, savings: 40 }
      ]
    }
  ]

  const program = programs.find(p => p.id === parseInt(programId))

  useEffect(() => {
    if (program && !selectedPackage) {
      setSelectedPackage(program.packages[0])
    }
  }, [program, selectedPackage])

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  // Initialize selectedPackage after we have the program
  // This useEffect handles the initial state setting

  const steps = [
    { id: 1, title: 'Personal Info', icon: User },
    { id: 2, title: 'Program Details', icon: Calendar },
    { id: 3, title: 'Payment', icon: CreditCard },
    { id: 4, title: 'Confirmation', icon: CheckCircle }
  ]

  const handlePackageSelect = (pkg) => {
    console.log('Package selected:', pkg.name)
    setSelectedPackage(pkg)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    console.log('Enrollment submitted:', formData)
    nextStep()
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Header */}
      <section className="section-padding py-8">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 text-black">
            <Link to={`/programs/${programId}`} className="inline-flex items-center gap-2 text-black/80 hover:text-black mb-4 transition-colors duration-300">
              <ArrowLeft size={20} />
              Back to Program Details
            </Link>
            
            <div className="md:flex items-center gap-6">
              <div className="md:w-1/4">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{program.name}</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{program.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={14} />
                    <span>{program.level}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="section-padding">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      isActive ? 'bg-neon-green border-neon-green text-black' :
                      isCompleted ? 'bg-green-500 border-green-500 text-white' :
                      'bg-gray-100 border-gray-300 text-gray-400'
                    }`}>
                      {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <div className={`font-medium ${isActive ? 'text-black' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                        {step.title}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-4 ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="section-padding pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-black mb-2">Personal Information</h2>
                <p className="text-gray-600 mb-8">Please provide your contact details and emergency information.</p>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name *</label>
                      <input
                        type="text"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Emergency contact name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone *</label>
                      <input
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Emergency contact phone"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={nextStep}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                    className="bg-neon-green hover:bg-tennis-green text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Program Details */}
            {currentStep === 2 && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-black mb-2">Program Details</h2>
                <p className="text-gray-600 mb-8">Choose your package, schedule, and preferences.</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Package Selection */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Select Package</h3>
                    <div className="space-y-3">
                      {program.packages.map((pkg, index) => (
                        <div
                          key={index}
                          onClick={() => handlePackageSelect(pkg)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                            selectedPackage?.name === pkg.name 
                              ? 'border-neon-green bg-neon-green/10 shadow-lg ring-2 ring-neon-green/20' 
                              : 'border-gray-200 hover:border-neon-green/50 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className={`font-semibold ${selectedPackage?.name === pkg.name ? 'text-black' : 'text-gray-800'}`}>
                                  {pkg.name}
                                </h4>
                                {selectedPackage?.name === pkg.name && (
                                  <div className="w-5 h-5 bg-neon-green rounded-full flex items-center justify-center">
                                    <CheckCircle size={12} className="text-black" />
                                  </div>
                                )}
                              </div>
                              {pkg.description && (
                                <p className={`text-sm mb-1 ${selectedPackage?.name === pkg.name ? 'text-gray-700' : 'text-gray-600'}`}>
                                  {pkg.description}
                                </p>
                              )}
                              <p className={`text-sm ${selectedPackage?.name === pkg.name ? 'text-gray-700' : 'text-gray-600'}`}>
                                {pkg.sessions} session{pkg.sessions > 1 ? 's' : ''}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <div className={`text-lg font-bold ${selectedPackage?.name === pkg.name ? 'text-black' : 'text-gray-800'}`}>
                                €{pkg.price}
                              </div>
                              {pkg.savings && (
                                <div className="text-sm text-green-600 font-medium">
                                  Save €{pkg.savings}
                                </div>
                              )}
                            </div>
                          </div>
                          {selectedPackage?.name === pkg.name && (
                            <div className="mt-3 pt-3 border-t border-neon-green/20">
                              <div className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle size={14} className="text-neon-green" />
                                <span>Selected Package</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Schedule Selection */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Select Schedule</h3>
                    <div className="space-y-3">
                      {program.scheduleOptions.map((schedule) => (
                        <div
                          key={schedule.id}
                          onClick={() => handleInputChange('selectedSchedule', schedule.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                            formData.selectedSchedule === schedule.id 
                              ? 'border-neon-green bg-neon-green/10 shadow-lg ring-2 ring-neon-green/20' 
                              : 'border-gray-200 hover:border-neon-green/50 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <div className={`font-semibold ${formData.selectedSchedule === schedule.id ? 'text-black' : 'text-gray-800'}`}>
                                  {schedule.day}
                                </div>
                                {formData.selectedSchedule === schedule.id && (
                                  <div className="w-5 h-5 bg-neon-green rounded-full flex items-center justify-center">
                                    <CheckCircle size={12} className="text-black" />
                                  </div>
                                )}
                              </div>
                              <div className={`mb-2 ${formData.selectedSchedule === schedule.id ? 'text-gray-700' : 'text-gray-600'}`}>
                                {schedule.time}
                              </div>
                              <div className={`text-sm flex items-center gap-1 ${formData.selectedSchedule === schedule.id ? 'text-gray-700' : 'text-gray-500'}`}>
                                <MapPin size={12} />
                                {schedule.location}
                              </div>
                            </div>
                          </div>
                          {formData.selectedSchedule === schedule.id && (
                            <div className="mt-3 pt-3 border-t border-neon-green/20">
                              <div className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle size={14} className="text-neon-green" />
                                <span>Selected Schedule</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-black mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
                      <textarea
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Any special requests, medical conditions, or other notes..."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!selectedPackage || !formData.selectedSchedule}
                    className="bg-neon-green hover:bg-tennis-green text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-black mb-2">Payment Information</h2>
                <p className="text-gray-600 mb-8">Secure payment processing with 256-bit SSL encryption.</p>
                
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-bold text-black mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{selectedPackage?.name}</span>
                      <span className="font-medium">€{selectedPackage?.price}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{selectedPackage?.sessions} session{selectedPackage?.sessions > 1 ? 's' : ''}</span>
                      <span>€{(selectedPackage?.price / selectedPackage?.sessions).toFixed(2)} per session</span>
                    </div>
                    {selectedPackage?.savings && (
                      <div className="flex justify-between text-green-600">
                        <span>Savings</span>
                        <span>-€{selectedPackage.savings}</span>
                      </div>
                    )}
                    <hr className="my-4" />
                    <div className="flex justify-between text-lg font-bold text-black">
                      <span>Total</span>
                      <span>€{selectedPackage?.price}</span>
                    </div>
                  </div>
                </div>
                
                {/* Payment Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                      <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address *</label>
                    <input
                      type="text"
                      value={formData.billingAddress}
                      onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-green focus:border-transparent"
                      placeholder="Enter your billing address"
                    />
                  </div>
                  
                  {/* Agreements */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                        className="mt-1"
                      />
                      <label className="text-sm text-gray-700">
                        I accept the <a href="#" className="text-neon-green hover:underline">Terms and Conditions</a> and <a href="#" className="text-neon-green hover:underline">Privacy Policy</a> *
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.waiverSigned}
                        onChange={(e) => handleInputChange('waiverSigned', e.target.checked)}
                        className="mt-1"
                      />
                      <label className="text-sm text-gray-700">
                        I acknowledge that I have read and understood the <a href="#" className="text-neon-green hover:underline">Liability Waiver</a> *
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.marketingOptIn}
                        onChange={(e) => handleInputChange('marketingOptIn', e.target.checked)}
                        className="mt-1"
                      />
                      <label className="text-sm text-gray-700">
                        I would like to receive updates about programs, events, and special offers
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-800">
                      <Shield size={16} />
                      <span className="font-medium">Secure Payment</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.termsAccepted || !formData.waiverSigned}
                    className="bg-neon-green hover:bg-tennis-green text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Complete Enrollment
                    <CheckCircle size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-black mb-4">Enrollment Successful!</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Congratulations! You've successfully enrolled in {program.name}. We're excited to have you join us!
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-lg font-bold text-black mb-4">Enrollment Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Program:</span>
                      <span className="font-medium">{program.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-medium">{selectedPackage?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Paid:</span>
                      <span className="font-medium">€{selectedPackage?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enrollment ID:</span>
                      <span className="font-medium">#TC{Date.now().toString().slice(-6)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neon-green/10 border border-neon-green rounded-lg p-6 mb-8">
                  <h4 className="font-bold text-black mb-2">What's Next?</h4>
                  <ul className="text-sm text-gray-700 space-y-1 text-left">
                    <li>• You'll receive a confirmation email within 15 minutes</li>
                    <li>• Our team will contact you within 24 hours to confirm your first session</li>
                    <li>• Download our mobile app for easy session booking and updates</li>
                    <li>• Arrive 15 minutes early for your first session</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/" className="bg-neon-green hover:bg-tennis-green text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                    Return Home
                  </Link>
                  <Link to="/programs" className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                    View All Programs
                  </Link>
                  <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                    Download Receipt
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}

export default EnrollmentPage 