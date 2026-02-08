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




// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Menu, X, Sun, Moon } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

// // Avoid hydration mismatch by waiting until mounted
// //   useEffect(() => setMounted(true), []);

// useEffect(() => {
//   setMounted(true);
// }, []);

//   return (
//     <nav className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//           E-Medical
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
//           <Link href="/appointments" className="hover:text-blue-600 dark:hover:text-blue-400">Appointments</Link>
//           <Link href="/prescriptions" className="hover:text-blue-600 dark:hover:text-blue-400">Prescriptions</Link>

//           {/* Theme Toggle (Desktop) */}
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-md border-none focus:ring-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           )}

//           <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//             Login
//           </Link>

//           <Link href="/register" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800">
//             Register
//           </Link>
//         </div>

//         {/* Mobile Controls (Toggle + Menu) */}
//         <div className="flex items-center gap-4 md:hidden">
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-md border-none focus:ring-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           )}
          
//           <button onClick={() => setOpen(!open)} className="text-gray-700 dark:text-gray-200">
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 border-b dark:border-gray-700">
//           <Link href="/" className="block py-2">Home</Link>
//           <Link href="/appointments" className="block py-2">Appointments</Link>
//           <Link href="/prescriptions" className="block py-2">Prescriptions</Link>
//           <hr className="dark:border-gray-700" />
//           <Link href="/login" className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center">
//             Login
//           </Link>
//           <Link href="/register" className="block px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center">
//             Register
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Stethoscope,
// } from "lucide-react";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Appointments", href: "/appointments" },
//   { name: "Prescriptions", href: "/prescriptions" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const pathname = usePathname();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
//         >
//           <Stethoscope className="w-7 h-7" />
//           <span>E-Medical</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="relative group text-sm font-medium"
//               >
//                 <span
//                   className={
//                     isActive
//                       ? "text-blue-600 dark:text-blue-400"
//                       : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
//                   }
//                 >
//                   {item.name}
//                 </span>

//                 {/* Underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300
//                     ${
//                       isActive
//                         ? "scale-x-100"
//                         : "scale-x-0 group-hover:scale-x-100"
//                     }`}
//                 />
//               </Link>
//             );
//           })}

//           {/* Theme Toggle */}
//           {mounted && (
//             <button
//               onClick={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? (
//                 <Sun size={20} />
//               ) : (
//                 <Moon size={20} />
//               )}
//             </button>
//           )}

//           {/* Auth Buttons */}
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

//         {/* Mobile Controls */}
//         <div className="md:hidden flex items-center gap-3">
//           {mounted && (
//             <button
//               onClick={() =>
//                 setTheme(theme === "dark" ? "light" : "dark")
//               }
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {theme === "dark" ? (
//                 <Sun size={20} />
//               ) : (
//                 <Moon size={20} />
//               )}
//             </button>
//           )}

//           <button
//             onClick={() => setOpen(!open)}
//             className="text-gray-700 dark:text-gray-200"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-3 border-b bg-white dark:bg-gray-900 dark:border-gray-700">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={`block py-2 font-medium ${
//                   isActive
//                     ? "text-blue-600 dark:text-blue-400"
//                     : "text-gray-700 dark:text-gray-200"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}

//           <hr className="dark:border-gray-700" />

//           <Link
//             href="/login"
//             className="block text-center px-4 py-2 bg-blue-600 text-white rounded-md"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="block text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Menu, X, Sun, Moon, Stethoscope } from "lucide-react";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Appointments", href: "/appointments" },
//   { name: "Prescriptions", href: "/prescriptions" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const pathname = usePathname();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
//       <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
//         >
//           <Stethoscope className="h-7 w-7" />
//           <span>E-Medical</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="relative group text-sm font-medium"
//               >
//                 <span
//                   className={
//                     isActive
//                       ? "text-blue-600 dark:text-blue-400"
//                       : "text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
//                   }
//                 >
//                   {item.name}
//                 </span>

//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 dark:bg-blue-400 origin-left transform transition-transform duration-300 ${
//                     isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//                   }`}
//                 />
//               </Link>
//             );
//           })}

//           {/* Theme Toggle */}
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           )}

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-3">
//             <Link
//               href="/login"
//               className="px-4 py-2 text-sm font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
//             >
//               Login
//             </Link>

//             <Link
//               href="/register"
//               className="px-5 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition"
//             >
//               Register
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Controls */}
//         <div className="md:hidden flex items-center gap-3">
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           )}

//           <button
//             onClick={() => setOpen(!open)}
//             className="text-gray-700 dark:text-gray-200"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden border-b bg-white dark:bg-gray-900 dark:border-gray-700 px-4 pb-4 space-y-3">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={`block py-2 font-medium ${
//                   isActive
//                     ? "text-blue-600 dark:text-blue-400"
//                     : "text-gray-700 dark:text-gray-200"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}

//           <hr className="dark:border-gray-700" />

//           <Link
//             href="/login"
//             className="block text-center py-2 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="block text-center py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
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
import { Menu, X, Sun, Moon, Stethoscope } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Appointments", href: "/appointments" },
  { name: "Prescriptions", href: "/prescriptions" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ CRITICAL: prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 h-[72px]" />
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white"
        >
          <Stethoscope className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <span>E-Medical</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-700 dark:text-white/70 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-white/10 transition"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 transition"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-slate-800 dark:text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}


