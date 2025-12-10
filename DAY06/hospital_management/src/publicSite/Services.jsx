import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🏥' },
    { id: 'emergency', name: 'Emergency', icon: '🚨' },
    { id: 'specialty', name: 'Specialty Care', icon: '⚕️' },
    { id: 'diagnostic', name: 'Diagnostic', icon: '🔬' },
    { id: 'surgical', name: 'Surgical', icon: '🏥' },
  ];

  const services = [
    {
      id: 1,
      name: 'Emergency Care',
      category: 'emergency',
      icon: '🚨',
      description: '24/7 emergency medical services with state-of-the-art trauma center',
      features: ['24/7 Availability', 'Trauma Center', 'Critical Care', 'Ambulance Service'],
      price: 'Insurance Accepted',
    },
    {
      id: 2,
      name: 'Cardiology',
      category: 'specialty',
      icon: '❤️',
      description: 'Comprehensive heart and cardiovascular care with advanced diagnostics',
      features: ['ECG/EKG', 'Echocardiography', 'Cardiac Catheterization', 'Heart Surgery'],
      price: 'From $200',
    },
    {
      id: 3,
      name: 'Pediatrics',
      category: 'specialty',
      icon: '👶',
      description: 'Specialized medical care for infants, children, and adolescents',
      features: ['Well-child Visits', 'Vaccinations', 'Growth Monitoring', 'Pediatric Surgery'],
      price: 'From $150',
    },
    {
      id: 4,
      name: 'Radiology',
      category: 'diagnostic',
      icon: '📡',
      description: 'Advanced medical imaging and diagnostic services',
      features: ['X-Ray', 'MRI', 'CT Scan', 'Ultrasound'],
      price: 'From $100',
    },
    {
      id: 5,
      name: 'Laboratory Services',
      category: 'diagnostic',
      icon: '🧪',
      description: 'Comprehensive laboratory testing and pathology services',
      features: ['Blood Tests', 'Urine Analysis', 'Biopsy', 'Genetic Testing'],
      price: 'From $50',
    },
    {
      id: 6,
      name: 'General Surgery',
      category: 'surgical',
      icon: '🔪',
      description: 'Advanced surgical procedures with minimally invasive techniques',
      features: ['Laparoscopic Surgery', 'Robotic Surgery', 'Day Surgery', 'Post-op Care'],
      price: 'Consultation Required',
    },
    {
      id: 7,
      name: 'Orthopedics',
      category: 'specialty',
      icon: '🦴',
      description: 'Bone, joint, and musculoskeletal system treatment',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
      price: 'From $250',
    },
    {
      id: 8,
      name: 'Neurology',
      category: 'specialty',
      icon: '🧠',
      description: 'Comprehensive neurological care and brain health services',
      features: ['Brain Imaging', 'Stroke Care', 'Epilepsy Treatment', 'Memory Clinic'],
      price: 'From $300',
    },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-hospital text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Medical Services
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-hospital-red text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <span className="text-sm font-medium text-hospital-red bg-red-50 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    to={`/book-appointment?service=${service.id}`}
                    className="flex-1 btn-primary text-center text-sm py-2"
                  >
                    Book Now
                  </Link>
                  <Link
                    to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Joe Hospital?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional healthcare with the latest technology and compassionate care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award-Winning Care', desc: 'Recognized for excellence in patient care and safety' },
              { icon: '⚡', title: 'Advanced Technology', desc: 'State-of-the-art medical equipment and facilities' },
              { icon: '👨⚕️', title: 'Expert Physicians', desc: 'Board-certified doctors with years of experience' },
              { icon: '🕒', title: '24/7 Availability', desc: 'Round-the-clock emergency and critical care services' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hospital text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Our medical team is ready to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/emergency"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
            >
              🚨 Emergency Services
            </Link>
            <Link
              to="/book-appointment"
              className="bg-white text-hospital-red px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              📅 Schedule Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-hospital-red transition-all"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;