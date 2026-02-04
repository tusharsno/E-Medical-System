export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        E-Medical Consultation & Prescription System
      </h1>

      <p className="text-lg opacity-80 max-w-xl mb-6">
        A modern digital platform for seamless doctor-patient consultation,
        online appointment booking, and secure prescription management.
      </p>

      <div className="flex gap-4">
        <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
          Login
        </a>

        <a href="/register" className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow">
          Register
        </a>
      </div>
    </div>
  );
}
