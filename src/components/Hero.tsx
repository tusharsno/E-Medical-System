export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Digital Healthcare Made Simple
        </h2>

        <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
          Book appointments, consult doctors, receive digital prescriptions 
          and manage medical records — all in one platform.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}