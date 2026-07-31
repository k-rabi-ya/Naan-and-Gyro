'use client'

import React from 'react'
import Image from 'next/image'
import { Flame, Compass, Sparkles, ChefHat } from 'lucide-react'

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-theme-bg border-t border-theme-border/60 transition-colors duration-400 relative overflow-hidden">
      
      {/* Background Accent Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-theme-accent/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Grid Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border border-theme-border/60 bg-theme-card">
                <Image
                  src="/images/Turkish Pide.jpg"
                  alt="Wood-Fired Turkish Pide Hearth"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-theme-card border border-theme-border/60">
                <div className="flex items-center gap-2 text-theme-accent mb-2">
                  <Flame className="w-4 h-4" />
                  <h4 className="font-serif text-sm font-bold text-theme-text">Wood-Fired Hearth</h4>
                </div>
                <p className="text-theme-muted text-xs font-light leading-relaxed">
                  900°F oak-fired stone hearth baking boat-shaped Pide dough with molten Indian cheeses.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 bg-theme-card border border-theme-border/60">
                <div className="flex items-center gap-2 text-theme-accent mb-2">
                  <ChefHat className="w-4 h-4" />
                  <h4 className="font-serif text-sm font-bold text-theme-text">Royal Clay Tandoor</h4>
                </div>
                <p className="text-theme-muted text-xs font-light leading-relaxed">
                  Hand-built clay ovens infusing smoky charcoal flavor into marinated tikka grills.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border border-theme-border/60 bg-theme-card">
                <Image
                  src="/images/Savor Authentic Turkish Grilled Perfection at Izgara Finchley!.jpg"
                  alt="Charcoal Grills and Saffron Spices"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-theme-accent font-semibold">
              Our Culinary Genesis
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-text leading-tight">
              Two Imperial Traditions, <br />
              <span className="font-light italic text-theme-accent font-serif">One Unforgettable Table.</span>
            </h2>

            <p className="text-theme-text font-light text-base leading-relaxed">
              Before modern borders, merchant caravans traversed the ancient Silk Road connecting Istanbul&apos;s Bosphorus markets to the spice bazaars of Hyderabad and Old Delhi.
            </p>

            <p className="text-theme-muted font-light text-sm leading-relaxed">
              At <strong className="text-theme-text font-medium">Naan & Gyro</strong>, we rekindle this legendary trade route. We pair the charred crusts of Turkish Lahmacun with velvety Punjabi tikka curries, fold wood-fired Pide over slow-cooked Indian cottage cheese, and pair flame-charred Adana kababs with fragrant saffron dum rice.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-theme-border/60">
              <div>
                <span className="block font-serif text-3xl font-bold text-theme-accent">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-theme-muted font-light">Charcoal & Oak Wood Fired</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-theme-accent">42+</span>
                <span className="text-[10px] uppercase tracking-wider text-theme-muted font-light">Single-Origin Ground Spices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default StorySection
