<template>
  <div class="relative">
    <dt>
      <div
        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
      >
        <component :is="icon" class="h-6 w-6" aria-hidden="true" />
      </div>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
        {{ title }}
      </p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
      {{ description }}
    </dd>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
