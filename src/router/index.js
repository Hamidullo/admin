// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
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
        path: 'academic',
        name: 'Academic',
        component: () => import('@/views/user/Academic.vue'),
      },
      {
        path: 'textbook',
        name: 'Textbook',
        component: () => import('@/views/user/Textbook.vue'),
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
    path: '/change',
    name: 'Change',
    component: () => import('@/views/login/ChangePassword.vue'),
  },
  {
    path: '/',
    name: 'Common',
    component: () => import('@/views/common/Common.vue'),
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
      {
        path: 'item/:id',
        name: 'AdminItem',
        component: () => import('@/views/admin/AdminItem.vue'),
      },
      {
        path: 'about',
        name: 'AdminAbout',
        component: () => import('@/views/admin/AdminAbout.vue'),
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: () => import('@/views/admin/AdminUsers.vue'),
      },
      {
        path: 'user/:userId',
        name: 'AdminUser',
        component: () => import('@/views/admin/AdminUser.vue'),
      },
      {
        path: 'news',
        name: 'AdminNews',
        component: () => import('@/views/admin/AdminNews.vue'),
      },
      {
        path: 'new/:userId',
        name: 'AdminNew',
        component: () => import('@/views/admin/AdminNew.vue'),
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: () => import('@/views/admin/AdminSettings.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
