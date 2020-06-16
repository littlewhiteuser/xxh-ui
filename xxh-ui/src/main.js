import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

import xhUi from './packages/index'
Vue.use(xhUi)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
