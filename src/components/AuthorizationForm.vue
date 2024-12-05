<script setup>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import router from '../appRoutes/router.js'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function signIn() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/clever-to-do-list')
    }).catch((error) => {
    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
      toast.error('Incorrect email or password.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });
    } else {
      toast.error('An unexpected error occurred.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });
    }
  });
}

</script>

<template>
  <div class="container">
    <div class="auth-form">
      <h1>Sign in</h1>
      <div class="auth-form_email">
        <p class="auth-form_nameOfInput">Email</p>
        <input type="email" class="auth-form_input" placeholder="Enter email" v-model="email">
      </div>
      <div class="auth-form_password">
        <p class="auth-form_nameOfInput">Password</p>
        <input type="password" class="auth-form_input" placeholder="Enter password" v-model="password">
      </div>
      <p v-if="errorMessage" class="auth-form_error">{{ errorMessage }}</p>
      <button class="auth-form_button" @click="signIn">Sign in</button>
      <p class="auth-form_infoText">Don't have an account?
        <router-link to="/clever-to-do-list/signup" class="auth-form_link">Sing up</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding: 20px 30px;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: var(--black);
}

.auth-form_email, .auth-form_password {
  margin-bottom: 20px;
}

.auth-form_nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: var(--black);
}

.auth-form_input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.auth-form_input:focus {
  border: 2px solid var(--primary);
  text-decoration: none;
  outline: var(--primary);
}

.auth-form_error{
  color: var(--red);
  font-weight: bold;
}

.auth-form_button {
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

.auth-form_button:hover {
  background-color: var(--secondary);
}

.auth-form_infoText {
  text-align: center;
  margin-top: 50px;
  color: var(--black);
}

.auth-form_link {
  color: var(--primary);
  text-decoration: none;
}

.auth-form_link:hover {
  color: var(--secondary);
  text-decoration: underline;
}

</style>
