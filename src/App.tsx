import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import founderImage from './img/karen_maid_website.png';
import ConsultationModal from './components/ConsultationModal';

const StyledHeader = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  transition: all 0.3s ease;
  z-index: 1000;
  
  ${({ isScrolled }) => isScrolled ? `
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    transform: translateY(0);
    margin: 0.75rem 1.5rem;
    width: auto;
  ` : `
    background: white;
    transform: translateY(0);
  `}
`;

const PhoneButton = styled.a`
  background: transparent;
  color: #2C1810;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  border: 1.5px solid #2C1810;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(44, 24, 16, 0.05);
    transform: translateY(-2px);
  }

  ${({ isScrolled }) => isScrolled && `
    color: #2C1810;
    border-color: #2C1810;
    
    &:hover {
      background: rgba(44, 24, 16, 0.05);
    }
  `}
`;

// Add these animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const featureVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      bounce: 0.4
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const serviceVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const testimonials = [
  {
    quote: "Karen has transformed how I maintain my home. Her attention to detail and professional service is unmatched.",
    author: "Sarah Thompson",
    location: "Woodstock, GA"
  },
  {
    quote: "The level of care and professionalism is exceptional. My home has never felt more welcoming.",
    author: "Michael Chen",
    location: "Roswell, GA"
  },
  {
    quote: "A true luxury service. They think of every detail and consistently exceed expectations.",
    author: "Emily Rodriguez",
    location: "Alpharetta, GA"
  },
  {
    quote: "The transformation of my space was remarkable. Worth every penny for the peace of mind.",
    author: "James Wilson",
    location: "Sandy Springs, GA"
  },
  {
    quote: "Impeccable service and attention to detail. They've made maintaining my home effortless.",
    author: "Alexandra Foster",
    location: "Marietta, GA"
  },
  {
    quote: "The most thorough and professional cleaning service I've ever experienced.",
    author: "David Park",
    location: "Johns Creek, GA"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StyledHeader isScrolled={isScrolled}>
        <div className="logo">
          {/* Your logo here */}
          Logo
        </div>
        <PhoneButton href="tel:+1234567890" isScrolled={isScrolled}>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          Call Now
        </PhoneButton>
      </StyledHeader>
      <div style={{ paddingTop: '70px' }}>
        {/* Hero Section */}
        <motion.header 
          className="relative h-screen flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative container mx-auto px-6 z-10">
            <motion.div 
              className="max-w-3xl"
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
                The Dragonfly Effect
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                Elevating your living space with white-glove cleaning services
              </p>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.header>

        {/* Features Section */}
        <section className="min-h-screen bg-[#2C3D4F] flex items-center">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: <Shield className="w-20 h-20 mx-auto mb-8 text-white" />,
                  title: "Fully Insured",
                  description: "Premium service backed by comprehensive insurance coverage"
                },
                {
                  icon: <Sparkles className="w-20 h-20 mx-auto mb-8 text-white" />,
                  title: "White Glove Service",
                  description: "Meticulous attention to detail in every corner"
                },
                {
                  icon: <Clock className="w-20 h-20 mx-auto mb-8 text-white" />,
                  title: "Flexible Scheduling",
                  description: "Available at your convenience, 7 days a week"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-8 hover:scale-105 transition-transform duration-300"
                  variants={featureVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-semibold mb-6 text-white"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/80 text-lg leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
            >
              <motion.div 
                className="relative"
                variants={fadeInUp}
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Founder of The Dragonfly Effect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-50 rounded-lg -z-10"></div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-light mb-6">A Story of Transformation</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Like the dragonfly's journey from water to air, my path to founding The Dragonfly Effect was one of profound transformation. What began as a personal mission to overcome life's challenges evolved into a vision of helping others create spaces of serenity and order.
                  </p>
                  <p>
                    Drawing from my own experience of rebuilding and reinvention, I understood that a truly clean space isn't just about appearance—it's about creating an environment where transformation and growth can flourish.
                  </p>
                  <p className="font-medium text-gray-900">
                    Today, The Dragonfly Effect represents more than a cleaning service. It's a testament to the power of transformation, and our commitment to helping our clients achieve harmony in their homes and lives.
                  </p>
                  <div className="pt-4">
                    <p className="text-xl font-light text-gray-900">Karen</p>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="min-h-screen bg-[#E8E0D7] flex items-center py-24">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-light text-center mb-20 text-[#2C1810]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Premium Services
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                variants={serviceVariants}
                className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3 className="text-3xl mb-8 text-[#2C1810]">Regular Maintenance</h3>
                <ul className="space-y-6">
                  {['Deep cleaning of all surfaces', 'Premium eco-friendly products', 'Customized cleaning plans'].map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-4 text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#2C1810] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                variants={serviceVariants}
                className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <h3 className="text-3xl mb-8 text-[#2C1810]">Special Services</h3>
                <ul className="space-y-6">
                  {['Move-in/move-out cleaning', 'Event preparation & cleanup', 'Seasonal deep cleaning'].map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-4 text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#2C1810] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              className="flex gap-8"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[400px] bg-white p-8 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-light italic mb-6 text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-8">Experience the Difference</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to schedule your personalized consultation
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl mb-4">The Dragonfly Effect</h3>
                <p className="text-gray-400">Luxury cleaning services for discerning clients</p>
              </div>
              <div>
                <h3 className="text-xl mb-4">Contact</h3>
                <p className="text-gray-400">contact@dragonflyeffect.com</p>
                <p className="text-gray-400">(415) 555-0123</p>
              </div>
              <div>
                <h3 className="text-xl mb-4">Service Areas</h3>
                <p className="text-gray-400">Greater Atlanta Area</p>
                <p className="text-gray-400">Woodstock - Marietta - Acworth - Kennesaw - Smyrna</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} The Dragonfly Effect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;