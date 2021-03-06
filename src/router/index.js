import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Dashboard from '@/components/dashboard'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }]
})
