import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Authorization from '../components/AuthorizationForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import UpdateTask from '../components/UpdateTask.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name:'homePage',
    meta:{
      requiresAuth :false
    }
  },
  {
    path: '/create-task',
    component: UpdateTask,
  },
  {
    path: '/edit-task/:id',
    component: UpdateTask,
  },
  { path: '/login',
    component: Authorization,
    name:'login',
    meta:{
      requiresAuth :true
    }
  },
  { path: '/signup', component: RegistrationForm },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router