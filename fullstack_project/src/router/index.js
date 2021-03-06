import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path:'/register',
    name:'Register',
    component:() => import('../views/RegisterView.vue')
  },
  {
    path:'/changepassword',
    name:'ChangePassword',
    component:() => import('../views/ChangePasswordView.vue')
  },
  {
    path:'/changeusername',
    name:'ChangeUsername',
    component:() => import('../views/ChangeUsernameView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
