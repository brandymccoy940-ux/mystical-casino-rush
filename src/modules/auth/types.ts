import React from 'react'

export interface User {
  id: string
  email: string
  username: string
  balance: number
}

export interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}
