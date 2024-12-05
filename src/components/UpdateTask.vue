<script setup>

import { onMounted, reactive, ref } from 'vue'
import router from '../appRoutes/router.js'
import { db } from '../main.js'
import { collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { getAuth } from 'firebase/auth'

const auth = getAuth()
const user = auth.currentUser
const errorMessage=ref('')


const route = useRoute()
let taskId = ''
const task = reactive({
  date: null,
  description: '',
  done: false,
  title: '',
})

onMounted(async () => {
  taskId = route.params?.id
  if (taskId) {
    await getCurrentTask()
  }

})

const getCurrentTask = async () => {
  const docRef = await getDoc(doc(db, 'todos', taskId))
  const taskData = docRef.data()
  task.date = taskData.date
  task.description = taskData.description
  task.done = taskData.done
  task.title = taskData.title
}

const updateTask = async () => {
  await updateDoc(doc(db, 'todos', taskId), task)
  router.push('/clever-to-do-list')
}

const createTask = async () => {
  if (task.title && task.description && task.date) {
    try {
      await addDoc(collection(db, 'todos'), {
        title: task.title,
        description: task.description,
        date: task.date,
        done: task.done,
        email: user.email,
      })
      router.push('/clever-to-do-list')
    } catch (error) {
    }
  }
}

const submit = () => {
  if(task.title.length>20){
    errorMessage.value="The title is too long. It must be less than 20 characters."
  }else{
    errorMessage.value=""
    if (taskId) {
      updateTask()
    } else {
      createTask()
    }
  }
}

const previousPage = () => {
  router.push('/clever-to-do-list')
}

</script>

<template>
  <div class="container">
    <div class="task-form_header">
      <img src="../assets/back.svg" alt="Back" @click="previousPage" class="back-page_button"/>
      <h1>{{ taskId ? 'Edit' : 'Create' }} task</h1>
    </div>
    <div class="task-form_title">
      <label for="title" class="task-form_name-of-field">Title:</label>
      <input id="title" type="text" v-model="task.title" placeholder="Enter a title" class="task-form_input" />
      <p v-if="errorMessage" class="task-form_error">{{ errorMessage }}</p>
    </div>

    <div class="task-form_description">
      <label for="description" class="task-form_name-of-field">Description:</label>
      <textarea id="description" v-model="task.description" placeholder="Description of task"
                class="task-form_textarea"></textarea>
    </div>
    <div class="task-form_calendar">
      <label for="date" class="task-form_name-of-field">Date:</label>
      <input id="date" type="date" v-model="task.date" class="task-form_date" />
    </div>
    <button class="task-form_button" @click="submit">{{ taskId ? 'Save' : 'Add task' }}</button>
  </div>

</template>

<style scoped>

.container {
  padding: 20px 30px;
}

.task-form_error{
  color:var(--red);
  font-weight: bold;
}

.task-form_header{
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 50px;
}
.back-page_button{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: var(--black);
}

.task-form_title,
.task-form_description,
.task-form_calendar {
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--black);
}

.task-form_input,
.task-form_textarea,
.task-form_date {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  margin-top: 5px;
}

.task-form_input:focus,
.task-form_textarea:focus,
.task-form_date:focus {
  border: 2px solid var(--primary);
  outline: var(--primary);

}

.task-form_button {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  background: var(--primary);
  color: var(--white);
  font-size: 20px;
  border: none;
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  bottom: 50px;
}

.task-form_button:hover {
  background-color: var(--secondary);
}

</style>