'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Truck, Store } from 'lucide-react'
import { MenuItem } from '@/config/menu'

export interface CartItem {
  item: MenuItem
  quantity: number
}

interface OrderDrawerProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  onUpdateQuantity: (itemId: string, delta: number) => void
  onRemoveItem: (itemId: string) => void
  onClearCart: () => void
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup')
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  const subtotal = cart.reduce((acc, c) => acc + c.item.price * c.quantity, 0)
  const deliveryFee = fulfillment === 'delivery' && cart.length > 0 ? 4.99 : 0
  const tax = subtotal * 0.0875
  const total = subtotal + deliveryFee + tax

  const handleCheckout = () => {
    setCheckoutComplete(true)
  }

  const handleFinish = () => {
    setCheckoutComplete(false)
    onClearCart()
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="w-screen max-w-md bg-theme-bg border-l border-theme-border shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-theme-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-theme-border text-theme-accent bg-theme-card">
                  <ShoppingBag className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-theme-text">Shopping Bag</h3>
                  <p className="text-[10px] text-theme-muted uppercase tracking-wider font-semibold">{cart.length} selection(s)</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 border border-theme-border text-theme-text hover:text-theme-accent transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {checkoutComplete ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-theme-text">Order Placed</h4>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    Sent to our stone hearth kitchen. Estimated ready time: <strong className="text-theme-accent">20-25 minutes</strong>.
                  </p>
                  <button
                    onClick={handleFinish}
                    className="w-full py-3 border border-theme-text text-theme-text hover:bg-theme-text hover:text-theme-bg text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <ShoppingBag className="w-10 h-10 text-theme-border mx-auto" />
                  <p className="text-theme-muted text-xs uppercase tracking-widest">Your bag is empty.</p>
                </div>
              ) : (
                <>
                  {/* Fulfillment Toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-theme-card border border-theme-border">
                    <button
                      onClick={() => setFulfillment('pickup')}
                      className={`py-2 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                        fulfillment === 'pickup'
                          ? 'bg-theme-accent text-white'
                          : 'text-theme-muted hover:text-theme-text'
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Pickup (20m)</span>
                    </button>
                    <button
                      onClick={() => setFulfillment('delivery')}
                      className={`py-2 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                        fulfillment === 'delivery'
                          ? 'bg-theme-accent text-white'
                          : 'text-theme-muted hover:text-theme-text'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Delivery</span>
                    </button>
                  </div>

                  {/* Cart Item List */}
                  <div className="space-y-3">
                    {cart.map(({ item, quantity }) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 bg-theme-card border border-theme-border/60"
                      >
                        <div className="relative w-16 h-16 bg-theme-bg shrink-0 border border-theme-border/40">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h5 className="text-xs font-bold text-theme-text truncate">{item.name}</h5>
                            <span className="text-theme-accent text-xs font-serif font-bold">
                              ${(item.price * quantity).toFixed(2)}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity buttons */}
                            <div className="flex items-center gap-2 bg-theme-bg border border-theme-border px-2 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="text-theme-muted hover:text-theme-text text-xs"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs text-theme-text font-mono font-bold w-4 text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="text-theme-muted hover:text-theme-text text-xs"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-theme-muted hover:text-rose-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary */}
            {!checkoutComplete && cart.length > 0 && (
              <div className="p-6 border-t border-theme-border bg-theme-card space-y-4">
                <div className="space-y-1.5 text-xs text-theme-muted font-mono">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-theme-text font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {fulfillment === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="text-theme-text font-semibold">${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Estimated Tax (8.75%):</span>
                    <span className="text-theme-text font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-theme-border text-sm text-theme-text font-bold">
                    <span>Total Amount:</span>
                    <span className="text-theme-accent">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-theme-text text-theme-bg hover:bg-theme-accent hover:text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Place Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
export default OrderDrawer
