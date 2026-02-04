export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <input type="password" placeholder="Password" className="p-3 border rounded" />

          <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center mt-4 opacity-70">
          Don’t have an account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
}
