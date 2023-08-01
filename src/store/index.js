import { createStore } from 'vuex'

export default createStore({
  state: {
    apiKey: 'cb8f76325991c658ce6ec4f326120923',
    getFullWeather: null
  },
  getters: {
    getFullWeather: state => state.getFullWeather
  },
  mutations: {
    getWeather(state, el){
      state.getFullWeather = el
    }
  },
  actions: {
    async getWeather({commit, state}, city) {
      try{
        let res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
        let response = await res.json()
        let {lat, lon, name} = response[0]
        let result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exclude=minutely,hourly,alerts&appid=${state.apiKey}`)
        let fullInfo = await result.json()
        let weatherObj = {...fullInfo, name: name}
        commit('getWeather', weatherObj)
      }catch(error){
        console.error('Произошла ошибка запроса ' + error);
      }
    }
  },
  modules: {
  }
})
