// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/user/Home.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/user/Dashboard.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/user/About.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/user/Users.vue'),
      },
      {
        path: 'brain',
        name: 'Brain',
        component: () => import('@/views/user/Brain.vue'),
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/views/user/Projects.vue'),
      },
      {
        path: 'invention',
        name: 'Invention',
        component: () => import('@/views/user/Invention.vue'),
      },
      {
        path: 'international',
        name: 'International',
        component: () => import('@/views/user/International.vue'),
      },
      {
        path: 'teacher',
        name: 'Teacher',
        component: () => import('@/views/user/Teacher.vue'),
      },
      {
        path: 'achievement',
        name: 'Achievement',
        component: () => import('@/views/user/Achievement.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/user/Settings.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminDash',
        component: () => import('@/views/admin/AdminDash.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
