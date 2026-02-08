import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#F8FAFC] dark:bg-black border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            E-Medical
          </h2>
          <p className="mt-4 text-slate-600 dark:text-white/60 leading-relaxed">
            A modern digital healthcare platform for smart consultations,
            prescriptions, and secure medical record management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-white/70">
            <li>
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/prescriptions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Prescriptions
              </Link>
            </li>
            <li>
              <Link href="/doctors" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Doctors
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 dark:text-white mb-4">
            Support
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-white/70">
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 dark:text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-white/70">
            <li>Email: support@emedical.com</li>
            <li>Phone: +880-123-456-7890</li>
            <li>Chittagong, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-6 text-sm text-slate-500 dark:text-white/50 border-t border-black/5 dark:border-white/10">
        © {new Date().getFullYear()} E-Medical. All rights reserved.
      </div>
    </footer>
  );
}
