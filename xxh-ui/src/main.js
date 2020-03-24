import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import xhUi from './packages/index'
Vue.use(xhUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
