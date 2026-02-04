// Optional 
import React from 'react';

export default function AppointmentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Patient Appointments</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          No appointments found. Start by scheduling a new consultation.
        </p>
      </div>
    </div>
  );
}