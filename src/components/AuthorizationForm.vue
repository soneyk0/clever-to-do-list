<script setup>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import router from '../appRoutes/router.js'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function signIn() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/clever-to-do-list')
    })
    .catch(() => {
      toast.error('Incorrect email or password', {
        autoClose: 3000,
        position: 'bottom-left',
        type: 'error',
        theme: 'colored',
      })
    })
}
</script>

<template>
  <div class="container">
    <form class="auth-form" @submit.prevent="signIn">
      <h1>Sign in</h1>
      <div class="auth-form__email">
        <p class="auth-form__nameOfInput">Email</p>
        <input
          type="email"
          class="auth-form__input"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="auth-form__password">
        <p class="auth-form__nameOfInput">Password</p>
        <input
          type="password"
          class="auth-form__input"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
      <button type="submit" class="auth-form__button">Sign in</button>
      <p class="auth-form_infoText">
        Don't have an account?
        <router-link to="/clever-to-do-list/signup" class="auth-form__link"
          >Sing up</router-link
        >
      </p>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 30px;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: var(--black);
}

.auth-form__email,
.auth-form__password {
  margin-bottom: 20px;
}

.auth-form__nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--black);
}

.auth-form__input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.auth-form__input:focus {
  border: 2px solid var(--primary);
  text-decoration: none;
  outline: var(--primary);
}

.auth-form__error {
  color: var(--red);
  font-weight: bold;
}

.auth-form__button {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 25px;
  width: 90%;
  background: var(--primary);
  color: var(--white);
  font-size: 18px;
  border: none;
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-form__button:hover {
  background-color: var(--secondary);
}

.auth-form_infoText {
  text-align: center;
  margin-top: 50px;
  color: var(--black);
}

.auth-form__link {
  color: var(--primary);
  text-decoration: none;
}

.auth-form__link:hover {
  color: var(--secondary);
  text-decoration: underline;
}
</style>
