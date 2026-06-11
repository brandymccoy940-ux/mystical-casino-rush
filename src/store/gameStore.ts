'use client'

import { create } from 'zustand'

interface GameState {
  balance: number
  bet: number
  isSpinning: boolean
  setBalance: (balance: number) => void
  setBet: (bet: number) => void
  setIsSpinning: (spinning: boolean) => void
}

export const useGameStore = create<GameState>((set) => ({
  balance: 1000,
  bet: 10,
  isSpinning: false,
  setBalance: (balance) => set({ balance }),
  setBet: (bet) => set({ bet }),
  setIsSpinning: (spinning) => set({ isSpinning: spinning }),
}))
