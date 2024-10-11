<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required v-model="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
  
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="loading">
                {{ loading ? 'Sending...' : 'Send Password Reset Link' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /*import { ref } from 'vue'
  import api from '@/api'
  
  const email = ref('')
  const loading = ref(false)
  
  const handleSubmit = async () => {
    loading.value = true
    try {
      await api.post('/forgot-password', { email: email.value })
      alert('Password reset link sent to your email!')
      email.value = ''
    } catch (error) {
      console.error('Failed to send password reset link:', error)
      alert('Failed to send password reset link. Please try again.')
    } finally {
      loading.value = false
    }
  }*/
  </script>