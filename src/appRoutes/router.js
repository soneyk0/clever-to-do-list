import { createRouter, createWebHistory } from 'vue-router'

import Authorization from '../components/AuthorizationForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import UpdateTask from '../components/UpdateTask.vue'
import HomePage from '../components/HomePage.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/clever-to-do-list/',
    component: HomePage,
    name: 'homePage',
  },
  {
    path: '/clever-to-do-list/create-task',
    component: UpdateTask,
    name: 'updateTask',
  },
  {
    path: '/clever-to-do-list/edit-task/:id',
    component: UpdateTask,
  },
  {
    path: '/clever-to-do-list/login',
    component: Authorization,
    name: 'login',
  },
  { path: '/clever-to-do-list/signup', component: RegistrationForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  const auth = getAuth()
  const isAuth = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(!!user)
    })
  })
  let canAccess
  if (to.path !== '/login' && to.path !== '/signup') {
    canAccess = isAuth
  } else if (to.path === '/login' || to.path === '/signup') {
    canAccess = !isAuth
  } else {
    canAccess = true
  }
  if (!canAccess) {
    return isAuth ? '/' : '/login'
  }
})

export default router
