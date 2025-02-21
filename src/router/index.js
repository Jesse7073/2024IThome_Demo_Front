import Vue from 'vue'
import VueRouter from 'vue-router'
import JasperDemoView from '../views/JasperDemo/JasperDemo.vue'
import ApacheDemoView from '@/views/ApacheDemo/ApacheDemo.vue'
import JFreeChartDemoView from '@/views/JFreeChartDemo/JFreeChartDemo.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/jasperDemo'
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
  {
    path: '/apacheDemo',
    name: 'apacheDemo',
    component: ApacheDemoView
  },
  {
    path: '/jFreeChartDemo',
    name: 'jFreeChartDemo',
    component: JFreeChartDemoView
  },
]

const router = new VueRouter({
  // history 模式，移除 #
  mode: 'history',
  routes
})

export default router
