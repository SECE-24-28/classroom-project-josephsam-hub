import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const dashboardStats = [
    { label: 'Total Patients', value: '2,847', change: '+12%', icon: '👥', color: 'blue' },
    { label: 'Active Doctors', value: '45', change: '+2', icon: '👨⚕️', color: 'green' },
    { label: 'Today\'s Appointments', value: '127', change: '+8%', icon: '📅', color: 'purple' },
    { label: 'Revenue (MTD)', value: '$284,750', change: '+15%', icon: '💰', color: 'yellow' },
    { label: 'Bed Occupancy', value: '78%', change: '-3%', icon: '🏥', color: 'red' },
    { label: 'Lab Tests Pending', value: '23', change: '-5', icon: '🧪', color: 'orange' },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      time: '09:00 AM',
      type: 'Cardiology',
      status: 'Confirmed'
    },
    {
      id: 2,
      patient: 'Maria Rodriguez',
      doctor: 'Dr. Michael Chen',
      time: '10:30 AM',
      type: 'Pediatrics',
      status: 'In Progress'
    },
    {
      id: 3,
      patient: 'David Wilson',
      doctor: 'Dr. Emily Davis',
      time: '11:15 AM',
      type: 'Surgery Consultation',
      status: 'Waiting'
    },
    {
      id: 4,
      patient: 'Lisa Wang',
      doctor: 'Dr. James Wilson',
      time: '02:00 PM',
      type: 'Neurology',
      status: 'Scheduled'
    }
  ];

  const departmentPerformance = [
    { name: 'Emergency', patients: 45, satisfaction: 4.8, revenue: '$45,200' },
    { name: 'Cardiology', patients: 32, satisfaction: 4.9, revenue: '$68,400' },
    { name: 'Pediatrics', patients: 28, satisfaction: 4.7, revenue: '$32,100' },
    { name: 'Surgery', patients: 15, satisfaction: 4.9, revenue: '$125,800' },
    { name: 'Neurology', patients: 18, satisfaction: 4.6, revenue: '$54,300' },
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'ICU capacity at 90% - Consider patient transfers',
      time: '10 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'New doctor Dr. Amanda Foster joined Cardiology',
      time: '2 hours ago'
    },
    {
      id: 3,
      type: 'error',
      message: 'Lab equipment maintenance required in Lab-B',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Hospital Management Overview</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hospital-red"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <button className="btn-primary">
              📊 Generate Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from yesterday
                  </p>
                </div>
                <div className="text-3xl">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Chart Placeholder */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Patient Flow Analytics</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-hospital-red text-white rounded text-sm">Daily</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Weekly</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm">Monthly</button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📈</div>
                  <p className="text-gray-600 font-medium">Interactive Chart</p>
                  <p className="text-sm text-gray-500">Patient flow and analytics visualization</p>
                </div>
              </div>
            </div>

            {/* Department Performance */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Department Performance</h2>
                <Link to="/admin/departments" className="text-hospital-red hover:underline">
                  View Details
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Patients</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Satisfaction</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentPerformance.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{dept.name}</td>
                        <td className="py-3 px-4">{dept.patients}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">⭐</span>
                            {dept.satisfaction}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium text-green-600">{dept.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Appointments */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Today's Appointments</h2>
                <Link to="/admin/appointments" className="text-hospital-red hover:underline">
                  Manage All
                </Link>
              </div>
              <div className="space-y-4">
                {recentAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        <p className="text-sm text-gray-600">{appointment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{appointment.time}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          appointment.status === 'Waiting' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Alerts and Quick Actions */}
          <div className="space-y-8">
            {/* System Alerts */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">System Alerts</h2>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'error' ? 'bg-red-50 border-red-500' :
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}>
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/admin/patients/new"
                  className="block w-full btn-primary text-center py-3"
                >
                  👥 Add New Patient
                </Link>
                <Link
                  to="/admin/doctors/new"
                  className="block w-full btn-secondary text-center py-3"
                >
                  👨⚕️ Add New Doctor
                </Link>
                <Link
                  to="/admin/appointments/new"
                  className="block w-full bg-green-100 text-green-700 text-center py-3 rounded-lg hover:bg-green-200 transition-colors"
                >
                  📅 Schedule Appointment
                </Link>
                <Link
                  to="/admin/billing/reports"
                  className="block w-full bg-purple-100 text-purple-700 text-center py-3 rounded-lg hover:bg-purple-200 transition-colors"
                >
                  💰 View Billing Reports
                </Link>
              </div>
            </div>

            {/* Hospital Status */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Hospital Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ICU Beds</span>
                  <span className="font-medium">18/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">General Beds</span>
                  <span className="font-medium">145/200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Emergency Capacity</span>
                  <span className="font-medium">8/15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '53%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;