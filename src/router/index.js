import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import DetailView from '../components/DetailView.vue'
import Layout from '../views/layout/Layout.vue'
import About from '../views/about/About.vue'
import Home from '../views/home/Home.vue'
import DetailView from '../components/DetailView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/detail/:id',
  //   name: 'DetailView',
  //   component: DetailView,
  //   // props: true
  // },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "",
        component: Home
      },
      {
        path: "/image/:id",
        component: DetailView,
        name: "DetailView"
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
