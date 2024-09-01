import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JasperDemoView from '../views/JasperDemo/JasperDemo.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jasperDemo',
    name: 'jasperDemo',
    component: JasperDemoView
  },
]

const router = new VueRouter({
  routes
})

export default router
