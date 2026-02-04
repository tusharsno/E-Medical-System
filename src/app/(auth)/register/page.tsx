export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <input type="password" placeholder="Password" className="p-3 border rounded" />

          <select className="p-3 border rounded">
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="text-center mt-4 opacity-70">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}
