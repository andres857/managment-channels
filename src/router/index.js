import { createRouter, createWebHistory } from "vue-router";
// import Players from "../views/Players.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/players",
      name: "players",
      // component: Players,
      component: () => import("../views/Players.vue"),
    },
  ],
});

export default router;
