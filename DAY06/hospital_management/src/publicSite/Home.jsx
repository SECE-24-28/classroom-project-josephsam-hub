import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { name: 'Emergency Care', icon: '🚨', description: '24/7 emergency medical services' },
    { name: 'Cardiology', icon: '❤️', description: 'Heart and cardiovascular care' },
    { name: 'Pediatrics', icon: '👶', description: 'Specialized care for children' },
    { name: 'Surgery', icon: '🏥', description: 'Advanced surgical procedures' },
    { name: 'Radiology', icon: '📡', description: 'Medical imaging and diagnostics' },
    { name: 'Laboratory', icon: '🧪', description: 'Comprehensive lab testing' },
    { name: 'Pharmacy', icon: '💊', description: 'Full-service pharmacy' },
  ];

  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', image: '👩⚕️', rating: 4.9 },
    { name: 'Dr. Michael Chen', specialty: 'Pediatrics', image: '👨⚕️', rating: 4.8 },
    { name: 'Dr. Emily Davis', specialty: 'Surgery', image: '👩⚕️', rating: 4.9 },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      text: 'Exceptional care and professional staff. Joe Hospital saved my life during my emergency visit.',
      rating: 5,
    },
    {
      name: 'John Smith',
      text: 'The pediatric team was amazing with my daughter. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      text: 'State-of-the-art facilities and compassionate doctors. Best hospital in the city.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hospital text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Caring for Life,<br />
              <span className="text-red-200">Connected by Heart</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Experience world-class healthcare with compassion, innovation, and excellence. 
              Your health journey starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/book-appointment"
                className="bg-white text-hospital-red px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                📅 Book Appointment
              </Link>
              <Link
                to="/doctors"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-hospital-red transition-all duration-200"
              >
                👨⚕️ Find Doctor
              </Link>
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 animate-pulse-slow"
              >
                🚨 Emergency
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with expertise and compassion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <Link
                  to={`/services/${service.name.toLowerCase().replace(' ', '-')}`}
                  className="inline-block mt-4 text-hospital-red font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your health and well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="glass-card p-6 rounded-xl text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{doctor.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-hospital-red font-medium mb-2">{doctor.specialty}</p>
                <div className="flex justify-center items-center mb-4">
                  <span className="text-yellow-400">⭐</span>
                  <span className="ml-1 text-gray-600">{doctor.rating}</span>
                </div>
                <Link
                  to={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary text-sm py-2 px-4"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/doctors" className="btn-secondary">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real patients who trust us with their health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-hospital-red rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hospital text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of patients who trust Joe Hospital for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-hospital-red px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Create Patient Account
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-hospital-red transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;