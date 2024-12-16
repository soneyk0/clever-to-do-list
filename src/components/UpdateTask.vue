<script setup>
import { onMounted, reactive, ref } from 'vue'
import router from '../appRoutes/router.js'
import { db } from '../main.js'
import { collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import { getAuth } from 'firebase/auth'
import { toast } from 'vue3-toastify'

const auth = getAuth()
const user = auth.currentUser
const errorMessage = ref('')

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
  toast.success('Task was successfully updated.', {
    autoClose: 3000,
    position: 'bottom-left',
    type: 'success',
    theme: 'colored',
  })
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
      toast.success('Task was successfully created.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: 'success',
        theme: 'colored',
      })
      router.push('/clever-to-do-list')
    } catch {
      toast.error('An unexpected error occurred.', {
        autoClose: 3000,
        position: 'bottom-left',
        type: 'error',
        theme: 'colored',
      })
    }
  }
}

const submit = () => {
  if (task.title.length > 20) {
    errorMessage.value =
      'The title is too long. It must be less than 20 characters.'
  } else {
    errorMessage.value = ''
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
    <div class="task-form__header">
      <button class="header__back-page-button">
        <img
          src="../assets/back.svg"
          alt="Back"
          @click="previousPage"
          class="back-page__icon"
        />
      </button>
      <h1>{{ taskId ? 'Edit' : 'Create' }} task</h1>
    </div>
    <div class="task-form__title">
      <label for="title" class="task-form__name-of-field">Title:</label>
      <input
        id="title"
        type="text"
        v-model="task.title"
        placeholder="Enter a title"
        class="task-form__input"
      />
      <p v-if="errorMessage" class="task-form__error">{{ errorMessage }}</p>
    </div>

    <div class="task-form__description">
      <label for="description" class="task-form__name-of-field"
        >Description:</label
      >
      <textarea
        id="description"
        v-model="task.description"
        placeholder="Description of task"
        class="task-form__textarea"
      ></textarea>
    </div>
    <div class="task-form__calendar">
      <label for="date" class="task-form__name-of-field">Date:</label>
      <input
        id="date"
        type="date"
        v-model="task.date"
        class="task-form__date"
      />
    </div>
    <button class="task-form__button" @click="submit">
      {{ taskId ? 'Save' : 'Add task' }}
    </button>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 30px;
}

.task-form__error {
  color: var(--red);
  font-weight: bold;
}

.task-form__header {
  display: flex;
  gap: 30px;
  align-items: center;
  margin-bottom: 50px;
}

.header__back-page-button {
  outline: none;
  border: none;
  background: var(--white);
}
.back-page__icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: var(--black);
}

.task-form__title,
.task-form__description,
.task-form__calendar {
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--black);
}

.task-form__input,
.task-form__textarea,
.task-form__date {
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  margin-top: 5px;
}

.task-form__input:focus,
.task-form__textarea:focus,
.task-form__date:focus {
  border: 2px solid var(--primary);
  outline: var(--primary);
}

.task-form__button {
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

.task-form__button:hover {
  background-color: var(--secondary);
}
</style>
