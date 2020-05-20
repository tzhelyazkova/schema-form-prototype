import Vue from 'vue'
import App from './App.vue'
import { Radio, Input, Button, Field } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Radio)
Vue.use(Input)
Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
