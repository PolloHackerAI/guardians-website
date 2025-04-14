"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Prodotti", href: "#products" },
    { name: "Chi Siamo", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contatti", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? "text-blue-900" : "text-white"}`}>GUARDIANS</span>
          </Link>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-blue-900" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium py-2 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full bg-blue-900 hover:bg-blue-800">Contattaci</Button>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-blue-600 transition-colors ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className={isScrolled ? "bg-blue-900 hover:bg-blue-800" : "bg-white text-blue-900 hover:bg-blue-50"}
              >
                Contattaci
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
