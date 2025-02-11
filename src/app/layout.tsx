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
      <body className={inter.className}>
        <main className="bg-neutral-950 h-full font-mono text-white py-10 md:px-0 px-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
