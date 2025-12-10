import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const specialties = [
    'all', 'Cardiology', 'Pediatrics', 'Surgery', 'Neurology', 
    'Orthopedics', 'Dermatology', 'Psychiatry', 'Radiology'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      image: '👩⚕️',
      rating: 4.9,
      reviews: 156,
      experience: '15 years',
      education: 'Harvard Medical School',
      languages: ['English', 'Spanish'],
      availability: 'Available Today',
      nextSlot: '2:30 PM',
      about: 'Specialized in interventional cardiology with expertise in complex cardiac procedures.',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      image: '👨⚕️',
      rating: 4.8,
      reviews: 203,
      experience: '12 years',
      education: 'Johns Hopkins University',
      languages: ['English', 'Mandarin'],
      availability: 'Available Tomorrow',
      nextSlot: '10:00 AM',
      about: 'Dedicated pediatrician with special interest in childhood development and immunizations.',
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Surgery',
      image: '👩⚕️',
      rating: 4.9,
      reviews: 89,
      experience: '18 years',
      education: 'Mayo Clinic',
      languages: ['English', 'French'],
      availability: 'Available Today',
      nextSlot: '4:00 PM',
      about: 'Expert in minimally invasive surgical techniques and robotic surgery.',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Neurology',
      image: '👨⚕️',
      rating: 4.7,
      reviews: 134,
      experience: '20 years',
      education: 'Stanford Medical School',
      languages: ['English'],
      availability: 'Available Next Week',
      nextSlot: 'Mon 9:00 AM',
      about: 'Neurologist specializing in stroke care, epilepsy, and movement disorders.',
    },
    {
      id: 5,
      name: 'Dr. Lisa Rodriguez',
      specialty: 'Orthopedics',
      image: '👩⚕️',
      rating: 4.8,
      reviews: 167,
      experience: '14 years',
      education: 'UCLA Medical Center',
      languages: ['English', 'Spanish'],
      availability: 'Available Today',
      nextSlot: '1:15 PM',
      about: 'Sports medicine specialist with expertise in joint replacement and arthroscopic surgery.',
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Dermatology',
      image: '👨⚕️',
      rating: 4.6,
      reviews: 98,
      experience: '10 years',
      education: 'University of Pennsylvania',
      languages: ['English', 'Korean'],
      availability: 'Available Tomorrow',
      nextSlot: '11:30 AM',
      about: 'Dermatologist specializing in skin cancer detection and cosmetic procedures.',
    },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesAvailability = selectedAvailability === 'all' || 
                               (selectedAvailability === 'today' && doctor.availability.includes('Today')) ||
                               (selectedAvailability === 'tomorrow' && doctor.availability.includes('Tomorrow')) ||
                               (selectedAvailability === 'week' && doctor.availability.includes('Week'));
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-hospital text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Doctor
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Connect with our experienced medical professionals who are dedicated to your health and well-being
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-red focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Specialty Filter */}
            <div className="flex-1 max-w-xs">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-red focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Filter */}
            <div className="flex-1 max-w-xs">
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-red focus:border-transparent"
              >
                <option value="all">All Availability</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Available Tomorrow</option>
                <option value="week">Available This Week</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-hospital rounded-full flex items-center justify-center text-4xl">
                      {doctor.image}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-hospital-red font-medium">{doctor.specialty}</p>
                        <p className="text-sm text-gray-600">{doctor.education}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-yellow-400">⭐</span>
                          <span className="ml-1 font-medium">{doctor.rating}</span>
                          <span className="ml-1 text-gray-500 text-sm">({doctor.reviews})</span>
                        </div>
                        <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mt-3 text-sm">{doctor.about}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-600">{doctor.availability}</p>
                        <p className="text-sm text-gray-600">Next: {doctor.nextSlot}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          to={`/doctors/${doctor.id}`}
                          className="btn-secondary text-sm py-2 px-4"
                        >
                          View Profile
                        </Link>
                        <Link
                          to={`/book-appointment?doctor=${doctor.id}`}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👨⚕️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all doctors
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('all');
                  setSelectedAvailability('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hospital text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find the Right Doctor?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Our patient care team is here to help you find the perfect match for your healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-hospital-red px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              📞 Call Patient Services
            </Link>
            <Link
              to="/patient/register"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-hospital-red transition-all"
            >
              👤 Create Patient Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;