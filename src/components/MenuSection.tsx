'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, Check } from 'lucide-react'
import { MENU_ITEMS, MenuItem } from '@/config/menu'

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void
  addedItemIds: string[]
}

const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'grills', label: 'Grills & Kebabs' },
  { id: 'breads', label: 'Naans & Breads' },
  { id: 'curries', label: 'Curries & Stews' },
  { id: 'rice', label: 'Biryani & Rice' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks & Tea' },
]

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, addedItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="menu" className="py-24 bg-theme-bg border-t border-theme-border/60 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-theme-accent font-semibold">
            Fresh Made Daily
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Our Culinary Selection
          </h2>
          <div className="w-12 h-[1px] bg-theme-accent mx-auto mt-2" />
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-theme-border/60">
          
          {/* Unpretentious Category List */}
          <nav className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-3 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-200 border border-transparent ${
                  activeCategory === cat.id
                    ? 'border-theme-accent bg-theme-accent text-white font-bold'
                    : 'text-theme-text hover:text-theme-accent hover:border-theme-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Search Field */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-theme-muted" />
            <input
              type="text"
              placeholder="Search selection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs placeholder:text-theme-muted focus:outline-none focus:border-theme-accent focus:ring-0 transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds.includes(item.id)

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-theme-card border border-theme-border/60 p-4 flex flex-col justify-between hover:border-theme-accent/60 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Clean 4:3 Picture Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-theme-bg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-102"
                      />
                      {item.badges && item.badges.length > 0 && (
                        <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-10">
                          {item.badges.map((badge, bIdx) => (
                            <span
                              key={bIdx}
                              className="px-2 py-0.5 bg-theme-bg/90 text-[8px] font-bold text-theme-accent uppercase tracking-widest border border-theme-border"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Dish Info */}
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base font-bold text-theme-text">
                          {item.name}
                        </h3>
                        <span className="text-theme-accent font-serif font-bold text-base shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-theme-muted text-xs font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Add action */}
                  <div className="pt-4 mt-4 border-t border-theme-border/40 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-widest text-theme-muted">Ingredients Mapped</span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className={`px-4 py-2 border font-bold text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                        isAdded
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : 'border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>+ Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-theme-card border border-theme-border/60">
            <p className="text-theme-muted text-xs uppercase tracking-widest">No dishes match your selection.</p>
            <button
              onClick={() => {
                setActiveCategory('all')
                setSearchQuery('')
              }}
              className="mt-4 px-6 py-2 border border-theme-text text-theme-text text-xs uppercase tracking-widest hover:bg-theme-text hover:text-theme-bg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
export default MenuSection
