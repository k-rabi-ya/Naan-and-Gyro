'use client'

import React from 'react'
import { ShoppingBag, Sun, Moon } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  onOpenCart: () => void
  onOpenReservation: () => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-theme-bg border-b border-theme-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          
          {/* Left: Theme toggle */}
          <div className="flex justify-start items-center">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-theme-text hover:text-theme-accent transition-colors focus:outline-none -ml-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </button>
          </div>

          {/* Center: Brand typography logo */}
          <div className="flex flex-col justify-center items-center text-center">
            <a href="#" className="focus:outline-none group">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-widest text-theme-text group-hover:text-theme-accent transition-colors block">
                NAAN & GYRO
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-theme-muted font-sans font-semibold block mt-0.5">
                TRADITIONAL GRILLS & BREADS
              </span>
            </a>
          </div>

          {/* Right: CTAs */}
          <div className="flex justify-end items-center gap-6">
            {/* Book Table Text Link */}
            <button
              onClick={onOpenReservation}
              className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-theme-text hover:text-theme-accent transition-colors"
            >
              Book Table
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-theme-text hover:text-theme-accent transition-colors"
              aria-label={`View Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 bg-theme-accent text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Minimalist Outline Order Online CTA */}
            <button
              onClick={onOpenCart}
              className="hidden sm:inline-block px-5 py-2.5 rounded-none border border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg font-semibold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Order Online
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
