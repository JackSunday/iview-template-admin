import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      hidden: false,
      component: () => import("@/layout"),
      meta: { title: "首页", icon: "ios-albums" },
      name: "example",
      children: [
        {
          path: "/index/index1",
          name: "home",
          meta: { title: "from1", icon: "md-albums" },
          component: () => import("@/views/Home.vue")
        },
        {
          path: "/index/about2",
          name: "about2",
          meta: { title: "from2", icon: "md-albums" },
          component: () => import("@/views/About.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "from", icon: "md-albums" },
      component: () => import("@/layout"),
      children: [
        {
          path: "/about/about2",
          name: "about3",
          meta: { title: "from2", icon: "md-albums" },
          component: () => import("@/views/About.vue")
        }
      ]
    }
  ]
});
