import React from 'react';

export default function PatientDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="font-semibold text-blue-800">My Appointments</h2>
          <p className="text-sm text-blue-600">View your upcoming doctor visits.</p>
        </div>
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="font-semibold text-green-800">Prescriptions</h2>
          <p className="text-sm text-green-600">Download your latest medical scripts.</p>
        </div>
      </div>
    </div>
  );
}