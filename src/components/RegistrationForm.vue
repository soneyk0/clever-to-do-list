<script setup>

import { ref } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import{getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import router from '../appRoutes/router.js'

const email=ref('')
const password = ref('')
const confirmPassword=ref('')
const errorMessage=ref()

function register(){
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords miss match'; // Устанавливаем сообщение об ошибке
    return;
  }
  createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then(()=>{
        router.push('/clever-to-do-list')
    }).catch((error)=>{
    console.log(error.message)
    if (error.code === 'auth/invalid-email') {
      toast.error('Incorrect email.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });
    } else if (error.code === 'auth/weak-password') {
      toast.error('Password should be at least 6 characters.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });
    } else if (error.code === 'auth/email-already-in-use') {
      toast.error('This email is already in use', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });}
    else {
      toast.error('An unexpected error occurred.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: "error",
        theme: "colored",
      });
    }
  })
}
</script>

<template>
  <div class="container">
    <div class="register-form">
      <h1>Sign up</h1>
      <div class="register-form_email">
        <p class="register-form_nameOfInput">Email</p>
        <input type="email" class="register-form_input" placeholder="Enter email" v-model="email">
      </div>
      <div class="register-form_password">
        <p class="register-form_nameOfInput">Password</p>
        <input type="password" class="register-form_input" placeholder="Enter password" v-model="password">
      </div>
      <div class="register-form_password">
        <p class="register-form_nameOfInput">Confirm password</p>
        <input type="password" class="register-form_input" placeholder="Enter password" v-model="confirmPassword">
      </div>
      <p v-if="errorMessage" class="auth-form_error">{{ errorMessage }}</p>
      <button class="register-form_button" @click="register">Sign up</button>
      <p class="register-form_infoText">Already have an account? <router-link to="/clever-to-do-list/login" class="register-form_link">Sing in</router-link></p>
    </div>
  </div>
</template>

<style scoped>

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  color: #333;
}

.auth-form_error{
  color:darkred;
  font-weight: bold;
}

.register-form_email, .register-form_password {
  margin-bottom: 20px;
}

.register-form_nameOfInput {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.register-form_input {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.register-form_input:focus {
  border: 2px solid lightsalmon;
  outline: lightsalmon;

}

.register-form_button {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 50px;
  width: 90%;
  background: lightsalmon;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-form_button:hover {
  background-color: darkorange;
}

.register-form_infoText {
  text-align: center;
  margin-top: 50px;
  color: #333;
}

.register-form_link{
  color: lightsalmon;
  text-decoration: none;
}
.register-form_link:hover {
  color: darkorange;
  text-decoration: underline;
}
</style>
