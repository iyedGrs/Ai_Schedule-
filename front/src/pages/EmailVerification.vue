<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verify your email
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600" v-if="!verified">
          Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </p>
        <p class="mt-2 text-center text-sm text-gray-600" v-else>
          Your email has been verified. You can now access all features of the application.
        </p>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div v-if="!verified">
            <button @click="resendVerification" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="loading">
              {{ loading ? 'Sending...' : 'Resend Verification Email' }}
            </button>
          </div>
          <div v-else class="text-center text-sm text-gray-600">
            <router-link to="/dashboard" class="font-medium text-indigo-600 hover:text-indigo-500">
              Go to Dashboard
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /*
  import { ref } from 'vue'
  import api from '@/api'
  
  const verified = ref(false)
  const loading = ref(false)
  
  const resendVerification = async () => {
    loading.value = true
    try {
      await api.post('/email/verification-notification')
      alert('Verification link sent!')
    } catch (error) {
      console.error('Failed to resend verification email:', error)
      alert('Failed to send verification email. Please try again.')
    } finally {
      loading.value = false
    }
  }
  
  // Check if the email is already verified
  const checkVerificationStatus = async () => {
    try {
      const response = await api.get('/api/user')
      verified.value = response.data.email_verified_at !== null
    } catch (error) {
      console.error('Failed to check verification status:', error)
    }
  }
  
  checkVerificationStatus()
  */
  </script>