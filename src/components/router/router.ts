import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '../dashboard/MainDashboard/MainDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: MainDashboard,
    },
  ],
})

export default router