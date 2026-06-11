import apiClient from './apiClient'

export const authService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password })
    return response.data
  },

  register: async (email: string, username: string, password: string) => {
    const response = await apiClient.post('/auth/register', {
      email,
      username,
      password,
    })
    return response.data
  },

  logout: async () => {
    localStorage.removeItem('authToken')
  },

  getProfile: async () => {
    const response = await apiClient.get('/auth/profile')
    return response.data
  },
}
