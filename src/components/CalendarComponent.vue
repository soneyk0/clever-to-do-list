<script setup>
import { computed, onMounted, ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  nonEmptyDays: Object,
})

const emit = defineEmits(['select-date'])
const currentDate = new Date()
const currentMonth = ref(currentDate.getMonth())
const currentYear = ref(currentDate.getFullYear())
const selectedDate = ref('')
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

const generateCalendar = () =>
  computed(() => {
    const days = []
    for (let i = 0; i < 31; i++) {
      const newDate = new Date(
        currentYear.value,
        currentMonth.value,
        currentDate.getDate() + i,
      )
      const currentMonthName = computed(() => monthNames[newDate.getMonth()])
      const getDayOfWeek = computed(
        () => daysOfWeek[newDate.getDay() === 0 ? 6 : newDate.getDay() - 1],
      )

      const isToday =
        newDate.getDate() === currentDate.getDate() &&
        newDate.getMonth() === currentDate.getMonth() &&
        newDate.getFullYear() === currentDate.getFullYear()

      const monthIndex = monthNames.indexOf(currentMonthName.value)
      const formattedMonth = (monthIndex + 1).toString().padStart(2, '0')
      const formattedDay = newDate.getDate().toString().padStart(2, '0')

      days.push({
        date: newDate.getDate(),
        dayOfWeek: getDayOfWeek,
        month: currentMonthName,
        year: newDate.getFullYear(),
        isToday: isToday,
        formattedDate: `${newDate.getFullYear()}-${formattedMonth}-${formattedDay}`,
      })
    }
    return days
  })

const calendarDays = generateCalendar()

const selectDate = (date) => {
  selectedDate.value = date.formattedDate
  emit('select-date', selectedDate.value)
}

onMounted(() => {
  selectDate(calendarDays.value[0])
})
</script>

<template>
  <div class="container__calendar">
    <div class="calendar__year">
      {{ currentYear }}
    </div>
    <div class="calendar">
      <button
        v-for="date in calendarDays"
        :key="date.date"
        class="calendar__item"
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
