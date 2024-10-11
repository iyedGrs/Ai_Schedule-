import axios from 'axios'
import { ref } from 'vue'

const isLoading = ref(false)

export const test = async () => {
  isLoading.value = true
  try {
    const response = await axios.get('http://localhost:8000/api/test')
    console.log("response ",response)
    return response.data
  } catch (error) {
    console.error('Test failed:', error.response ? error.response.data : error.message)
    throw error
  } finally {
    isLoading.value = false
  }
}
/*export const getAuthUser = async (token) => { 
  isLoading.value = true
  try {
    const response = await axios.get('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}` // Correctly set the headers
      },
      withCredentials: true // This is optional depending on your setup
    });
    return response.data
  } catch (error) {
    console.error('Get auth user failed:', error.response ? error.response.data : error.message)
    throw error
  } finally {
    isLoading.value = false
  }
}*/


export const login = async (email, password) => {
  isLoading.value = true
  try {
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')

    const response = await axios.post('http://localhost:8000/login', {
      email,
      password,
    }, {
      withCredentials: true,
    })
    console.log("response data  = " , response.data);
    
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
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
  
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }, {
        withCredentials: true
      })
      return response.data
    } catch (error) {
      console.error('Register failed:', error.response ? error.response.data : error.message)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  export const logout = async () => {
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
}
