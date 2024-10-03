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
        <div class="flex items-center space-x-4">
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
        <div class="flex items-center">
          <button class="text-sm text-gray-500 hover:text-indigo-600">
            <BellIcon class="h-5 w-5" />
          </button>
          <button class="ml-4 text-sm text-gray-500 hover:text-indigo-600">
            <UserIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { UserIcon, BellIcon, MenuIcon } from "lucide-vue-next";

import { defineEmits, ref, defineProps, watch } from "vue";
const navbarItems = [
  { name: "Home", path: "/" },
  { name: "Tasks", path: "/tasks" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/teams" },
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

console.log("hedha el sidemenu mel nav bar", props.isSideMenuOpen);
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
