import { defineStore } from 'pinia'
import { login as loginAction, register as registerAction ,test,getAuthUser} from './authActions.js' 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isLoading: false,
    errorMessage: null
  }),
  actions: {
    async login(email, password) {
      this.isLoading = true
      try {
        const response = await loginAction(email, password)
        this.user = response.user; 
        this.token = response.access_token; 

        return { token: this.token }
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : 'Login failed.'
       
        console.error('Login error:', this.errorMessage) // ici
        throw error
      } finally {
        this.isLoading = false
      }
    },
    async getAuthUser(token){
      this.isLoading = true
      try {

        const response = await getAuthUser(token)
         console.log("response mel auth user getAuthUser ",response);

        return response
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : 'Login failed.'
       
        console.error('Login error:', this.errorMessage) // ici
        throw error
      } finally {
        this.isLoading = false
      }
    }
    ,
    async register(name, email, password, confirmPassword) {
      this.isLoading = true
      this.errorMessage = ''
      try {
        const response = await registerAction(name, email, password, confirmPassword)

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
    async test() {
      this.isLoading = true
      try {
        const response = await test()
        console.log("response data ",response.data);
        return response
      } catch (error) {
        console.log("there is a store catch error ");
        this.errorMessage = error.response ? error.response.data.message : 'Login failed.'
       
        console.error('Login error:', this.errorMessage) // ici
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
