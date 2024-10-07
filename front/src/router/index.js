// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import signUp from "@/pages/signUp.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import Tasks from "@/pages/Tasks.vue";
import userInfoForm from "@/pages/userInfoForm.vue";
import LandingPage from "@/pages/LandingPage.vue";
import SchedulesAi from "@/pages/SchedulesAi.vue";
import PricingPage from "@/pages/PricingPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
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
      {
        path: "/pricing",
        name: "pricing",
        component: PricingPage,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    // No layout specified; it will render without any layout
  },
  {
    path: "/register",
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
