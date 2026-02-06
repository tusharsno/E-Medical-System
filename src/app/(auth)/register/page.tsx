// export default function RegisterPage() {
//   return (
//     <div className="flex items-center justify-center h-screen px-4">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

//         <form className="flex flex-col gap-4">
//           <input type="text" placeholder="Full Name" className="p-3 border rounded" />
//           <input type="email" placeholder="Email" className="p-3 border rounded" />
//           <input type="password" placeholder="Password" className="p-3 border rounded" />

//           <select className="p-3 border rounded">
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//           </select>

//           <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700">
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4 opacity-70">
//           Already have an account? <a href="/login" className="text-blue-500">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [role, setRole] = useState("patient");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Create Account
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Join the E-Medical system
        </p>

        <form className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="example@gmail.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="+8801XXXXXXXXX"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 font-medium">Register As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Doctor Extra Fields */}
          {role === "doctor" && (
            <div className="space-y-5">

              <div>
                <label className="block mb-1 font-medium">BMDC Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  placeholder="BMDC-XXXX"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Specialization</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  placeholder="Cardiology, Dermatology..."
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Years of Experience</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  placeholder="5"
                />
              </div>

            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Already have an account?
          <Link href="/(auth)/login" className="text-blue-600 dark:text-blue-400 font-medium ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
