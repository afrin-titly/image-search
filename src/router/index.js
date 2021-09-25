import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import DetailView from '../components/DetailView.vue'
import Layout from '../views/layout/Layout.vue'
import About from '../views/about/About.vue'
import Home from '../views/home/Home.vue'
import DetailView from '../components/DetailView.vue'
import Auth from '../views/testauth/Auth.vue'
import Errors from '../views/Error.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/about",
        component: About,
        name: "about"
      },
      {
        path: "",
        component: Home,
        name: "home"
      },
      {
        path: "/image/:id",
        component: DetailView,
        name: "DetailView"
      },
      {
        path: "/testauth",
        component: Auth,
        name: "auth"
      },
      {
        path: "error",
        component: Errors,
        name: "error"
      },
      {
        path: "/logout",
        name: "logout"
      }
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
