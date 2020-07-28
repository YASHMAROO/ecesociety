import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Academics from '@/components/Academics'
import Team from '@/components/Team'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Blogs from '@/components/Blogs'
import Achievements from '@/components/Achievements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/academics',
      name: 'Academics',
      component: Academics
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: Achievements
    }
  ]
})
