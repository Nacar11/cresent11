import * as React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

export const metadata = {
  title: "Crescent Masonic Lodge No. 419",
  description: "Official Website of Crescent Masonic Lodge No. 419, F. & A.M. of the Philippines",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {/* Simple Semantic Header / Navbar placeholder could go here */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-transparent.png"
                  alt="Crescent 419 Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-serif font-bold text-xl text-primary tracking-wider">CRESCENT 419</div>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#members" className="hover:text-primary transition-colors">Members</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="py-8 bg-primary text-primary-foreground text-center">
          <p className="text-sm font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Crescent Masonic Lodge No. 419. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
