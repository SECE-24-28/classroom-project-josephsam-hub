import React from 'react';

// Reusable Card Components for the Hospital System

export const StatCard = ({ title, value, change, icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
  };

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${
              change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className={`text-3xl ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export const ServiceCard = ({ service, onBookNow, onLearnMore }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-4xl mb-4">{service.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    
    {service.features && (
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
    )}
    
    <div className="flex space-x-2">
      <button
        onClick={() => onBookNow(service)}
        className="flex-1 btn-primary text-center text-sm py-2"
      >
        Book Now
      </button>
      <button
        onClick={() => onLearnMore(service)}
        className="flex-1 btn-secondary text-center text-sm py-2"
      >
        Learn More
      </button>
    </div>
  </div>
);

export const DoctorCard = ({ doctor, onBookAppointment, onViewProfile }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 bg-gradient-hospital rounded-full flex items-center justify-center text-4xl">
          {doctor.image}
        </div>
      </div>

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
          {doctor.languages?.map((lang, index) => (
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
            <button
              onClick={() => onViewProfile(doctor)}
              className="btn-secondary text-sm py-2 px-4"
            >
              View Profile
            </button>
            <button
              onClick={() => onBookAppointment(doctor)}
              className="btn-primary text-sm py-2 px-4"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AppointmentCard = ({ appointment, onReschedule, onCancel }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
        <p className="text-sm text-gray-600">{appointment.specialty}</p>
        <p className="text-sm text-gray-600">{appointment.type}</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">{appointment.date}</p>
        <p className="text-sm text-gray-600">{appointment.time}</p>
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
          appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
          appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          appointment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {appointment.status}
        </span>
      </div>
    </div>
    
    {(onReschedule || onCancel) && (
      <div className="mt-4 flex space-x-2">
        {onReschedule && (
          <button
            onClick={() => onReschedule(appointment)}
            className="text-hospital-red text-sm hover:underline"
          >
            Reschedule
          </button>
        )}
        {onCancel && (
          <button
            onClick={() => onCancel(appointment)}
            className="text-gray-600 text-sm hover:underline"
          >
            Cancel
          </button>
        )}
      </div>
    )}
  </div>
);

export const TestimonialCard = ({ testimonial }) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
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
);