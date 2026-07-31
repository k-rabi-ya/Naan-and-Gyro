'use client'

import React, { useState } from 'react'
import { Flame, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Check } from 'lucide-react'

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-theme-bg border-t border-theme-border pt-16 pb-12 text-theme-muted font-light relative z-10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-theme-border/60">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl font-extrabold text-theme-text tracking-widest block">
              NAAN & GYRO
            </span>
            <p className="text-xs leading-relaxed text-theme-muted">
              Traditional Bosphorus grills and clay tandoor Indian naans. Rekindling ancient Silk Road flavor routes in an editorial, luxury hospitality atmosphere.
            </p>

            <div className="flex items-center gap-3 text-theme-text pt-2">
              <a href="#" className="p-2 border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-theme-border text-theme-text hover:text-theme-accent hover:border-theme-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs font-bold text-theme-text uppercase tracking-wider mb-2">Location & Hours</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-theme-text">
                <MapPin className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <span>742 Bosphorus Way, Spice District, NY 10001</span>
              </p>
              <p className="flex items-center gap-2 text-theme-text">
                <Phone className="w-4 h-4 text-theme-accent shrink-0" />
                <span>+1 (555) 622-6497</span>
              </p>
              <p className="flex items-center gap-2 text-theme-text">
                <Mail className="w-4 h-4 text-theme-accent shrink-0" />
                <span>concierge@naanandgyro.com</span>
              </p>
              <div className="pt-2 flex items-start gap-2 text-theme-muted">
                <Clock className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                <div>
                  <p><strong className="text-theme-text">Mon – Thu:</strong> 11:30 AM – 10:30 PM</p>
                  <p><strong className="text-theme-text">Fri – Sun:</strong> 11:30 AM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tasting Club */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-xs font-bold text-theme-text uppercase tracking-wider">The Culinary Club</h4>
            <p className="text-xs text-theme-muted leading-relaxed">
              Subscribe to receive secret off-menu tasting invites, chef&apos;s special showcases, and reservation priority.
            </p>

            {subscribed ? (
              <div className="p-3 bg-theme-accent/5 border border-theme-accent/30 text-theme-accent text-xs flex items-center gap-2 font-medium">
                <Check className="w-4 h-4" />
                <span>Welcome to the Culinary Club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address..."
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs placeholder:text-theme-muted focus:outline-none focus:border-theme-accent"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-theme-text text-theme-bg text-xs font-bold uppercase tracking-wider hover:bg-theme-accent hover:text-white transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-theme-muted gap-4">
          <p>© {new Date().getFullYear()} Naan & Gyro Culinary Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-theme-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-theme-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-theme-accent transition-colors">Halal Sourcing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
