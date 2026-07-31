'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MenuSection } from '@/components/MenuSection'
import { StorySection } from '@/components/StorySection'
import { ReservationModal } from '@/components/ReservationModal'
import { OrderDrawer, CartItem } from '@/components/OrderDrawer'
import { Footer } from '@/components/Footer'
import { Check } from 'lucide-react'
import { MenuItem } from '@/config/menu'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    // Read saved theme if exists
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('dark') // Default to Speciality dark bronze vibe
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3000)
  }

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id)
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      }
      return [...prev, { item, quantity: 1 }]
    })
    showToast(`Added "${item.name}" to your order.`)
  }

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta
            return newQty > 0 ? { ...c, quantity: newQty } : null
          }
          return c
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const totalCartCount = cart.reduce((acc, c) => acc + c.quantity, 0)
  const addedItemIds = cart.map((c) => c.item.id)

  return (
    <main className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-400 relative">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="px-5 py-3 bg-theme-card border border-theme-accent/60 text-theme-text font-medium text-xs shadow-2xl flex items-center gap-3">
            <div className="p-1 bg-theme-accent text-white">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{toastMessage}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-2 underline text-theme-accent font-bold hover:opacity-80"
            >
              View Drawer
            </button>
          </div>
        </div>
      )}

      {/* Main Editorial Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Hero Section */}
      <Hero
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Menu Section */}
      <MenuSection
        onAddToCart={handleAddToCart}
        addedItemIds={addedItemIds}
      />

      {/* Story Section */}
      <StorySection />

      {/* Footer */}
      <Footer />

      {/* Reservation Modal Wizard */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Order Slide-over Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </main>
  )
}
