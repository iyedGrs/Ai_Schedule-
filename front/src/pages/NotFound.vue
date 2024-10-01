<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
  >
    <div class="text-center">
      <div class="flex justify-center mb-8">
        <ClipboardXIcon class="h-24 w-24 text-indigo-500" />
      </div>
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p class="text-gray-600 mb-8">
        It seems you've ventured into uncharted territory. Don't worry, even the
        best time managers get lost sometimes!
      </p>
      <div
        class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <button
          @click="goBack"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeftIcon class="h-5 w-5 mr-2" />
          Go Back
        </button>
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <HomeIcon class="h-5 w-5 mr-2" />
          Go Home
        </router-link>
      </div>
    </div>
    <div class="mt-12 text-center">
      <p class="text-sm text-gray-500">
        Lost track of time?
        <a href="#" class="text-indigo-600 hover:text-indigo-500"
          >Contact our support team</a
        >
        for assistance.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ClipboardXIcon, ArrowLeftIcon, HomeIcon } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}
</style>
