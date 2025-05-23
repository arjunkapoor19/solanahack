"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full max-w-6xl mx-auto mb-12 px-4 md:px-0 mt-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white">
          DeCompute
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white text-sm md:text-base">
          <Link href="#features" className="hover:text-gray-500 transition">
            Features
          </Link>
          <Link href="/dashboard" className="hover:text-gray-500 transition">
            Launch App
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mt-4 flex flex-col space-y-2 text-white md:hidden">
          <Link href="#features" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link href="/dashboard" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>
            Launch App
          </Link>
        </nav>
      )}
    </header>
  )
}
