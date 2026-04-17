import { useAuthStore } from './authStore'

export function useAuth() {
  const { token, user, isAuthenticated, setAuth, logout } = useAuthStore()
  return { token, user, isAuthenticated, setAuth, logout }
}
