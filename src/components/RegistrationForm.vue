<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../appRoutes/router.js'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref()

function register() {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords miss match'
    return
  }
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error.message)
      if (error.code === 'auth/invalid-email') {
        toast.error('Incorrect email.', {
          autoClose: 3000,
          position: 'bottom-left',
          type: 'error',
          theme: 'colored',
        })
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password should be at least 6 characters.', {
          autoClose: 3000,
          position: 'bottom-left',
          type: 'error',
          theme: 'colored',
        })
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already in use', {
          autoClose: 3000,
          position: 'bottom-left',
          type: 'error',
          theme: 'colored',
        })
      } else {
        toast.error('An unexpected error occurred.', {
          autoClose: 3000,
          position: 'bottom-left',
          type: 'error',
          theme: 'colored',
        })
      }
    })
}
</script>

<template>
  <div class="container">
    <div class="register-form">
      <h1>Sign up</h1>
      <div class="register-form__email">
        <p class="register-form__nameOfInput">Email</p>
        <input
          type="email"
          class="register-form__input"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="register-form__password">
        <p class="register-form__nameOfInput">Password</p>
        <input
          type="password"
          class="register-form__input"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <div class="register-form__password">
        <p class="register-form__nameOfInput">Confirm password</p>
        <input
          type="password"
          class="register-form__input"
          placeholder="Enter password"
          v-model="confirmPassword"
        />
      </div>
      <p v-if="errorMessage" class="auth-form__error">{{ errorMessage }}</p>
      <button class="register-form__button" @click="register">Sign up</button>
      <p class="register-form__infoText">
        Already have an account?
        <router-link to="/login" class="register-form__link"
          >Sing in</router-link
        >
      </p>
    </div>
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

.auth-form__error {
  color: var(--red);
  font-weight: bold;
}

.register-form__email,
.register-form__password {
  margin-bottom: 20px;
}

.register-form__nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--black);
}

.register-form__input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.register-form__input:focus {
  border: 2px solid var(--primary);
  outline: var(--primary);
}

.register-form__button {
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

.register-form__button:hover {
  background-color: var(--secondary);
}

.register-form__infoText {
  text-align: center;
  margin-top: 50px;
  color: var(--black);
}

.register-form__link {
  color: var(--primary);
  text-decoration: none;
}
.register-form__link:hover {
  color: var(--secondary);
  text-decoration: underline;
}
</style>
