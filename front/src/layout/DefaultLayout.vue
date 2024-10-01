<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Side Menu -->
    <side-menu @toggle-side="toggleSideMenu" :isSideMenuOpen="isSideMenuOpen" />
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Navbar -->
      <nav-bar @toggle-side="toggleSideMenu" :isSideMenuOpen="isSideMenuOpen" />
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>

      <!-- Footer -->
      <footer-component />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import SideMenu from "@/components/SideMenu.vue";

const isSideMenuOpen = ref(false);
const toggleSideMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value;
};
</script>

<style>
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
</style>
