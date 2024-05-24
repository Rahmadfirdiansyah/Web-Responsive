import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import TentangKamiView from '@/views/TentangKamiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tentang',
      name: 'tentang',
      component: TentangKamiView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    }
  ]
})

export default router
