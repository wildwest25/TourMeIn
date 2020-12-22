import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { hideNavigation: true }, /* za skrivanje menia */
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/guide_profile',
    name: 'Guide_profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Guide_profile.vue')
  },
  {
    path: '/my_previous_tours_guide',
    name: 'My_previous_tours_guide',
    component: () => import(/* webpackChunkName: "about" */ '../views/My_pervious_tours-guide.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notifications.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hideNavigation: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { hideNavigation: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

