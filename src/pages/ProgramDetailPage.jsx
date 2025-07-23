import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Clock, Users, Trophy, Star, ArrowRight, ArrowLeft, Target, Award, Heart, Calendar, Phone, Mail, CheckCircle, Zap, MapPin, DollarSign, UserCheck, BookOpen, Video, Medal } from 'lucide-react'

const ProgramDetailPage = () => {
  const { programId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  
  const programs = [
    {
      id: 1,
      name: 'Little Aces (Ages 4-6)',
      category: 'Junior Programs',
      description: 'Our youngest players start their tennis journey with fun-filled activities that develop hand-eye coordination, motor skills, and love for the game using age-appropriate equipment.',
      longDescription: 'The Little Aces program is specifically designed for our youngest tennis enthusiasts. We understand that children aged 4-6 learn best through play, so our curriculum is built around fun activities that naturally develop the fundamental skills needed for tennis. Using modified equipment including shorter rackets, lower nets, and slower-bouncing balls, we create an environment where children can experience success from their very first lesson. Our certified youth coaches focus on building confidence, social skills, and a love for the sport that will last a lifetime.',
      image: '/Junior Beginners Program.jpg',
      duration: '45 minutes',
      participants: 'Ages 4-6',
      level: 'Beginner',
      price: '€35',
      priceType: 'session',
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
      highlights: ['Award-winning curriculum', 'Certified youth coaches', 'Small group attention'],
      whatYoullLearn: [
        'Basic hand-eye coordination',
        'Fundamental movement patterns',
        'Tennis ball tracking and catching',
        'Introduction to racket handling',
        'Balance and agility skills',
        'Following instructions and taking turns',
        'Basic tennis vocabulary',
        'Sportsmanship and respect'
      ],
      equipment: [
        'Modified 19" rackets provided',
        'Low-compression tennis balls',
        'Portable mini-nets',
        'Colorful court markers',
        'Fun training aids and props'
      ],
      coach: {
        name: 'Sarah Martinez',
        specialization: 'Early Childhood Development',
        experience: '8 years',
        certification: 'USTA Youth Certified',
        bio: 'Sarah specializes in early childhood tennis development and has helped over 300 children discover their love for tennis.'
      },
      schedule_details: [
        { day: 'Saturday', time: '9:00-9:45 AM', location: 'Court 1-2' },
        { day: 'Sunday', time: '10:00-10:45 AM', location: 'Court 1-2' }
      ],
      testimonials: [
        {
          parent: 'Jennifer Walsh',
          child: 'Emma (5 years old)',
          text: 'Emma absolutely loves Little Aces! She comes home excited about tennis and practices her swings in the backyard. The coaches are amazing with kids.',
          rating: 5
        },
        {
          parent: 'Mike Thompson',
          child: 'Jake (6 years old)',
          text: 'Jake was shy at first, but the program helped him gain confidence. Now he asks to go to tennis every week!',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'What should my child wear?',
          answer: 'Comfortable athletic clothing and tennis shoes with non-marking soles. We provide all equipment.'
        },
        {
          question: 'Can parents watch the lessons?',
          answer: 'Yes! Parent participation is encouraged, especially for our youngest players.'
        },
        {
          question: 'What if my child has never played before?',
          answer: 'Perfect! This program is designed specifically for children with no tennis experience.'
        }
      ]
    },
    {
      id: 2,
      name: 'Future Champions (Ages 7-10)',
      category: 'Junior Programs',
      description: 'Building on basic skills, this program introduces proper stroke technique, basic strategy, and competitive elements while maintaining a fun, encouraging environment.',
      longDescription: 'Future Champions bridges the gap between introductory tennis and competitive play. Children in this age group are ready for more structured learning while still needing the motivation that comes from fun activities. We introduce proper stroke mechanics for all major shots, basic court positioning, and simple strategies. The program includes mini-tournaments and skill challenges that build competitive spirit in a supportive environment.',
      image: '/Junior Program.jpg',
      duration: '1 hour',
      participants: 'Ages 7-10',
      level: 'Beginner to Intermediate',
      price: '€45',
      priceType: 'session',
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
      highlights: ['Tournament preparation', 'Character building', 'Skills progression'],
      whatYoullLearn: [
        'Proper forehand and backhand technique',
        'Basic serve mechanics',
        'Court positioning and movement',
        'Tennis scoring system',
        'Simple game strategies',
        'Sportsmanship and fair play',
        'Physical fitness and coordination',
        'Goal setting and achievement'
      ],
      equipment: [
        'Age-appropriate 23" rackets',
        'Green dot tennis balls',
        'Full-size court play',
        'Agility training equipment',
        'Progress tracking materials'
      ],
      coach: {
        name: 'Carlos Rodriguez',
        specialization: 'Junior Development',
        experience: '12 years',
        certification: 'PTR Certified Professional',
        bio: 'Carlos has developed hundreds of junior players, with many advancing to high school and college tennis teams.'
      },
      schedule_details: [
        { day: 'Saturday', time: '10:00-11:00 AM', location: 'Court 3-4' },
        { day: 'Wednesday', time: '4:00-5:00 PM', location: 'Court 3-4' },
        { day: 'Sunday', time: '11:00 AM-12:00 PM', location: 'Court 3-4' }
      ],
      testimonials: [
        {
          parent: 'Lisa Chen',
          child: 'David (9 years old)',
          text: 'David has improved so much in Future Champions. His technique is getting really good and he loves the mini-tournaments!',
          rating: 5
        },
        {
          parent: 'Robert Kim',
          child: 'Sophie (8 years old)',
          text: 'The coaches do a great job of challenging the kids while keeping it fun. Sophie is already asking about the next level!',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'How is this different from Little Aces?',
          answer: 'Future Champions uses full-size courts and focuses more on proper technique and basic strategy.'
        },
        {
          question: 'Are there tournaments?',
          answer: 'Yes, we organize monthly mini-tournaments and fun competitions for skill development.'
        },
        {
          question: 'What if my child is ready for more advanced play?',
          answer: 'We can evaluate for advancement to our Competitive Juniors program.'
        }
      ]
    },
    {
      id: 3,
      name: 'Competitive Juniors (Ages 11-16)',
      category: 'Junior Programs',
      description: 'For serious young players ready to compete, this high-performance program focuses on advanced technique, mental toughness, and tournament preparation.',
      longDescription: 'Our Competitive Juniors program is designed for players who are serious about taking their tennis to the next level. This high-performance program combines advanced technical instruction with mental training, physical conditioning, and extensive match play. Students learn professional-level strategies, develop mental toughness, and receive guidance on tournament competition and potential college recruitment.',
      image: '/Junior Intermediate Program.jpg',
      duration: '1.5 hours',
      participants: 'Ages 11-16',
      level: 'Intermediate to Advanced',
      price: '€65',
      priceType: 'session',
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
      highlights: ['College preparation', 'Tournament success', 'Elite coaching'],
      whatYoullLearn: [
        'Advanced stroke mechanics and variations',
        'Professional-level strategies and tactics',
        'Mental toughness and pressure management',
        'Physical fitness and injury prevention',
        'Tournament preparation and competition',
        'Match analysis and improvement',
        'Leadership and sportsmanship',
        'Goal setting for tennis development'
      ],
      equipment: [
        'Professional-grade equipment',
        'Video analysis tools',
        'Fitness training equipment',
        'Heart rate monitors',
        'Match tracking software'
      ],
      coach: {
        name: 'Maria Rodriguez',
        specialization: 'High Performance Junior Development',
        experience: '15 years',
        certification: 'USPTA Elite Professional',
        bio: 'Former WTA Top 100 player who has coached over 20 players to college scholarships and 5 to professional careers.'
      },
      schedule_details: [
        { day: 'Monday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { day: 'Wednesday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { day: 'Friday', time: '4:00-5:30 PM', location: 'Court 5-6' },
        { day: 'Saturday', time: '2:00-3:30 PM', location: 'Court 5-6' }
      ],
      testimonials: [
        {
          parent: 'Michael Chen',
          child: 'Alex (14 years old)',
          text: 'Alex has been recruited by three colleges already thanks to this program. The coaching is truly elite level.',
          rating: 5
        },
        {
          parent: 'Sarah Mitchell',
          child: 'Emma (16 years old)',
          text: 'Emma won the state championship after training here for two years. The mental training made all the difference.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'What tournaments do students compete in?',
          answer: 'We help students enter USTA tournaments, state championships, and national-level competitions based on their skill level.'
        },
        {
          question: 'Do you help with college recruitment?',
          answer: 'Yes, we provide college recruitment guidance, video creation, and connections with college coaches.'
        },
        {
          question: 'What level do students need to enter?',
          answer: 'Students should have solid groundstrokes and basic match experience. We offer evaluation sessions.'
        }
      ]
    },
    // Continue with other programs...
    {
      id: 4,
      name: 'Adult Beginner Academy',
      category: 'Adult Programs',
      description: 'Never played tennis before? Perfect! Our adult beginner program provides a welcoming environment to learn proper technique and build confidence on the court.',
      longDescription: 'Starting tennis as an adult can feel intimidating, but our Adult Beginner Academy creates a supportive, non-judgmental environment where you can learn at your own pace. Our experienced instructors understand the unique challenges adult learners face and use teaching methods specifically designed for adult learning styles. You\'ll build a solid foundation of skills while having fun and meeting other tennis enthusiasts.',
      image: '/Adult Beginner Classes.jpg',
      duration: '1.5 hours',
      participants: 'Adults 18+',
      level: 'Beginner',
      price: '€55',
      priceType: 'session',
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
      highlights: ['Beginner-friendly', 'Professional instruction', 'Social atmosphere'],
      whatYoullLearn: [
        'Proper grip and stance fundamentals',
        'Basic forehand and backhand strokes',
        'Serving technique and strategy',
        'Court positioning and movement',
        'Tennis rules and scoring',
        'Court etiquette and sportsmanship',
        'Equipment selection and care',
        'Fitness and injury prevention'
      ],
      equipment: [
        'Demo rackets available',
        'Standard tennis balls',
        'Court accessories provided',
        'Equipment purchase guidance',
        'Loaner equipment for beginners'
      ],
      coach: {
        name: 'James Thompson',
        specialization: 'Adult Instruction',
        experience: '12 years',
        certification: 'USPTA Certified Professional',
        bio: 'James specializes in adult instruction and has helped over 500 adults discover their love for tennis.'
      },
      schedule_details: [
        { day: 'Tuesday', time: '7:00-8:30 PM', location: 'Court 1-2' },
        { day: 'Thursday', time: '7:00-8:30 PM', location: 'Court 1-2' },
        { day: 'Saturday', time: '11:00 AM-12:30 PM', location: 'Court 1-2' },
        { day: 'Sunday', time: '1:00-2:30 PM', location: 'Court 1-2' }
      ],
      testimonials: [
        {
          parent: 'Jennifer Walsh',
          child: 'Adult Student',
          text: 'I was terrified to start tennis at 35, but this program made me feel so welcome. The instructors are patient and I\'ve made great friends!',
          rating: 5
        },
        {
          parent: 'David Martinez',
          child: 'Adult Student',
          text: 'After 6 months, I can actually play tennis! The progression is perfect and the group is very supportive.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'I\'ve never held a racket. Is this really for beginners?',
          answer: 'Absolutely! Most of our students have never played tennis before. We start with the very basics.'
        },
        {
          question: 'What should I wear and bring?',
          answer: 'Athletic clothing and tennis shoes. We provide rackets and balls until you\'re ready to purchase your own.'
        },
        {
          question: 'How long before I can play matches?',
          answer: 'Most students are ready for casual matches after 8-10 weeks, depending on practice frequency.'
        }
      ]
    },
    {
      id: 5,
      name: 'Competitive Adult League',
      category: 'Adult Programs',
      description: 'Join our thriving adult competitive scene with organized leagues, tournaments, and regular match play designed to challenge and improve your game.',
      longDescription: 'Our Competitive Adult League is the heart of our adult tennis community. With skill-based divisions ensuring fair and competitive matches, regular league play, tournaments, and social events, this program offers everything competitive adult players need. Whether you\'re looking to climb the rankings or simply enjoy regular competitive tennis, our league provides structure, competition, and camaraderie.',
      image: '/Adult Competitive League.webp',
      duration: '2 hours',
      participants: 'Adults 18+',
      level: 'Intermediate to Advanced',
      price: '€75',
      priceType: 'session',
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
      highlights: ['Active community', 'Competitive matches', 'Social events'],
      whatYoullLearn: [
        'Advanced match strategies',
        'Competitive mindset development',
        'Pressure point management',
        'Opponent analysis and adaptation',
        'League rules and procedures',
        'Sportsmanship in competition',
        'Continuous improvement mindset',
        'Tennis community networking'
      ],
      equipment: [
        'Professional tournament balls',
        'Court equipment provided',
        'Match tracking systems',
        'Tournament-quality nets',
        'Professional scoring support'
      ],
      coach: {
        name: 'Sophie Chen',
        specialization: 'Competitive Adult Tennis',
        experience: '10 years',
        certification: 'PTR Professional',
        bio: 'Former college player who now manages our adult competitive programs and has organized over 50 successful tournaments.'
      },
      schedule_details: [
        { day: 'Monday', time: '7:00-9:00 PM', location: 'Court 3-6' },
        { day: 'Wednesday', time: '7:00-9:00 PM', location: 'Court 3-6' },
        { day: 'Saturday', time: '3:00-5:00 PM', location: 'Court 3-6' },
        { day: 'Sunday', time: '3:00-5:00 PM', location: 'Court 3-6' }
      ],
      testimonials: [
        {
          parent: 'Mark Stevens',
          child: 'Adult Player',
          text: 'The league has been amazing! I\'ve improved my game significantly and made lifelong friends. Great competition every week.',
          rating: 5
        },
        {
          parent: 'Linda Rodriguez',
          child: 'Adult Player',
          text: 'I love the skill-based divisions. Every match is competitive and fair. The tournaments are professionally run.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'How are skill divisions determined?',
          answer: 'We use a combination of self-rating, evaluation matches, and USTA ratings to place players in appropriate divisions.'
        },
        {
          question: 'How often are league matches?',
          answer: 'League matches are typically once per week, with additional tournament opportunities monthly.'
        },
        {
          question: 'Can I join mid-season?',
          answer: 'Yes, we often have openings mid-season. Contact us to check current availability.'
        }
      ]
    },
    {
      id: 9,
      name: 'Summer Tennis Camp',
      category: 'Specialty Camps',
      description: 'Week-long intensive program combining skill development, fitness, competition, and fun activities. The ultimate tennis experience for young players.',
      longDescription: 'Our Summer Tennis Camp is the highlight of many young players\' tennis year. This intensive week-long program combines serious skill development with fun activities, fitness training, and competitive play. Campers receive daily instruction from our best coaches, participate in tournaments, attend mental training sessions, and enjoy special activities that create lasting memories and friendships.',
      image: '/Summer Tennis Camp.avif',
      duration: '5 days, 6 hours/day',
      participants: 'Ages 8-16',
      level: 'All Levels',
      price: '€350',
      priceType: 'week',
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
      highlights: ['Intensive training', 'Professional clinics', 'Complete experience'],
      whatYoullLearn: [
        'Intensive stroke development',
        'Advanced strategies and tactics',
        'Mental toughness training',
        'Physical fitness and conditioning',
        'Tournament competition experience',
        'Leadership and teamwork skills',
        'Goal setting and achievement',
        'Lifelong tennis friendships'
      ],
      equipment: [
        'All equipment provided',
        'Professional training aids',
        'Video analysis equipment',
        'Fitness training tools',
        'Camp t-shirt and materials'
      ],
      coach: {
        name: 'Multiple Coaches',
        specialization: 'Youth Development',
        experience: 'Varies',
        certification: 'All Certified Professionals',
        bio: 'Our entire coaching staff participates in camp, providing diverse expertise and teaching styles.'
      },
      schedule_details: [
        { day: 'Monday-Friday', time: '9:00 AM-3:00 PM', location: 'All Courts' }
      ],
      testimonials: [
        {
          parent: 'Nancy Wilson',
          child: 'Tyler (12 years old)',
          text: 'Tyler still talks about tennis camp 6 months later! He made great friends and his game improved dramatically.',
          rating: 5
        },
        {
          parent: 'Carlos Martinez',
          child: 'Sofia (10 years old)',
          text: 'Best week of Sofia\'s summer! The coaches were amazing and she can\'t wait for next year\'s camp.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'What\'s included in the camp fee?',
          answer: 'All instruction, equipment use, snacks, camp t-shirt, and awards ceremony. Lunch is not included.'
        },
        {
          question: 'What if it rains?',
          answer: 'We have indoor facilities and rain-day activities planned. Camp continues regardless of weather.'
        },
        {
          question: 'Are different skill levels separated?',
          answer: 'Yes, we group campers by age and skill level to ensure appropriate instruction for everyone.'
        }
      ]
    },
    {
      id: 6,
      name: 'Cardio Tennis',
      category: 'Adult Programs',
      description: 'High-energy fitness program combining tennis skills with cardiovascular exercise. Perfect for players wanting to improve fitness while having fun.',
      longDescription: 'Cardio Tennis is the perfect fusion of fitness and tennis fun! This high-energy group fitness program combines tennis drills with cardiovascular exercise and upbeat music. Whether you\'re a seasoned player or complete beginner, Cardio Tennis provides a great workout while improving your tennis skills. It\'s a no-pressure environment where the focus is on fitness, fun, and burning calories.',
      image: '/premium_photo-1664303119944-4cf5302bb701.avif',
      duration: '1 hour',
      participants: 'Adults 18+',
      level: 'All Levels',
      price: '€40',
      priceType: 'session',
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
      highlights: ['Fitness focused', 'Fun atmosphere', 'All skill levels'],
      whatYoullLearn: [
        'Cardiovascular fitness improvement',
        'Tennis ball handling skills',
        'Agility and coordination',
        'Group exercise motivation',
        'Stress relief through exercise',
        'Basic tennis techniques',
        'Fat burning and muscle toning',
        'Social fitness community'
      ],
      equipment: [
        'Tennis balls provided',
        'Court equipment included',
        'Heart rate monitors available',
        'Music system setup',
        'Water stations available'
      ],
      coach: {
        name: 'Lisa Johnson',
        specialization: 'Fitness & Tennis Integration',
        experience: '8 years',
        certification: 'Cardio Tennis Certified',
        bio: 'Lisa combines her passion for fitness and tennis to create energizing workouts that keep participants coming back for more.'
      },
      schedule_details: [
        { day: 'Monday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { day: 'Wednesday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { day: 'Friday', time: '6:00-7:00 PM', location: 'Court 1-2' },
        { day: 'Saturday', time: '9:00-10:00 AM', location: 'Court 1-2' }
      ],
      testimonials: [
        {
          parent: 'Amanda Davis',
          child: 'Adult Participant',
          text: 'Cardio Tennis is addictive! I\'ve lost 15 pounds and my tennis has improved dramatically. The music keeps me motivated!',
          rating: 5
        },
        {
          parent: 'Tom Wilson',
          child: 'Adult Participant',
          text: 'Great workout that doesn\'t feel like work! The group energy is amazing and I\'ve made great friends.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'Do I need tennis experience?',
          answer: 'Not at all! Cardio Tennis is designed for all fitness and skill levels. We focus on fun and fitness first.'
        },
        {
          question: 'How many calories will I burn?',
          answer: 'Participants typically burn 400-600 calories per session, depending on intensity and body weight.'
        },
        {
          question: 'What should I bring?',
          answer: 'Just bring water, a towel, and athletic shoes. We provide all tennis equipment.'
        }
      ]
    },
    {
      id: 7,
      name: 'Private Coaching',
      category: 'Private Coaching',
      description: 'One-on-one instruction with our certified professionals. Customized training plans designed specifically for your goals and skill level.',
      longDescription: 'Private coaching offers the ultimate personalized tennis experience. Working one-on-one with our certified professionals, you\'ll receive customized instruction tailored to your specific goals, skill level, and learning style. Whether you\'re a complete beginner looking to learn proper fundamentals or an advanced player fine-tuning your technique, private lessons provide the focused attention needed for rapid improvement.',
      image: '/One-on-One Coaching.JPG',
      duration: '1 hour',
      participants: 'Individual',
      level: 'All Levels',
      price: '€120',
      priceType: 'session',
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
      highlights: ['Personalized attention', 'Fastest improvement', 'Expert coaching'],
      whatYoullLearn: [
        'Customized skill development',
        'Personal technique refinement',
        'Strategic game planning',
        'Mental game improvement',
        'Physical conditioning guidance',
        'Match preparation strategies',
        'Equipment optimization',
        'Goal setting and tracking'
      ],
      equipment: [
        'Professional video analysis',
        'All court equipment provided',
        'Specialized training aids',
        'Personalized drill equipment',
        'Progress tracking materials'
      ],
      coach: {
        name: 'Various Coaches',
        specialization: 'Individualized Instruction',
        experience: 'All 10+ years',
        certification: 'All Professional Certified',
        bio: 'Our entire coaching staff offers private lessons, each bringing unique expertise and teaching styles to match your learning preferences.'
      },
      schedule_details: [
        { day: 'Monday-Sunday', time: '7:00 AM - 9:00 PM', location: 'Any Court' }
      ],
      testimonials: [
        {
          parent: 'Sarah Mitchell',
          child: 'Adult Student',
          text: 'Private lessons transformed my game completely. The personalized attention and video analysis helped me break through plateaus I\'d been stuck at for years.',
          rating: 5
        },
        {
          parent: 'Marcus Johnson',
          child: 'Junior Player',
          text: 'My son improved more in 3 months of private lessons than in 2 years of group classes. Worth every penny!',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'How often should I take private lessons?',
          answer: 'Most students see great results with 1-2 lessons per week, combined with practice time.'
        },
        {
          question: 'Can I choose my coach?',
          answer: 'Yes! We\'ll help match you with a coach based on your goals, schedule, and learning style.'
        },
        {
          question: 'Do you offer packages or discounts?',
          answer: 'Yes, we offer 5-lesson and 10-lesson packages with discounted rates.'
        }
      ]
    },
    {
      id: 8,
      name: 'Semi-Private Lessons',
      category: 'Private Coaching',
      description: 'Share the cost and experience with a friend or family member. Perfect for couples, siblings, or friends wanting personalized attention.',
      longDescription: 'Semi-Private Lessons offer the perfect balance between personalized instruction and shared learning experience. Ideal for couples, friends, siblings, or training partners of similar skill levels, these lessons provide focused attention while allowing you to share the cost and motivation with someone else. Our coaches adapt instruction to work with both players while maintaining the quality and customization of private coaching.',
      image: '/Adult Beginner Classes.jpg',
      duration: '1 hour',
      participants: '2 players',
      level: 'All Levels',
      price: '€80',
      priceType: 'session per person',
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
      highlights: ['Shared experience', 'Cost effective', 'Partner motivation'],
      whatYoullLearn: [
        'Collaborative skill development',
        'Partner-based drills and exercises',
        'Competitive motivation techniques',
        'Shared goal setting strategies',
        'Communication on court',
        'Doubles play strategies',
        'Mutual support and encouragement',
        'Cost-effective improvement methods'
      ],
      equipment: [
        'All equipment provided',
        'Partner-based training aids',
        'Doubles court setup',
        'Video analysis available',
        'Progress tracking for both players'
      ],
      coach: {
        name: 'Various Coaches',
        specialization: 'Paired Instruction',
        experience: 'All 8+ years',
        certification: 'Professional Certified',
        bio: 'Our coaches are experienced in working with pairs and understand how to balance individual needs while creating shared learning experiences.'
      },
      schedule_details: [
        { day: 'Monday-Sunday', time: '7:00 AM - 9:00 PM', location: 'Any Court' }
      ],
      testimonials: [
        {
          parent: 'John & Mary Smith',
          child: 'Adult Couple',
          text: 'Semi-private lessons were perfect for us! We motivated each other and the coach gave us both individual attention. Great value too!',
          rating: 5
        },
        {
          parent: 'The Johnson Family',
          child: 'Parent & Teen',
          text: 'Father-son lessons have been amazing bonding time. We both improved and had so much fun learning together.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'Do both players need the same skill level?',
          answer: 'Similar levels work best, but our coaches can adapt to work with slight skill differences.'
        },
        {
          question: 'Can we switch between private and semi-private?',
          answer: 'Absolutely! Many students alternate between formats based on their needs and goals.'
        },
        {
          question: 'What if one person can\'t make a lesson?',
          answer: 'You can continue with a private lesson or reschedule when both can attend.'
        }
      ]
    },
    {
      id: 10,
      name: 'Adult Tennis Weekend',
      category: 'Specialty Camps',
      description: 'Intensive weekend program for adults looking to jumpstart their tennis journey or break through to the next level with focused instruction.',
      longDescription: 'Our Adult Tennis Weekend is designed for busy adults who want to fast-track their tennis development in a concentrated, immersive format. Over two intensive days, participants receive comprehensive instruction, video analysis, mental game training, and equipment consultation. This program is perfect for beginners looking to jumpstart their tennis journey or intermediate players wanting to break through plateaus.',
      image: '/rivalry.avif',
      duration: '2 days, 4 hours/day',
      participants: 'Adults 18+',
      level: 'All Levels',
      price: '€180',
      priceType: 'weekend',
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
      highlights: ['Intensive format', 'Video analysis', 'Complete package'],
      whatYoullLearn: [
        'Comprehensive stroke development',
        'Advanced technique analysis',
        'Mental game strategies',
        'Equipment optimization',
        'Practice plan development',
        'Goal setting for improvement',
        'Tournament preparation basics',
        'Tennis fitness fundamentals'
      ],
      equipment: [
        'All equipment provided',
        'Video analysis technology',
        'Professional instruction materials',
        'Equipment demonstration selection',
        'Take-home practice guides'
      ],
      coach: {
        name: 'Elite Coaching Team',
        specialization: 'Intensive Adult Development',
        experience: '15+ years average',
        certification: 'All Elite Certified',
        bio: 'Our top coaches collaborate to provide comprehensive weekend training that delivers maximum results in minimum time.'
      },
      schedule_details: [
        { day: 'Saturday', time: '9:00 AM-1:00 PM', location: 'Courts 3-6' },
        { day: 'Sunday', time: '9:00 AM-1:00 PM', location: 'Courts 3-6' }
      ],
      testimonials: [
        {
          parent: 'Michelle Rodriguez',
          child: 'Adult Participant',
          text: 'The weekend intensive was exactly what I needed! I learned more in two days than in months of sporadic lessons. The video analysis was eye-opening.',
          rating: 5
        },
        {
          parent: 'Steve Anderson',
          child: 'Adult Participant',
          text: 'Great format for busy professionals. Intensive but fun, and the practice plan they gave me has kept me improving for months after.',
          rating: 5
        }
      ],
      faq: [
        {
          question: 'What\'s included in the weekend fee?',
          answer: 'All instruction, equipment use, video analysis session, group lunch both days, equipment consultation, and take-home practice plan.'
        },
        {
          question: 'How intensive is the program?',
          answer: 'It\'s focused but designed for all fitness levels. We include breaks and vary the intensity throughout each day.'
        },
        {
          question: 'Can beginners really benefit from this format?',
          answer: 'Absolutely! The intensive format is great for beginners who want to build a solid foundation quickly.'
        }
      ]
    }
  ]

  const program = programs.find(p => p.id === parseInt(programId))

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'What You\'ll Learn', icon: Target },
    { id: 'schedule', label: 'Schedule & Pricing', icon: Calendar },
    { id: 'coach', label: 'Your Coach', icon: UserCheck },
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'faq', label: 'FAQ', icon: Heart }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      {/* Hero Section */}
      <section className="section-padding py-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-gradient-to-br from-neon-green to-tennis-green rounded-2xl p-6 md:p-8 lg:p-12 text-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-black rounded-full"></div>
            </div>

            <div className="relative z-10">
              <Link to="/programs" className="inline-flex items-center gap-2 text-black/80 hover:text-black mb-6 transition-colors duration-300">
                <ArrowLeft size={20} />
                Back to Programs
              </Link>
              
              <div className="md:flex items-center gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                    <span className="bg-white/20 border border-black text-black text-sm font-semibold px-3 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {program.name}
                  </h1>
                  <p className="text-black/80 text-lg leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-black">
                      <Clock size={16} />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <Users size={16} />
                      <span className="font-medium">{program.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <DollarSign size={16} />
                      <span className="font-medium">{program.price}/{program.priceType}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={`/programs/${program.id}/enroll`}
                      className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                    >
                      Enroll Now
                    </Link>
                    <button className="bg-white/20 border border-black text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300">
                      Schedule Trial
                    </button>
                  </div>
                </div>
                
                <div className="md:w-1/3 mt-8 md:mt-0">
                  <div className="bg-white/20 rounded-2xl overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="section-padding">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-neon-green text-black shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section-padding pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-1 md:p-2">
          <div className="bg-white rounded-2xl p-6 md:p-8">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-6">Program Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {program.longDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Program Features</h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-neon-green mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Program Highlights</h3>
                    <div className="space-y-3">
                      {program.highlights.map((highlight, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Award size={16} className="text-neon-green" />
                            <span className="font-medium text-black">{highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Equipment & Materials</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {program.equipment.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Zap size={14} className="text-neon-green" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">What You'll Learn</h2>
                <p className="text-gray-700 text-lg mb-8">
                  Our carefully designed curriculum ensures progressive skill development and comprehensive tennis education.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {program.whatYoullLearn.map((skill, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-neon-green rounded-full p-1 mt-1">
                          <CheckCircle size={12} className="text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">
                            {skill.split(' ').slice(0, 3).join(' ')}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {skill}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule & Pricing Tab */}
            {activeTab === 'schedule' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-6">Schedule & Pricing</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">Class Schedule</h3>
                      <div className="space-y-3">
                        {program.schedule_details.map((schedule, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-black">{schedule.day}</div>
                                <div className="text-gray-600">{schedule.time}</div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-1 text-gray-600">
                                  <MapPin size={14} />
                                  <span className="text-sm">{schedule.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-black mb-4">Pricing Information</h3>
                      <div className="bg-neon-green rounded-lg p-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-black mb-2">
                            {program.price}
                          </div>
                          <div className="text-black/80 mb-4">per {program.priceType}</div>
                          <div className="space-y-2 text-sm text-black/80">
                            <div>✓ All equipment included</div>
                            <div>✓ Professional instruction</div>
                            <div>✓ Progress tracking</div>
                            <div>✓ Make-up lessons available</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 space-y-3">
                        <Link 
                          to={`/programs/${program.id}/enroll`}
                          className="w-full bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 text-center block"
                        >
                          Enroll Now
                        </Link>
                        <button className="w-full bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300">
                          Schedule Trial Lesson
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Coach Tab */}
            {activeTab === 'coach' && (
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Meet Your Coach</h2>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="md:flex items-center gap-8">
                    <div className="md:w-1/3 text-center mb-6 md:mb-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-neon-green to-tennis-green rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-black font-bold text-4xl">{program.coach.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">{program.coach.name}</h3>
                      <p className="text-neon-green font-semibold mb-1">{program.coach.specialization}</p>
                      <p className="text-gray-600">{program.coach.experience} • {program.coach.certification}</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold text-black mb-4">About Your Coach</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {program.coach.bio}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-black mb-2">Experience</h5>
                          <p className="text-gray-600">{program.coach.experience}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-semibold text-black mb-2">Certification</h5>
                          <p className="text-gray-600">{program.coach.certification}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && (
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Student & Parent Reviews</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {program.testimonials.map((testimonial, index) => (
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
                        <h4 className="font-semibold text-black">{testimonial.parent}</h4>
                        {testimonial.child !== 'Adult Student' && (
                          <p className="text-neon-green text-sm font-medium">Parent of {testimonial.child}</p>
                        )}
                        {testimonial.child === 'Adult Student' && (
                          <p className="text-neon-green text-sm font-medium">Program Participant</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {program.faq.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                        <Heart size={16} className="text-neon-green" />
                        {item.question}
                      </h4>
                      <p className="text-gray-700 leading-relaxed ml-6">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center bg-black rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-gray-300 mb-6">
                    Our program coordinators are here to help you find the perfect fit.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="tel:+15551230000" className="bg-neon-green text-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-green transition-all duration-300 inline-flex items-center gap-2">
                      <Phone size={16} />
                      Call Us
                    </a>
                    <a href="mailto:programs@baltenn.com" className="bg-white/20 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 inline-flex items-center gap-2">
                      <Mail size={16} />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramDetailPage 