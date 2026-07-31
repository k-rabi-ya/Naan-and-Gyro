'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Users, CheckCircle2, ChevronRight, Utensils, MessageSquare } from 'lucide-react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

const TIME_SLOTS = [
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
  '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM'
]

const SEATING_OPTIONS = [
  { id: 'main', label: 'Main Dining Room', desc: 'Dim editorial lighting, plush velvet seating' },
  { id: 'terrace', label: 'Ottoman Courtyard', desc: 'Heated open-air terrace with copper lanterns' },
  { id: 'counter', label: "Chef's Hearth Counter", desc: 'Front-row view of wood-fired hearth & tandoor' }
]

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1)
  const [partySize, setPartySize] = useState<number>(2)
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('07:00 PM')
  const [seating, setSeating] = useState<string>('main')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [bookingCode, setBookingCode] = useState<string>('')

  useEffect(() => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    setDate(tomorrow.toISOString().split('T')[0])
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone) return
    const randomCode = 'NG-' + Math.floor(100000 + Math.random() * 900000)
    setBookingCode(randomCode)
    setStep(2)
  }

  const handleReset = () => {
    setStep(1)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-theme-bg border border-theme-border rounded-none p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 border border-theme-border text-theme-text hover:text-theme-accent transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {step === 1 ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-theme-accent font-semibold mb-1">
                  Table Reservation
                </p>
                <h3 id="reservation-modal-title" className="font-serif text-2xl sm:text-3xl font-extrabold text-theme-text">
                  Book A Dining Table
                </h3>
              </div>

              <form onSubmit={handleConfirm} className="space-y-6">
                {/* Party Size Selector */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-theme-text mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-theme-accent" />
                    Party Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => {
                      const val = typeof num === 'number' ? num : 9
                      return (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setPartySize(val)}
                          className={`w-9 h-9 border text-xs font-bold transition-all ${
                            partySize === val
                              ? 'border-theme-accent bg-theme-accent text-white'
                              : 'bg-theme-card border-theme-border text-theme-text hover:border-theme-accent'
                          }`}
                        >
                          {num}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Date & Time Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-theme-text mb-2 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-theme-text mb-2 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-theme-accent" />
                      Time Slot
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                    >
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Area Selection */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-theme-text mb-2 flex items-center gap-2">
                    <Utensils className="w-3.5 h-3.5 text-theme-accent" />
                    Seating Area
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SEATING_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSeating(opt.id)}
                        className={`p-3 text-left border transition-all ${
                          seating === opt.id
                            ? 'bg-theme-accent/5 border-theme-accent text-theme-text'
                            : 'bg-theme-card border-theme-border text-theme-muted hover:border-theme-accent/50'
                        }`}
                      >
                        <p className="text-[11px] font-bold text-theme-text mb-0.5">{opt.label}</p>
                        <p className="text-[9px] text-theme-muted leading-snug">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                    />
                  </div>
                </div>

                {/* Dietary Notes */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-theme-text mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-theme-accent" />
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Occasion celebration, dietary restrictions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-theme-card border border-theme-border text-theme-text text-xs focus:outline-none focus:border-theme-accent"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-theme-text text-theme-bg font-extrabold text-xs uppercase tracking-widest hover:bg-theme-accent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Book Reservation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          ) : (
            /* Confirmation Step */
            <div className="text-center py-6 space-y-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-extrabold text-theme-text">Booking Confirmed</h3>
                <p className="text-theme-muted text-xs mt-1">
                  We look forward to hosting your table reservation.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-5 bg-theme-card border border-theme-border/60 text-left space-y-3 font-mono text-[11px]">
                <div className="flex justify-between border-b border-theme-border/40 pb-2">
                  <span className="text-theme-muted">Reference Code:</span>
                  <span className="text-theme-accent font-bold">{bookingCode}</span>
                </div>
                <div className="flex justify-between border-b border-theme-border/40 pb-2">
                  <span className="text-theme-muted">Guest:</span>
                  <span className="text-theme-text">{name}</span>
                </div>
                <div className="flex justify-between border-b border-theme-border/40 pb-2">
                  <span className="text-theme-muted">Details:</span>
                  <span className="text-theme-text">{partySize} Guests / {date} @ {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-theme-muted">Seating:</span>
                  <span className="text-theme-accent capitalize">{seating} Room</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 border border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
export default ReservationModal
