<script setup>
import router from '../appRoutes/router.js'
import Calendar from './CalendarComponent.vue'
import { onMounted, ref, computed } from 'vue'
import {
  collection,
  doc,
  query,
  updateDoc,
  where,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../main.js'
import { getAuth, signOut } from 'firebase/auth'

const todos = ref([])
const filteredTodos = ref([])
let nonEmptyDays = {}

let currentPage = ref(1)
let selectedDate = ''
const itemsPerPage = 5

onMounted(() => {
  const auth = getAuth()
  const user = auth.currentUser
  const q = query(collection(db, 'todos'), where('email', '==', user.email))
  onSnapshot(q, (querySnapshot) => {
    const fbTodos = []
    const daysWithTasks = {}
    querySnapshot.forEach((doc) => {
      if (!daysWithTasks[doc.data().date]) {
        daysWithTasks[doc.data().date] = {}
      }
      if (doc.data().done) {
        daysWithTasks[doc.data().date].hasCompletedTask = true
      } else {
        daysWithTasks[doc.data().date].hasUnCompletedTask = true
      }
      fbTodos.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        done: doc.data().done,
        date: doc.data().date,
      })
    })
    todos.value = fbTodos
    nonEmptyDays = daysWithTasks
    if (selectedDate) {
      sortTasks(selectedDate)
    }
  })
})

const updateTodoStatus = async (todoId, newStatus) => {
  const todoRef = doc(db, 'todos', todoId)
  await updateDoc(todoRef, {
    done: newStatus,
  })
}

const deleteTodo = async (todo) => {
  await deleteDoc(doc(db, 'todos', todo))
}

const sortTasks = (date) => {
  if (date) {
    selectedDate = date
    filteredTodos.value = todos.value.filter((todo) => todo.date === date)
    currentPage.value = 1
  }
}

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTodos.value.slice(start, end)
})

const totalPages = computed(() =>
  Math.ceil(filteredTodos.value.length / itemsPerPage),
)

const handlePreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const handleNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const loginOut = () => {
  const auth = getAuth()
  signOut(auth).then(() => {
    router.push('/clever-to-do-list/login')
  })
}
</script>

<template>
  <div class="container">
    <div class="container__header">
      <h3>Tassker</h3>
      <button @click="loginOut" class="container__signOut-button">
        Sign out
      </button>
    </div>
    <Calendar :non-empty-days="nonEmptyDays" @select-date="sortTasks" />
    <div class="container__home-page">
      <div class="task-list">
        <div v-for="(todo, index) in paginatedTodos" :key="todo.id">
          <div class="task-list__task-item">
            <label class="task-list__card-of-task">
              <input
                type="checkbox"
                v-model="todo.done"
                class="task-list__checkbox-done"
                id="task"
                @change="updateTodoStatus(todo.id, todo.done)"
              />
              <span class="task-list__checkmark"></span>
              <span>{{ todo.title }}</span>
            </label>
            <div class="task-list__options-button">
              <button class="task-list__delete-button">
                <img
                  src="../assets/delete.svg"
                  alt="Delete"
                  @click="deleteTodo(todo.id)"
                  class="task-list__delete-icon"
                />
              </button>
              <button class="task-list__edit-button">
                <img
                  src="../assets/edit.svg"
                  alt="Edit"
                  @click="
                    router.push(`/clever-to-do-list/edit-task/${todo.id}`)
                  "
                  class="task-list__edit-icon"
                />
              </button>
            </div>
          </div>
          <hr v-if="index < todos.length" />
        </div>
      </div>
      <div class="pagination" v-if="totalPages">
        <button
          @click="handlePreviousPage"
          :disabled="currentPage === 1"
          class="pagination__button"
        >
          <img src="../assets/left.svg" alt="Left" />
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="handleNextPage"
          :disabled="currentPage === totalPages"
          class="pagination__button"
        >
          <img src="../assets/right.svg" alt="Right" />
        </button>
      </div>
      <div>
        <button
          class="container__add-task-button"
          @click="router.push('/clever-to-do-list/create-task')"
        >
          Add a New Task
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px 30px;
}

.container__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.container__signOut-button {
  background: var(--primary);
  color: var(--white);
  font-size: 16px;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  bottom: 25px;
}

.container__signOut-button:hover {
  background-color: var(--secondary);
}

.task-list {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
}

.task-list__task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px;
}

.task-list__card-of-task {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
}

.task-list__card-of-task input {
  display: none;
}

.task-list__card-of-task .task-list__checkmark {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  background-color: var(--white);
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.task-list__card-of-task input:checked + .task-list__checkmark {
  background-color: var(--secondary);
  border-color: var(--secondary);
}

.task-list__card-of-task input:checked + .task-list__checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 0px;
  width: 6px;
  height: 12px;
  border: solid var(--white);
  border-width: 0 3px 3px 0;
  transform: rotate(40deg);
}

img {
  width: 20px;
  height: 10px;
}

.task-list__options-button {
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: none;
  outline: none;
}

.task-list__delete-button,
.task-list__edit-button {
  border: none;
  outline: none;
  background: var(--white);
}

.task-list__delete-icon,
.task-list__edit-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: flex-end;
  margin-top: 10px;
}

.pagination__button {
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid var(--primary);
  background: var(--primary);
  color: var(--white);
}

.pagination__button:hover {
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid var(--secondary);
  background: var(--secondary);
  color: var(--white);
}

.pagination__button:active {
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid var(--secondary);
  background: var(--white);
  color: var(--secondary);
}

.pagination__button:disabled {
  width: 30px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid var(--black);
  background: darkgrey;
  color: var(--black);
  opacity: 30%;
}

.container__add-task-button {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  background: var(--primary);
  color: var(--white);
  font-size: 18px;
  border: none;
  border-radius: 25px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  bottom: 25px;
}

.container__add-task-button:hover {
  background-color: var(--secondary);
}
</style>
