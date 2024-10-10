<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-10">
        <button
          @click="toggleSideMenu"
          class="md:hidden text-gray-500 hover:text-gray-700"
        >
          <MenuIcon class="h-6 w-6" />
        </button>
        <div
          class="flex items-center space-x-4"
          key=""
          v-show="currentItemName !== 'schedules'"
        >
          <router-link
            v-for="item in navbarItems"
            :key="item.name"
            :href="item.href"
            class="text-sm text-gray-500 hover:text-indigo-600 cursor-pointer"
            :to="item.path"
            :exact="item.name === 'Home'"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="text-gray-500 text-sm">
          {{
            currentItemName !== "form"
              ? currentItemName.charAt(0).toUpperCase() +
                currentItemName.slice(1)
              : ""
          }}
        </div>
        <div class="flex items-center">
          <button class="text-sm text-gray-500 hover:text-indigo-600">
            <BellIcon class="h-5 w-5" />
          </button>
          <button class=" ml-4 text-sm text-gray-500 hover:text-indigo-600 flex">
            <UserIcon class="h-5 w-5" />
            <div v-if=" authStore!==null " >
              {{ userName }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref, defineProps, watch,computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { MenuIcon, BellIcon, UserIcon } from "@heroicons/vue/outline";

const authStore = useAuthStore();
const userName = computed(() => authStore.user?.name);
console.log(userName.value);

const navbarItems = [
  { name: "Home", path: "/" },
  { name: "Form", path: "/form" },
];
const emit = defineEmits(["toggle-side"]);
const toggleSideMenu = () => {
  emit("toggle-side");
};
const props = defineProps({
  isSideMenuOpen: {
    type: Boolean,
    default: false,
  },
});
const isSideMenuOpen = ref(props.isSideMenuOpen);
const route = useRoute();
const currentItemName = ref("");
watch(
  () => route.path,
  (newVal) => {
    console.log("this is the path", newVal);
    if (newVal.length > 0) {
      const path = newVal.split("/")[1];
      console.log("this is the path", path);
      currentItemName.value = path;
    }
  },
  { immediate: true }
);
watch(
  () => props.isSideMenuOpen,
  (newVal) => {
    isSideMenuOpen.value = newVal;
  }
);
</script>

<style scoped>
.exact-active {
  color: #6366f1;
}
</style>
