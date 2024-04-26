import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/home/Home.vue"),
  },
  {
    path: "/secret",
    name: "secret",
    component: () => import("@/components/Secret.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
