import { defineStore } from 'pinia'
import { login as loginAction, register as registerAction } from './authActions.js' 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isLoading: false,
    errorMessage: ''
  }),
  actions: {
    async login(email, password) {
      this.isLoading = true
      this.errorMessage = ''
      try {
        // Perform the login action
        const response = await loginAction(email, password)

        // Set user and token in the store
        this.user = response.user; 
        this.token = response.token; 

        return response
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : 'Login failed.'
        console.error('Login error:', this.errorMessage)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async register(name, email, password, confirmPassword) {
      this.isLoading = true
      this.errorMessage = ''
      try {
        // Perform the register action
        const response = await registerAction(name, email, password, confirmPassword)

        // Set user and token in the store
        this.user = response.user; 
        this.token = response.token; 

        return response
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : 'Registration failed.'
        console.error('Register error:', this.errorMessage)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    logout() {
      this.user = null
      this.token = null
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
