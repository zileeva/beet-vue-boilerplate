import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Hello from "./views/Hello";
import Login from "./views/Login";
import Logout from "./views/Logout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hello",
      component: Hello
    },
    {
      path: "/hello",
      name: "hello",
      component: Hello
    },
    {
      path: "/hello/:hello",
      name: "hello",
      component: Hello
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login/:next",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
