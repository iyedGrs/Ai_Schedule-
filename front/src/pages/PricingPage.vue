<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Simple, transparent pricing</h2>
          <p class="mt-4 text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">ScheduleAI Pro</h3>
              <p class="mt-6 text-base text-gray-500">Get the most out of ScheduleAI with our Pro plan. Perfect for students who want to optimize their study time and boost their academic performance.</p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What's included</h4>
                  <div class="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  <li v-for="feature in features" :key="feature" class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <p class="ml-3 text-sm text-gray-700">{{ feature }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg leading-6 font-medium text-gray-900">Pay monthly or yearly</p>
              <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                <span v-if="yearly">$99</span>
                <span v-else>$9</span>
                <span class="ml-3 text-xl font-medium text-gray-500">
                  <span v-if="yearly">/year</span>
                  <span v-else>/month</span>
                </span>
              </div>
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Get Started
                  </a>
                </div>
              </div>
              <div class="mt-4 text-sm">
                <label class="flex items-center justify-center space-x-2 cursor-pointer">
                  <input type="checkbox" v-model="yearly" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                  <span>Bill yearly (save 15%)</span>
                </label>
              </div>
              <div class="mt-4 text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Learn about our membership policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Ready to dive in?</span>
              <span class="block">Start your free trial today.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Try ScheduleAI Pro for 14 days, no credit card required. Experience the power of AI-driven study scheduling and boost your academic performance.</p>
            <a href="#" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">
              Start your free trial
            </a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="/placeholder.svg?height=600&width=800" alt="App screenshot">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckCircleIcon } from 'lucide-vue-next'
const yearly = ref(false)

const features = [
  'Personalized AI-driven study schedules',
  'Unlimited subjects and study plans',
  'Performance tracking and analytics',
  'Collaborative study groups',
  'Smart reminders and notifications',
  'Integration with popular calendar apps',
  'Access to premium study resources',
  'Priority customer support',
]

</script>