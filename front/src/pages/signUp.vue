<template>
  <div
    class="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a href="#" class="font-medium text-indigo-400 hover:text-indigo-300">
            sign in to your existing account
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Full name"
              v-model="name"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              v-model="email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div>
            <label for="confirm-password" class="sr-only"
              >Confirm password</label
            >
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm password"
              v-model="confirmPassword"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded bg-gray-800"
              v-model="agreeTerms"
            />
            <label for="agree-terms" class="ml-2 block text-sm text-gray-400">
              I agree to the
              <a
                href="#"
                class="font-medium text-indigo-400 hover:text-indigo-300"
                >Terms of Service</a
              >
              and
              <a
                href="#"
                class="font-medium text-indigo-400 hover:text-indigo-300"
                >Privacy Policy</a
              >
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :disabled="isLoading || !isFormValid"
  
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <UserPlusIcon
                v-if="!isLoading"
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
              <LoaderIcon
                v-else
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 animate-spin"
                aria-hidden="true"
              />
            </span>
            {{ isLoading ? "Creating account..." : "Sign up" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed ,inject} from "vue";
import { useAuthStore } from '@/store/auth';
import { useRouter } from "vue-router";

const toast = inject('toast')
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreeTerms = ref(false);
const authStore = useAuthStore();
const isLoading = computed(() => authStore.isLoading)
const errorMessage = computed(() => authStore.errorMessage)
const router = useRouter();

const isFormValid = computed(() => {
  return (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.length >= 8 &&
    password.value === confirmPassword.value &&
    agreeTerms.value
  );
});

const notifySuccess=()=>{
  toast.addToast({message:'Register Successful',type:'success',duration:3000})
}

const notifyError = (errorMessage)=>{
  toast.addToast({message:errorMessage ,type:'error',duration:3000})
 }

const handleSubmit = async () => {
  try {
    await authStore.register(name.value, email.value, password.value, confirmPassword.value);
    notifySuccess() 
    router.push('/login');
  } catch (error) {
    notifyError(errorMessage);
  }
}
</script>

<script>
export default {
  name: "register-page",
};
</script>
<style>
/* Any additional styles can be added here if needed */
</style>
