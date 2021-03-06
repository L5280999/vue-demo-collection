import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/reset.styl'
import 'common/stylus/base.styl'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/foundation.css'
import Axios from './api/config'
import VueAxios from 'vue-axios'
import global from 'common/js/global'
import Breadcrumb from 'base/breadcrumb'
require('./mock/index')

Vue.prototype.$global = global
Vue.use(VueAxios, Axios)
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

Vue.component('Breadcrumb', Breadcrumb)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
