import apiClient from './apiClient'

export const gameService = {
  getGames: async () => {
    const response = await apiClient.get('/games')
    return response.data
  },

  getGameById: async (gameId: string) => {
    const response = await apiClient.get(`/games/${gameId}`)
    return response.data
  },

  spinSlots: async (gameId: string, bet: number) => {
    const response = await apiClient.post(`/games/${gameId}/spin`, { bet })
    return response.data
  },

  getUserStats: async () => {
    const response = await apiClient.get('/games/stats')
    return response.data
  },
}
