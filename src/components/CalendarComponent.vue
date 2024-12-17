<script setup>
import { onMounted, reactive, ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  nonEmptyDays: Object,
})

const emit = defineEmits(['select-date'])
const today = new Date()
const currentDate = ref(new Date())
const selectedDate = ref('')
const target = ref(null)
const calendar = ref(null)

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

let generateDateCount = 0

const generateCalendar = () => {
  const days = []
  const currentMonth = currentDate.value.getMonth()
  const currentYear = currentDate.value.getFullYear()
  const startDay = currentDate.value.getDate()
  const daysInMonth = getDaysInMonth(currentMonth, currentYear)

  for (let i = startDay; i <= daysInMonth; i++) {
    const newDate = new Date(currentYear, currentMonth, i)

    const isToday =
      newDate.getDate() === today.getDate() &&
      newDate.getMonth() === today.getMonth() &&
      newDate.getFullYear() === today.getFullYear()

    const formattedMonth = (currentMonth + 1).toString().padStart(2, '0')
    const formattedDay = i.toString().padStart(2, '0')

    days.push({
      date: i,
      dayOfWeek: daysOfWeek[newDate.getDay() === 0 ? 6 : newDate.getDay() - 1],
      month: monthNames[currentMonth],
      year: currentYear,
      isToday: isToday,
      formattedDate: `${currentYear}-${formattedMonth}-${formattedDay}`,
    })
  }
  return days
}

const calendarDays = reactive({
  days: generateCalendar(today),
})

const selectDate = (date) => {
  selectedDate.value = date.formattedDate
  emit('select-date', selectedDate.value)
}

const loadNextMonth = () => {
  let nextMonth = currentDate.value.getMonth() + 1
  let nextYear = currentDate.value.getFullYear()

  if (nextMonth > 11) {
    nextMonth = 0
    nextYear += 1
  }
  currentDate.value = new Date(nextYear, nextMonth, 1)
  const newDays = generateCalendar()
  calendarDays.days.push(...newDays)
}

onMounted(() => {
  selectDate(calendarDays.days[0])

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadNextMonth()
          observer.unobserve(entry.target)
          observeLastDay()
        }
      })
    },
    { root: calendar.value },
  )

  const observeLastDay = () => {
    const lastDayElement = document.querySelector('.calendar__item:last-child')
    if (lastDayElement) observer.observe(lastDayElement)
  }

  observeLastDay()
})
</script>

<template>
  <div class="container__calendar">
    <div class="calendar__year">
      {{ currentDate.getFullYear() }}
    </div>
    <div class="calendar" ref="calendar">
      <button
        v-for="(date, index) in calendarDays.days"
        :key="generateDateCount.toString() + date.formattedDate + index"
        class="calendar__item"
        :ref="
          (el) => {
            if (index === calendarDays.days.length - 1) {
              target = el
            }
          }
        "
        @click="() => selectDate(date)"
        :class="{
          today: date?.isToday,
          selected: date.formattedDate === selectedDate,
        }"
      >
        <span class="calendar__day-of-week">{{ date.dayOfWeek }}</span>
        <span class="calendar__date">{{ date.date }}</span>
        <span class="calendar__month">{{ date.month }}</span>
        <div
          v-if="nonEmptyDays[date.formattedDate]"
          class="calendar__task-status"
        >
          <div
            v-if="nonEmptyDays[date.formattedDate].hasCompletedTask"
            class="dot calendar__has-completed"
          ></div>
          <div
            v-if="nonEmptyDays[date.formattedDate].hasUnCompletedTask"
            class="dot calendar__has-uncompleted"
          ></div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.calendar__task-status {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.calendar__has-completed {
  background: darkgreen;
}

.calendar__has-uncompleted {
  background: saddlebrown;
}

.calendar__year {
  text-align: center;
  color: var(--black);
  font-weight: bold;
}

.calendar {
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: scroll;
  margin-top: 10px;
  margin-bottom: 50px;
  scrollbar-width: thin;
}

.calendar__item {
  min-width: 50px;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darkgrey;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: var(--white);
  cursor: pointer;
}

.calendar__item:active {
  color: var(--white);
  background-color: var(--secondary);
}

.calendar__item:focus {
  color: var(--white);
  background-color: var(--secondary);
  border: none;
}

.calendar__item.selected {
  color: var(--white);
  background-color: var(--secondary);
}

.calendar__item.today {
  background-color: lightgreen;
  border-color: green;
  font-weight: bold;
  color: var(--white);
}

.calendar__item.selected {
  background-color: orange;
  border-color: orange;
  font-weight: bold;
}
</style>
