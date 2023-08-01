<template>
  <div class="card">
    <h2 class="card-title">
      {{id == 0 ? 'Сегодня' : id == 1 ? 'Завтра' : getWeekDay}}
    </h2>
    <p class="card-date">{{getDay}} {{ getMonth }}</p>
    <div class="card-img">
      <img src="@/assets/img/sun.svg" alt="">
    </div>
    <p class="card-temp">{{Math.round(day.temp.max)}}°</p>
    <p class="card-temp-night">{{Math.round(day.temp.min)}}°</p>
    <p class="card-weather">{{getDescr}}</p>
  </div>
</template>

<script>
import unix from '@/timestamp.js'
export default {
  props: ['day', 'id'],
  computed: {
    getDescr(){
      return this.day.weather[0].description
    },
    getWeekDay(){
      let getWeek = unix(this.day.dt, 'weekday')
      return getWeek
    },
    getDay(){
      let getDay = unix(this.day.dt, 'day')
      return getDay
    },
    getMonth(){
      let getMonth = unix(this.day.dt, 'month')
      return getMonth
    }
  },
  created() {
    console.log(this.id);
  },
}
</script>
