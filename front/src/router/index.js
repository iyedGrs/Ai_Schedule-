// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import login from "@/pages/login.vue";
import signUp from "@/pages/signUp.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import Home from "@/pages/Home.vue";
import Tasks from "@/pages/Tasks.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Projects from "@/pages/Projects.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/tasks",
        name: "Tasks",
        component: Tasks,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/projects",
        name: "Projects",
        component: Projects,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: login,
    // No layout specified; it will render without any layout
  },
  {
    path: "/signup",
    name: "SignUp",
    component: signUp,
    // No layout specified; it will render without any layout
  },
  // Optionally, add a catch-all route for 404 Not Found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active", // Add this line
  linkExactActiveClass: "exact-active", // Add this line
});

export default router;
