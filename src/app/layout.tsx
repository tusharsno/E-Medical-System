// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { inter } from "next/font/google";  // extra add this one
// import "./globals.css";

// const inter = Inter({ 
//   variable: "--font-inter",
//   subsets: ["latin"] 
// });  // extra add this one 

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "E-Medical System",
//   description: "Online consultation & e-prescription platform",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // return (
//   //   <html lang="en">
//   //     <body
//   //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//   //     >
//   //       {children}
//   //     </body>
//   //   </html>
//   // );

//   // extra add this part
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//         {children}
//       </body>
//     </html>  
//   );
// }


import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Medical System",
  description: "Online consultation & e-prescription platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
