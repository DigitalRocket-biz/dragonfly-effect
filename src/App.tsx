import React from 'react';
import { Star, CheckCircle, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              The Dragonfly Effect
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Elevating your living space with white-glove cleaning services
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-6 text-gray-900" />
              <h3 className="text-xl font-semibold mb-4">Fully Insured</h3>
              <p className="text-gray-600">Premium service backed by comprehensive insurance coverage</p>
            </div>
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-gray-900" />
              <h3 className="text-xl font-semibold mb-4">White Glove Service</h3>
              <p className="text-gray-600">Meticulous attention to detail in every corner</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-6 text-gray-900" />
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">Available at your convenience, 7 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Karen, Founder of The Dragonfly Effect"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-50 rounded-lg -z-10"></div>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Regular Maintenance</h3>
              <ul className="space-y-4">
                {['Deep cleaning of all surfaces', 'Premium eco-friendly products', 'Customized cleaning plans'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl mb-4">Special Services</h3>
              <ul className="space-y-4">
                {['Move-in/move-out cleaning', 'Event preparation & cleanup', 'Seasonal deep cleaning'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-light italic mb-8">
              "The Dragonfly Effect has transformed how I maintain my home. Their attention to detail and professional service is unmatched."
            </blockquote>
            <p className="text-gray-600">— Sarah Thompson, Pacific Heights</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8">Experience the Difference</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to schedule your personalized consultation
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
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
              <p className="text-gray-400">San Francisco Bay Area</p>
              <p className="text-gray-400">Peninsula & Silicon Valley</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Dragonfly Effect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;