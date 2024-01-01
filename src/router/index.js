// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/Users.vue'),
      },
      {
        path: 'brain',
        name: 'Brain',
        component: () => import('@/views/Brain.vue'),
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
      },
      {
        path: 'invention',
        name: 'Invention',
        component: () => import('@/views/Invention.vue'),
      },
      {
        path: 'international',
        name: 'International',
        component: () => import('@/views/International.vue'),
      },
      {
        path: 'teacher',
        name: 'Teacher',
        component: () => import('@/views/Teacher.vue'),
      },
      {
        path: 'achievement',
        name: 'Achievement',
        component: () => import('@/views/Achievement.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
