import React from 'react';

export default function PrescriptionsPage() {
  const prescriptions = [
    { id: 1, drug: "Amoxicillin", dose: "500mg", instructions: "Once daily after meals", status: "Active" },
    { id: 2, drug: "Lisinopril", dose: "10mg", instructions: "Twice daily", status: "Completed" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">E-Prescription Records</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Request Refill
        </button>
      </div>
      
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Medication</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instructions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {prescriptions.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 font-medium text-blue-600">{p.drug} ({p.dose})</td>
                <td className="px-6 py-4 text-gray-600">{p.instructions}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${p.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}