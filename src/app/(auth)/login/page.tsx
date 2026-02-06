// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleLogin(e: any) {
//     e.preventDefault();

//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: true,
//       callbackUrl: "/dashboard/patient",
//     });
//   }

//   return (
//     <div className="flex items-center justify-center h-screen px-4">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

//         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 border rounded"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="p-3 border rounded"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
          Login
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Access your account
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
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
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?  
          <Link href="/register" className="text-blue-600 dark:text-blue-400 font-medium ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
