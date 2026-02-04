// Optional 

import React from 'react';

export default function DoctorDashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
      <p className="text-gray-600">Welcome, Doctor. Here you can manage your appointments and patients.</p>
      
      {/* Gemini Tip: Highlight this area and press Ctrl+I to generate specific dashboard features! */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow-sm bg-white">
          <h2 className="font-semibold">Today's Appointments</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-4 border rounded shadow-sm bg-white">
          <h2 className="font-semibold">Pending Prescriptions</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="p-4 border rounded shadow-sm bg-white">
          <h2 className="font-semibold">Total Patients</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}