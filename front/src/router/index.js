import AuthLayout from "@/layout/AuthLayout.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    name: "auth",
    exact: true,
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../pages/login.vue"),
      },
      {
        path: "signup",
        name: "signup",

        component: () => import("../pages/signUp.vue"),
      },
    ],
  },
  {
    path: "/",
    exact: true,
    componenent: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../pages/Home.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth && !isAuthenticated()) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
