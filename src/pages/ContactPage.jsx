import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Calendar, CheckCircle, AlertCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 2000)
  }

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-neon-green" />,
      title: "Phone",
      subtitle: "Call us directly",
      details: ["+1 (555) 123-TENNIS", "Available 7 days a week"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8 text-neon-green" />,
      title: "Email",
      subtitle: "Send us a message",
      details: ["info@baltenn.com", "Response within 24 hours"],
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-neon-green" />,
      title: "Live Chat",
      subtitle: "Chat with our team",
      details: ["Available during business hours", "Instant response"],
      action: "Start Chat"
    },
    {
      icon: <MapPin className="w-8 h-8 text-neon-green" />,
      title: "Visit Us",
      subtitle: "Come see our facilities",
      details: ["123 Tennis Court Lane", "Sports City, SC 12345"],
      action: "Get Directions"
    }
  ]

  const departments = [
    {
      name: "Membership Services",
      email: "membership@baltenn.com",
      phone: "+1 (555) 123-0001",
      description: "New memberships, renewals, and account questions"
    },
    {
      name: "Tennis Programs",
      email: "programs@baltenn.com",
      phone: "+1 (555) 123-0002",
      description: "Lessons, camps, and program enrollment"
    },
    {
      name: "Court Reservations",
      email: "courts@baltenn.com",
      phone: "+1 (555) 123-0003",
      description: "Court bookings and facility rentals"
    },
    {
      name: "Events & Tournaments",
      email: "events@baltenn.com",
      phone: "+1 (555) 123-0004",
      description: "Tournaments, special events, and group activities"
    }
  ]

  const faqs = [
    {
      question: "What are your membership options?",
      answer: "We offer individual, family, and corporate memberships with flexible payment plans. Visit our membership page for detailed pricing and benefits."
    },
    {
      question: "Do you offer beginner tennis lessons?",
      answer: "Yes! We have comprehensive beginner programs for all ages, including group lessons, private coaching, and specialized junior programs."
    },
    {
      question: "How do I book a court?",
      answer: "Members can book courts online through our member portal, by calling our reservation line, or using our mobile app. Courts can be reserved up to 7 days in advance."
    },
    {
      question: "What should I bring for my first visit?",
      answer: "Bring comfortable athletic wear, tennis shoes, and a water bottle. We provide rackets and balls for lessons, but you're welcome to bring your own equipment."
    },
    {
      question: "Do you have equipment rental?",
      answer: "Yes, our pro shop offers racket rentals and has a full selection of tennis equipment, apparel, and accessories for purchase."
    },
    {
      question: "What are your cancellation policies?",
      answer: "Court reservations can be cancelled up to 2 hours in advance. Lesson cancellations require 24-hour notice. Please check our full policy for details."
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
    { day: "Holidays", hours: "9:00 AM - 6:00 PM" }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <SEOHead
        title="Contact Baltenn - Tennis Club in Sports City, SC"
        description="Get in touch with Baltenn for membership inquiries, tennis programs, court reservations, and more. We're here to help you start your tennis journey."
        keywords="tennis club, sports city, sc, tennis lessons, court reservations, membership, contact"
      />
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 lg:p-12 text-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Contact <span className="text-black">Baltenn</span>
              </h1>
              <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Have questions about membership, programs, or facilities? We're here to help you start your tennis journey with us.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#contact-form" className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Send Message
                </a>
                <a href="tel:+15551230000" className="bg-white/20 border border-black text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Get In <span className="text-neon-green">Touch</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose the best way to reach us. We're committed to responding quickly and helping you with whatever you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all duration-300 group">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-neon-green transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                  <button className="bg-neon-green text-black font-semibold px-4 py-2 rounded-lg hover:bg-tennis-green transition-all duration-300 text-sm">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Send us a <span className="text-neon-green">Message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. All fields marked with * are required.
                </p>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-black mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                      >
                        <option value="general">General Information</option>
                        <option value="membership">Membership</option>
                        <option value="programs">Tennis Programs</option>
                        <option value="courts">Court Reservations</option>
                        <option value="events">Events & Tournaments</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent resize-none"
                      placeholder="Tell us more about how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-green text-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-green transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info & Hours */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-neon-green" />
                    <h3 className="text-2xl font-bold text-black">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-black font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-neon-green" />
                    <h3 className="text-2xl font-bold text-black">Department Contacts</h3>
                  </div>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-black mb-1">{dept.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                        <div className="flex flex-col gap-1 text-sm">
                          <a href={`mailto:${dept.email}`} className="text-neon-green hover:underline">{dept.email}</a>
                          <a href={`tel:${dept.phone}`} className="text-gray-700 hover:text-neon-green">{dept.phone}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Frequently Asked <span className="text-neon-green">Questions</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Find quick answers to common questions about our facilities, programs, and services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
              <a href="#contact-form" className="btn-primary inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Contact Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="section-padding py-16">
        <div className="bg-black rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-black rounded-2xl p-6 md:p-8 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our <span className="text-neon-green">Facility</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experience our world-class courts and facilities in person. We'd love to give you a tour and answer any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-neon-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-gray-300 leading-relaxed">
                      123 Tennis Court Lane<br />
                      Sports City, SC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="btn-primary flex-1">
                    Get Directions
                  </button>
                  <button className="bg-white/20 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                    Schedule Tour
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center">
                <Calendar className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Free Facility Tour</h3>
                <p className="text-gray-300 mb-4">
                  Schedule a complimentary tour of our facilities and meet our coaching staff.
                </p>
                <button className="bg-neon-green text-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-green transition-all duration-300">
                  Book Your Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 