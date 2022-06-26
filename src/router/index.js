import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";

Vue.use(VueRouter);

const publicRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes:publicRoutes
});

export default router;
