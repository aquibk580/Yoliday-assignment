import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoliday",
  description: "Tours and Travels website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Sidebar />
          <div className="flex flex-1 flex-col md:pl-64">
            <Header />
            <main className="flex-1 pb-16 md:pb-0">
              <div className="px-4">
                <div className="flex items-center justify-between py-4 md:hidden">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>

                {children}
              </div>
            </main>
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
