<template>
  <aside
    :class="[
      'bg-indigo-700 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform',
      'md:relative md:translate-x-0 transition duration-200 ease-in-out',
      { '-translate-x-full': !isSideMenuOpen },
    ]"
  >
    <nav>
      <div class="flex items-center justify-between mb-6 px-4">
        <div class="flex items-center">
          <ClockIcon class="h-8 w-8 text-indigo-300" />
          <span class="ml-2 text-xl font-bold">TimeAI</span>
        </div>
        <button @click="toggleSideMenu" class="md:hidden">
          <XIcon class="h-6 w-6" />
        </button>
      </div>
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :href="item.href"
        class="block py-2.5 my-4 px-4 rounded transition duration-200 hover:bg-indigo-800 cursor-pointer"
        :to="item.path"
      >
        <component :is="item.icon" class="h-5 w-5 inline-block mr-2" />
        {{ item.name }}
      </router-link>
    </nav>
    <div class="absolute bottom-2 right-2">
      <p class="flex gap-1 items-center cursor-pointer">
        <LogOutIcon />
        Log Out
      </p>
    </div>
  </aside>
</template>

<script setup>
import { defineEmits, defineProps, ref, watch } from "vue";
import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  XIcon,
  LogOutIcon,
} from "lucide-vue-next";

const emit = defineEmits(["toggle-side"]);

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Schedules", path: "/schedules", icon: CalendarIcon },
  { name: "Analytics", path: "/analytics", icon: ChartBarIcon },
  { name: "Profile", path: "/profile", icon: UserIcon },
  { name: "Settings", path: "/settings", icon: CogIcon },
];
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
console.log("hedha mel side menu", props.isSideMenuOpen);
watch(
  () => props.isSideMenuOpen,
  (newValue) => {
    isSideMenuOpen.value = newValue;
  }
);
</script>

<style scoped>
/* Custom scrollbar styles */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.exact-active {
  background: #3730a3;
}
</style>
