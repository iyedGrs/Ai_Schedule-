<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <ClockIcon class="h-12 w-12 text-indigo-600" />
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ title }}
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        {{ subtitle }}
        <a
          :href="linkHref"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {{ linkText }}
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <router-view> </router-view>
      </div>
    </div>

    <footer class="mt-8 text-center">
      <p class="text-sm text-gray-500">
        &copy; 2024 TimeAI. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ClockIcon } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
  linkHref: {
    type: String,
    required: true,
  },
});
</script>
