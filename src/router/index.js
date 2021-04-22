import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Select from '@/components/Select'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Select
    },
    {
      path: '/category/:categoryName',
      name: 'Select',
      component: Select
    },
    {
      path: '/post/:categoryName/:postName',
      name: 'Post',
      component: Post
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
