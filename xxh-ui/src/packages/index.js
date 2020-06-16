// 所有组件的入口


import Button from './button.vue'
import Icon from './icon.vue'
import ChooseDrawer from './ChooseDrawer.vue'

const install = (Vue) => {
    Vue.component(Button.name, Button)
    Vue.component(Icon.name, Icon)
    Vue.component(ChooseDrawer.name, ChooseDrawer)
}

// 有可能组件会通过script标签的方式引入
// <script src="/xh-ui"></script>
// 不会触发install，让它自动触发install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
    install
}