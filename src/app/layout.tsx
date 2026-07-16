import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, I'm Kshitij Varshney.",
  description: "MERN Stack engineer from India",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-neutral-100 selection:bg-indigo-500/30 selection:text-indigo-200`}>
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Subtle ambient light sources in the background */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none" />
          
          <main className="relative py-4 md:py-6 px-4 md:px-8">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
