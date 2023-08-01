<template>
  <nav class="navbar">
    <a href="#!" class="navbar-logo">
      <img src="@/assets/img/logo.svg" alt="">
      <span>vue weather</span>
    </a>
    
    <div class="navbar-search">
      <img src="@/assets/img/gulp.svg" alt="">
      <input 
        @keydown.enter="getWeather(query)"
        type="text" 
        placeholder="Выбрать город"
        v-model="query"
        >
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(['getWeather']),
  },
}
</script>
