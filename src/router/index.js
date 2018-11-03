import Vue from "vue"
import Router from "vue-router"
import store from "../store/index"
import home from "../App.vue"
import signInAndSignUp from "../signInAndSignUp"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/login",
      component: signInAndSignUp
    }
  ]
})

export default router
