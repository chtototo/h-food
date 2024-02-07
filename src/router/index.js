import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../components/Calculator.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../components/Table.vue')
    },
    {
      path: '/perfect_weight',
      name: 'perfect_weight',
      component: () => import('../components/PerfectWeight.vue')
    },
    {
      path: '/normal_weight',
      name: 'normal_weight',
      component: () => import('../components/NormalWeight.vue')
    },
    {
      path: '/fat_percentage',
      name: 'fat_percentage',
      component: () => import('../components/FatPercentage.vue')
    },
    {
      path: '/muscle_mass',
      name: 'muscle_mass',
      component: () => import('../components/MuscleMass.vue')
    },
    {
      path: '/bmr',
      name: 'bmr',
      component: () => import('../components/BMR.vue')
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: () => import('../components/BMI.vue')
    },
    {
      path: '/products_calculator',
      name: 'products_calculator',
      component: () => import('../components/ProductsCalculator.vue')
    },
  ]
})

export default router
