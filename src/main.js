// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import App from "./App"
import signInAndSignUp from "./signInAndSignUp"
import "normalize.css"
import "./assets/reset.scss"

Vue.use(VueResource)

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import { METHODS } from "http"
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

var { Query, User } = AV
var APP_ID = "W7NHdPc1bCQFxkcowluIBfh0-gzGzoHsz"
var APP_KEY = "iQkUHnRBIL7fkX9F900aYfJz"

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    actionType: "signUp"
  },
  components: { App },
  template: "<App/>"
})
