import type { Metadata } from "next";
import customFont from "next/font/local"
import "./globals.css";
import Header from "./components/header/headercomponents";
import Footer from "./components/footer/footercomponents";

// const farroMedium = customFont({
//   src: [{
//     path: '../../public/assets/fonts/Farro-Medium.woff2', 
//     weight: '500',
//   }],
//   display: 'swap',
//   variable: "--farro"  
// });
// const farroBold = customFont({
//   src: '../../public/assets/fonts/Farro-Bold.woff2', 
//   weight: '700',
//   display: 'swap',
//   variable: "--farro" 
// });

export const metadata: Metadata = {
  title: "Compare the Best University Degrees Courses UK | Whatuni",
  description: "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UK’s biggest student reviews site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
