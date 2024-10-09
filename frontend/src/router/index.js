import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sales from '../views/Sales.vue'
import MainLayout from '../views/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    
    {
      path: '/purchase',
      name: 'purchase',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Purchase.vue')
        }
      ]
    },

    {
      path: '/sales',
      name: 'sales',
      component: MainLayout,
      children: [
        {
          path: '',
          component: Sales
        }
      ]
    },
  ]
})

export default router
