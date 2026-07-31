'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, ArrowDown } from 'lucide-react'

interface HeroProps {
  onOpenReservation: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative pt-16 pb-24 bg-theme-bg overflow-hidden transition-colors duration-400">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full border border-theme-accent" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-theme-accent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Centered Editorial Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
            Traditional Grills & Wood-Fired Bread
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-theme-text leading-tight">
            Authentic Indian <br className="hidden sm:block" />
            <span className="font-normal italic font-serif text-theme-accent">&</span> Turkish Kitchen
          </h1>

          <p className="text-sm sm:text-base text-theme-muted font-light max-w-xl mx-auto leading-relaxed">
            Hand-crafted kebabs, clay oven naans, slow-cooked biryanis, and traditional sweets made fresh daily.
          </p>

          {/* Clean human layout actions - no neon glow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-3.5 bg-theme-text text-theme-bg font-bold text-xs uppercase tracking-widest hover:bg-theme-accent hover:text-white transition-colors duration-300 text-center"
            >
              Explore Menu
            </a>

            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-3.5 border border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg font-bold text-xs uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>
          </div>
        </div>

        {/* High-Impact Arched Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 items-end">
          
          {/* Left Column: Arched Image Frame */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-t-full overflow-hidden border border-theme-border/60 bg-theme-card/50 shadow-md">
              <Image
                src="/images/Turkish Pide.jpg"
                alt="Wood-Fired Pide Bread"
                fill
                priority
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
            <p className="text-[10px] text-center uppercase tracking-widest text-theme-muted">
              Wood-Fired Stone Hearth Pide
            </p>
          </div>

          {/* Center Column: Arched Image Frame (Highlighted scale) */}
          <div className="space-y-4 sm:mb-6">
            <div className="relative aspect-[3/4] w-full rounded-t-full overflow-hidden border border-theme-border/80 bg-theme-card shadow-lg scale-100 sm:scale-105">
              <Image
                src="/images/headline.jpg"
                alt="Signature Fusion Feast"
                fill
                priority
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
            <p className="text-[10px] text-center uppercase tracking-widest text-theme-accent font-semibold">
              The Silk Road Platter
            </p>
          </div>

          {/* Right Column: Arched Image Frame */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-t-full overflow-hidden border border-theme-border/60 bg-theme-card/50 shadow-md">
              <Image
                src="/images/juicy charred koobideh that melts with smoky beef flavor.jpg"
                alt="Charcoal Lamb Kebabs"
                fill
                priority
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
            <p className="text-[10px] text-center uppercase tracking-widest text-theme-muted">
              Charcoal Lamb Kebabs
            </p>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#menu"
            className="flex flex-col items-center gap-2 text-theme-muted hover:text-theme-accent transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">Discover Cuisine</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  )
}
export default Hero
