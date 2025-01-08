import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/headercomponents";
import Footer from "./components/footer/footercomponents";

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
        <main className="bg-grey-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
