import axios from 'axios'
import { ref } from 'vue'

const isLoading = ref(false)

export const login = async (email, password) => {
  isLoading.value = true
  try {
    // First, get the CSRF cookie
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')

    // Then, make the login request
    const response = await axios.post('http://localhost:8000/login', {
      email,
      password,
    }, {
      withCredentials: true,
    })

    console.log('Login successful:', response.data)
    // Return the response so that the component can handle it
    return response.data
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message)
    throw error
  } finally {
    isLoading.value = false
  }
}

export const register = async (name, email, password, confirmPassword) => {
    isLoading.value = true
    try {
      // First, get the CSRF cookie
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
  
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }, {
        withCredentials: true
      })
      console.log('Register successful:', response.data)
      return response.data
    } catch (error) {
      console.error('Register failed:', error.response ? error.response.data : error.message)
      throw error
    } finally {
      isLoading.value = false
    }
  }
//ya men hyeee ngedou logout sahby
/*export const logout = async () => {
  isLoading.value = true
  try {
    await axios.post('http://localhost:8000/logout', {}, { withCredentials: true })
    console.log('Logout successful')
  } catch (error) {
    console.error('Logout failed:', error.response ? error.response.data : error.message)
    throw error
  } finally {
    isLoading.value = false
  }
}*/
