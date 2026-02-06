// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//           E-Medical
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
//             Home
//           </Link>

//           <Link href="/appointments" className="hover:text-blue-600 dark:hover:text-blue-400">
//             Appointments
//           </Link>

//           <Link href="/prescriptions" className="hover:text-blue-600 dark:hover:text-blue-400">
//             Prescriptions
//           </Link>

//           <Link
//             href="/login"
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 border-b dark:border-gray-700">
//           <Link href="/" className="block">Home</Link>
//           <Link href="/appointments" className="block">Appointments</Link>
//           <Link href="/prescriptions" className="block">Prescriptions</Link>

//           <Link
//             href="/(auth)/login"
//             className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center"
//           >
//             Login
//           </Link>

//           <Link
//             href="/(auth)/register"
//             className="block px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

// Avoid hydration mismatch by waiting until mounted
//   useEffect(() => setMounted(true), []);

useEffect(() => {
  setMounted(true);
}, []);

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          E-Medical
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link href="/appointments" className="hover:text-blue-600 dark:hover:text-blue-400">Appointments</Link>
          <Link href="/prescriptions" className="hover:text-blue-600 dark:hover:text-blue-400">Prescriptions</Link>

          {/* Theme Toggle (Desktop) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border-none focus:ring-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </Link>

          <Link href="/register" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800">
            Register
          </Link>
        </div>

        {/* Mobile Controls (Toggle + Menu) */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border dark:border-gray-700"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          
          <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-gray-200">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 border-b dark:border-gray-700">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/appointments" className="block py-2">Appointments</Link>
          <Link href="/prescriptions" className="block py-2">Prescriptions</Link>
          <hr className="dark:border-gray-700" />
          <Link href="/login" className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center">
            Login
          </Link>
          <Link href="/register" className="block px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}