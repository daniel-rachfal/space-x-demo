import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space X Demo",
  description: "Take home assignment for a job application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-gray-900 text-white min-h-dvh px-8 lg:px-40 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
