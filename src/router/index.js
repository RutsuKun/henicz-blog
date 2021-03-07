import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/articles/:slug',
    name: 'Article',
    component: Article
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
