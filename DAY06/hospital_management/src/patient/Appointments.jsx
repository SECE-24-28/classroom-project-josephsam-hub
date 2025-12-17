import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContextNew';

const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const mockAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-01-15',
      time: '2:30 PM',
      status: 'Confirmed',
      reason: 'Regular checkup'
    }
  ];

  useEffect(() => {
    setAppointments(mockAppointments);
  }, []);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      ...formData,
      status: 'Pending',
      patient: user?.name
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({ doctor: '', date: '', time: '', reason: '' });
    setShowBooking(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <button onClick={() => setShowBooking(true)} className="btn-primary">
            📅 Book New Appointment
          </button>
        </div>

        <div className="grid gap-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{appointment.doctor}</h3>
                  <p className="text-hospital-red font-medium">{appointment.specialty}</p>
                  <p className="text-gray-600 mt-2">{appointment.reason}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{appointment.date}</p>
                  <p className="text-gray-600">{appointment.time}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
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

        {showBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="glass-card p-8 rounded-xl max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>
              <form onSubmit={handleBookAppointment} className="space-y-4">
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Sarah Johnson - Cardiology">Dr. Sarah Johnson - Cardiology</option>
                </select>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                </select>
                <textarea
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="Reason for appointment"
                  required
                />
                <div className="flex space-x-3">
                  <button type="submit" className="flex-1 btn-primary py-3">Book</button>
                  <button type="button" onClick={() => setShowBooking(false)} className="flex-1 btn-secondary py-3">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;