import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/demo1',
        name: 'demo1',
        component: () => import('@/views/demo1/')
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: () => import('@/views/demo2/')
      },
      {
        path: '/demo3',
        name: 'demo3',
        component: () => import('@/views/demo3/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
