import Vue from 'vue'
import App from './App.vue'
import animate from 'animate.css'
import './plugins/element.js'
//index.js是默认不写的
import store from './store'

Vue.use(animate)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
