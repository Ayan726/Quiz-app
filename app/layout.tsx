import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Quiz App",
  description: "a quiz app for kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="h-14 px-4 py-2  border-b-gray-200 border-b w-full">
          <span className="uppercase text-3xl font-semibold">quiz</span>
        </nav>
        <div>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
