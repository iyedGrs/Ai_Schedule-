// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import login from "@/pages/login.vue";
import signUp from "@/pages/signUp.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import Tasks from "@/pages/Tasks.vue";
import userInfoForm from "@/pages/userInfoForm.vue";
import LandingPage from "@/pages/LandingPage.vue";
import SchedulesAi from "@/pages/SchedulesAi.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: LandingPage,
      },
      {
        path: "/tasks",
        name: "Tasks",
        component: Tasks,
      },
      {
        path: "/form",
        name: "Form",
        component: userInfoForm,
      },
      {
        path: "/schedules",
        name: "Schedules",
        component: SchedulesAi,
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
