import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Authorization from '../components/AuthorizationForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import UpdateTask from '../components/UpdateTask.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
  {
    path: '/clever-to-do-list',
    component: HomePage,
    name:'homePage',
    meta:{
      requiresAuth :false
    }
  },
  {
    path: '/clever-to-do-list/create-task',
    component: UpdateTask,
  },
  {
    path: '/clever-to-do-list/edit-task/:id',
    component: UpdateTask,
  },
  { path: '/clever-to-do-list/login',
    component: Authorization,
    name:'login',
    meta:{
      requiresAuth :true
    }
  },
  { path: '/clever-to-do-list/signup', component: RegistrationForm },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router