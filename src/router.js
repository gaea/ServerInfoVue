import Vue from "vue";
import Router from "vue-router";
import HostAnalize from "./views/HostAnalize.vue";
import HostList from "./views/HostList.vue";
import HostDetail from "./views/HostDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "host-list",
      component: HostList
    },
    {
      path: "/host/:domain",
      name: "host-detail",
      component: HostDetail,
      props: true
    },
    {
      path: "/analize",
      name: "host-analize",
      component: HostAnalize
    }
  ]
});
