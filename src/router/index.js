import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DefaultLayout from '@/layouts/DefaultLayout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DefaultLayout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
            ),
        },
        {
          path: '/cryptography',
          name: 'Cryptography',
          children: [
            {
              path: 'pkcs12',
              name: 'PKCS#12 Certificate',
              component: () => import('@/views/cryptography/PKCS12.vue'),
            }
          ]
        },
        {
          path: '/password-generator',
          name: 'Password Generator',
          component: () => import('@/views/authentication/PasswordGenerator.vue'),
        },
        {
          path: '/fake-person',
          name: 'Fake Person',
          component: () =>
            import(
              '@/views/fakeData/FakePerson.vue'
            ),
        },
      ]
    }
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
