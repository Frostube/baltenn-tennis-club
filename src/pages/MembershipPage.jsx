import { useState } from 'react'
import { Check, X, Star, Users, Trophy, Calendar, Clock, Phone, Mail, ArrowRight, Shield, Heart, Zap } from 'lucide-react'

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('individual')
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const membershipPlans = [
    {
      id: 'individual',
      name: 'Individual',
      subtitle: 'Perfect for solo players',
      icon: <Users className="w-8 h-8" />,
      monthlyPrice: 89,
      yearlyPrice: 890,
      popular: false,
      features: [
        'Unlimited court access during off-peak hours',
        'Peak hour court access (limited)',
        '2 complimentary guest passes per month',
        'Access to fitness center',
        'Member-only events',
        'Online court booking system',
        '10% discount at pro shop',
        'Free equipment storage'
      ],
      limitations: [
        'No weekend prime-time access',
        'Limited tournament entry'
      ]
    },
    {
      id: 'family',
      name: 'Family',
      subtitle: 'Great for families of 4',
      icon: <Heart className="w-8 h-8" />,
      monthlyPrice: 159,
      yearlyPrice: 1590,
      popular: true,
      features: [
        'Unlimited court access for up to 4 family members',
        'Full peak and off-peak hour access',
        '8 complimentary guest passes per month',
        'Access to fitness center for all members',
        'Priority booking for lessons and camps',
        'Family tournament entry included',
        '15% discount at pro shop',
        'Free equipment storage for all members',
        'Junior program discounts',
        'Family social events'
      ],
      limitations: []
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Ultimate tennis experience',
      icon: <Trophy className="w-8 h-8" />,
      monthlyPrice: 249,
      yearlyPrice: 2490,
      popular: false,
      features: [
        'Unlimited court access 24/7',
        'Priority court booking',
        'Unlimited guest passes',
        'Personal training sessions included',
        'VIP locker room access',
        'Complimentary racket stringing',
        '25% discount at pro shop',
        'Free tournament entry',
        'Exclusive premium member events',
        'Concierge services',
        'Private parking spot',
        'Massage therapy discounts'
      ],
      limitations: []
    }
  ]

  const memberBenefits = [
    {
      icon: <Calendar className="w-12 h-12 text-neon-green" />,
      title: "Flexible Booking",
      description: "Book courts up to 7 days in advance through our easy-to-use app or website."
    },
    {
      icon: <Users className="w-12 h-12 text-neon-green" />,
      title: "Community Events",
      description: "Join our vibrant community with regular social events, tournaments, and mixers."
    },
    {
      icon: <Trophy className="w-12 h-12 text-neon-green" />,
      title: "Professional Coaching",
      description: "Access to certified tennis professionals for lessons and training programs."
    },
    {
      icon: <Shield className="w-12 h-12 text-neon-green" />,
      title: "Premium Facilities",
      description: "Enjoy our 15 professional courts, fitness center, and modern amenities."
    },
    {
      icon: <Zap className="w-12 h-12 text-neon-green" />,
      title: "Exclusive Perks",
      description: "Members-only benefits including pro shop discounts and priority access."
    },
    {
      icon: <Clock className="w-12 h-12 text-neon-green" />,
      title: "Extended Hours",
      description: "Early morning and late evening access for maximum flexibility."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      membership: "Family Member",
      rating: 5,
      text: "Baltenn has been incredible for our family. The kids love the junior programs, and my husband and I enjoy the competitive leagues. The facilities are top-notch!",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "David Rodriguez",
      membership: "Premium Member",
      rating: 5,
      text: "The Premium membership is worth every penny. The personal training sessions have improved my game tremendously, and the VIP amenities make it feel truly special.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Chen",
      membership: "Individual Member",
      rating: 5,
      text: "As a busy professional, I love being able to book courts easily and play during off-peak hours. The community here is welcoming and the coaching is excellent.",
      image: "/images/testimonial-3.jpg"
    }
  ]

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)
  }

  const getSavings = (plan) => {
    return billingPeriod === 'yearly' ? (plan.monthlyPrice * 12 - plan.yearlyPrice) : 0
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 lg:p-12 text-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-black rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Join <span className="text-black">Baltenn</span> Tennis Club
              </h1>
              <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                Become part of our exclusive tennis community with world-class facilities, expert coaching, and unmatched member benefits designed for players of all levels.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#membership-plans" className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  View Plans
                </a>
                <a href="#contact" className="bg-white/20 border border-black text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Member <span className="text-neon-green">Benefits</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover the exclusive advantages that come with being a Baltenn Tennis Club member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-all duration-300 group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-neon-green transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership-plans" className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Choose Your <span className="text-neon-green">Membership</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Select the perfect membership plan that fits your tennis lifestyle and goals.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`font-medium ${billingPeriod === 'monthly' ? 'text-black' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                    billingPeriod === 'yearly' ? 'bg-neon-green' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                      billingPeriod === 'yearly' ? 'left-8' : 'left-1'
                    }`}
                  />
                </button>
                <span className={`font-medium ${billingPeriod === 'yearly' ? 'text-black' : 'text-gray-500'}`}>
                  Yearly
                </span>
                {billingPeriod === 'yearly' && (
                  <span className="bg-neon-green text-black text-sm font-semibold px-2 py-1 rounded-full">
                    Save up to 17%
                  </span>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {membershipPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-neon-green to-tennis-green text-black ring-4 ring-neon-green/20'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`flex justify-center mb-4 ${plan.popular ? 'text-black' : 'text-neon-green'}`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-black'}`}>
                      {plan.name}
                    </h3>
                    <p className={`${plan.popular ? 'text-black/80' : 'text-gray-600'} mb-4`}>
                      {plan.subtitle}
                    </p>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-black' : 'text-black'}`}>
                        €{getPrice(plan)}
                      </span>
                      <span className={`${plan.popular ? 'text-black/80' : 'text-gray-600'}`}>
                        /{billingPeriod === 'monthly' ? 'month' : 'month'}
                      </span>
                      {billingPeriod === 'yearly' && getSavings(plan) > 0 && (
                        <div className={`text-sm ${plan.popular ? 'text-black/80' : 'text-gray-600'} mt-1`}>
                          Save €{getSavings(plan)} per year
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-black' : 'text-neon-green'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-black' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${plan.popular ? 'text-black/70' : 'text-gray-500'}`}>
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-neon-green text-black hover:bg-tennis-green'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need help choosing the right plan? Our team is here to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+15551230000" className="inline-flex items-center gap-2 text-neon-green hover:text-tennis-green transition-colors duration-300">
                  <Phone size={16} />
                  Call us: +1 (555) 123-TENNIS
                </a>
                <a href="mailto:membership@baltenn.com" className="inline-flex items-center gap-2 text-neon-green hover:text-tennis-green transition-colors duration-300">
                  <Mail size={16} />
                  Email: membership@baltenn.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                What Our <span className="text-neon-green">Members Say</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from our satisfied members about their experience at Baltenn Tennis Club.
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
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-tennis-green rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.membership}</p>
                    </div>
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
                Ready to <span className="text-neon-green">Join?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Take the first step towards improving your tennis game and joining our amazing community. Schedule a tour or contact us to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl p-6 text-center">
                <Calendar className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule a Tour</h3>
                <p className="text-gray-300 mb-4">
                  Visit our facilities and meet our team. See what makes Baltenn special.
                </p>
                <button className="bg-neon-green text-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-green transition-all duration-300 w-full">
                  Book Free Tour
                </button>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6 text-center">
                <Phone className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Speak with an Expert</h3>
                <p className="text-gray-300 mb-4">
                  Have questions? Our membership team is ready to help you choose the perfect plan.
                </p>
                <button className="bg-white/20 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 w-full">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">
                Questions about membership? Call us at{' '}
                <a href="tel:+15551230000" className="text-neon-green hover:underline">
                  +1 (555) 123-TENNIS
                </a>
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
                <span>✓ No joining fees</span>
                <span>✓ 30-day satisfaction guarantee</span>
                <span>✓ Flexible payment options</span>
                <span>✓ Family discounts available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MembershipPage 