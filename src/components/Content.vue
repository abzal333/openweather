<template>
  <header class="content">
    <div class="content-left">
      <p class="content-left__degree">{{Math.round(getFullWeather.current.temp)}}°</p>
      <p class="content-left__day">Сегодня</p>
      <p class="content-left__date">Время: {{ getHoursAndMinutes }}</p>
      <p class="content-left__city">Город: {{ getFullWeather.name }}</p>
      <div class="content-left__img">
        <img src="@/assets/img/sun.svg" alt="" v-if="getDescr == 'ясно'">
        <img src="@/assets/img/minicloud.svg" alt="" v-else-if="getDescr == 'небольшая облачность'">
        <!-- <img src="@/assets/img/cloud.svg" alt="">
        <img src="@/assets/img/minirain.svg" alt="">
        <img src="@/assets/img/sunrain.svg" alt="">
        
        <img src="@/assets/img/rain.svg" alt=""> -->
      </div>
    </div>
    <div class="content-right">
      <img src="@/assets/img/headerBg.svg" alt="" class="content-right__img">
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/temp.svg" alt="">
        </div>
        <span class="content-right__item--text">Температура</span>
        <span>
          {{Math.round(getFullWeather.current.temp)}}° - ощущается как 
          {{Math.round(getFullWeather.current.feels_like)}}°
          </span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/davlenie.svg" alt="">
        </div>
        <span class="content-right__item--text">Давление </span>
        <span>{{getFullWeather.current.pressure}} мм ртутного столба</span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/osadki.svg" alt="">
        </div>
        <span class="content-right__item--text">Влажность </span>
        <span>{{getFullWeather.current.humidity}} %</span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/wind.svg" alt="">
        </div>
        <span class="content-right__item--text">Ветер</span>
        <span>{{ getFullWeather.current.wind_speed}} м/с </span>
      </div>
    </div>
  </header>
</template>

<script>
import unix from '@/timestamp.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      info: null
    }
  },
  computed: {
    ...mapGetters(['getFullWeather']),
    getHoursAndMinutes(){
      let hour = unix(this.getFullWeather.current.dt, 'hour')
      let minute = unix(this.getFullWeather.current.dt, 'minute')
      return hour+':'+minute
    },
    getDescr(){
      return this.getFullWeather.current.weather[0].description
    }
  },
}
</script>