import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIMco Group | Authorized du Telecommunications Partner",
  description:
    "Next-gen 5G Home Wireless, prepaid mobile plans, and enterprise IT solutions across Dubai and Abu Dhabi.",
  icons: {
    icon: "/asset/logo/Simco_Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-50 antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
