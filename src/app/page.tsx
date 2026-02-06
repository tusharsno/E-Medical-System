// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-center px-4">
//       <h1 className="text-4xl font-bold mb-4">
//         E-Medical Consultation & Prescription System
//       </h1>

//       <p className="text-lg opacity-80 max-w-xl mb-6">
//         A modern digital platform for seamless doctor-patient consultation,
//         online appointment booking, and secure prescription management.
//       </p>

//       <div className="flex gap-4">
//         <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
//           Login
//         </a>

//         <a href="/register" className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow">
//           Register
//         </a>
//       </div>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Smart <span className="text-blue-600 dark:text-blue-400">E-Medical</span>  
            <br /> Consultation & Prescription
          </h1>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Book appointments, get digital prescriptions, and manage all your medical
            history securely from one modern platform.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/appointments"
              className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Book Appointment
            </a>

            <a
              href="/(auth)/register"
              className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
            alt="Doctor Illustration"
            className="w-80 md:w-[420px] drop-shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}
