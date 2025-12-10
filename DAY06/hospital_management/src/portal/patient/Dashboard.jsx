import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'Check-up',
      status: 'Pending'
    }
  ];

  const recentLabResults = [
    {
      id: 1,
      test: 'Complete Blood Count',
      date: '2024-01-10',
      status: 'Normal',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      test: 'Lipid Panel',
      date: '2024-01-08',
      status: 'Review Required',
      doctor: 'Dr. Sarah Johnson'
    }
  ];

  const activePrescriptions = [
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      prescribedBy: 'Dr. Sarah Johnson',
      dosage: 'Once daily',
      refillsLeft: 2,
      expiryDate: '2024-06-15'
    },
    {
      id: 2,
      medication: 'Metformin 500mg',
      prescribedBy: 'Dr. Sarah Johnson',
      dosage: 'Twice daily',
      refillsLeft: 0,
      expiryDate: '2024-02-20'
    }
  ];

  const careJourney = [
    {
      date: '2024-01-10',
      event: 'Lab Results Available',
      description: 'Complete Blood Count results are now available',
      type: 'lab'
    },
    {
      date: '2024-01-05',
      event: 'Appointment Completed',
      description: 'Follow-up appointment with Dr. Sarah Johnson',
      type: 'appointment'
    },
    {
      date: '2023-12-20',
      event: 'Prescription Filled',
      description: 'Lisinopril 10mg prescription filled',
      type: 'prescription'
    }
  ];

  const quickStats = [
    { label: 'Upcoming Appointments', value: '2', icon: '📅', color: 'blue' },
    { label: 'Pending Payments', value: '$125', icon: '💳', color: 'yellow' },
    { label: 'Lab Reports', value: '3', icon: '🧪', color: 'green' },
    { label: 'Active Prescriptions', value: '2', icon: '💊', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-2">Here's your health overview for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`text-3xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Appointments</h2>
                <Link to="/patient/appointments" className="text-hospital-red hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
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
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Lab Results */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Lab Results</h2>
                <Link to="/patient/lab-reports" className="text-hospital-red hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentLabResults.map((result) => (
                  <div key={result.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{result.test}</h3>
                        <p className="text-sm text-gray-600">Ordered by {result.doctor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{result.date}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          result.status === 'Normal' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {result.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Active Prescriptions */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Prescriptions</h2>
                <Link to="/patient/prescriptions" className="text-hospital-red hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {activePrescriptions.map((prescription) => (
                  <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900">{prescription.medication}</h3>
                    <p className="text-sm text-gray-600">{prescription.dosage}</p>
                    <p className="text-sm text-gray-600">By {prescription.prescribedBy}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        prescription.refillsLeft > 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {prescription.refillsLeft} refills left
                      </span>
                      <button className="text-hospital-red text-sm hover:underline">
                        Request Refill
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Journey Timeline */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Care Journey</h2>
              <div className="space-y-4">
                {careJourney.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      event.type === 'lab' ? 'bg-blue-500' :
                      event.type === 'appointment' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{event.event}</p>
                      <p className="text-sm text-gray-600">{event.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/book-appointment"
                  className="block w-full btn-primary text-center py-3"
                >
                  📅 Book Appointment
                </Link>
                <Link
                  to="/patient/billing"
                  className="block w-full btn-secondary text-center py-3"
                >
                  💳 Pay Bills
                </Link>
                <Link
                  to="/patient/support"
                  className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  🆘 Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;