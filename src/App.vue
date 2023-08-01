<template>
  <div class="container" v-if="getFullWeather">
    <Navbar/>
    <Content/>
    <Days/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Content from '@/components/Content.vue'
import Days from '@/components/Days.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {Navbar,Content,Days},
  computed: {
    ...mapGetters(['getFullWeather'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  created() {
    this.getWeather('Tashkent')
  },
}
</script>

<style>

</style>