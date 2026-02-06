// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-20">
//       <div className="max-w-7xl mx-auto px-6 text-center opacity-70">
//         <p>
//           © {new Date().getFullYear()} E-Medical System.  
//           All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">E-Medical</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Digital healthcare platform for smart consultation, prescription & medical record management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/appointments" className="hover:text-blue-500">Appointments</Link></li>
            <li><Link href="/prescriptions" className="hover:text-blue-500">Prescriptions</Link></li>
            <li><Link href="/doctors" className="hover:text-blue-500">Doctors</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><Link href="#" className="hover:text-blue-500">Help Center</Link></li>
            <li><Link href="#" className="hover:text-blue-500">FAQs</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Email: support@emedical.com</li>
            <li>Phone: +880-123-456-7890</li>
            <li>Address: Chittagong, Bangladesh</li>
          </ul>
        </div>

      </div>

      <div className="text-center py-4 border-t dark:border-gray-700 text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} E-Medical. All rights reserved.
      </div>
    </footer>
  );
}
