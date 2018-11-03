import Vue from "vue"
import Router from "vue-router"
import store from "../store/index"
import home from "../App.vue"
import signInAndSignUp from "../components/signInAndSignUp"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/login",
      component: home
    },
    {
      path: "/",
      component: signInAndSignUp
    }
  ]
})

export default router
