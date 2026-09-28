import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MyPlanProvider from "@/context/MyPlanContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "A dark, no-nonsense gym companion to plan and log your workouts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d10] text-[#ffffff] text-center xl:text-left ">
        <MyPlanProvider>
          <header>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-slate-700">
                <Navbar></Navbar>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
            {children}
          </main>
          <footer className="bg-[#090A0D]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-t border-slate-700">
                <Footer></Footer>
              </div>
            </div>
          </footer>
          <ToastContainer />
        </MyPlanProvider>
      </body>
    </html>
  );
}
