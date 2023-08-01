<template>
  <div class="days">
    <button class="days-btn week">На неделю</button>
    <button class="days-btn cancel" @click="getWeather('Tashkent')">Отменить</button>
  </div>
  <div class="week-list">
    <PerDay
      v-for="(day, ind) in listWeek"
      :key="ind"
      :day="day"
      :id="ind"
    />
  </div>
</template>

<script>
import PerDay from '@/components/PerDay.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {PerDay},
  data() {
    return {
      listWeek: []
    }
  },
  computed: {
    ...mapGetters(['getFullWeather']),
  },
  methods: {
    ...mapActions(['getWeather']),
    getWeek(){
      this.getFullWeather.daily.forEach((el, key) => {
        if(key <= 6){
          this.listWeek.push(el)
        }
      })
    }
  },
  created() {
    this.getWeek()
  },
}
</script>
