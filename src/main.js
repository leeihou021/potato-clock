import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faListUl, faCogs } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import draggable from 'vuedraggable'

import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.styl'

Vue.config.productionTip = false

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faClock, faListUl, faCogs)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('draggable', draggable)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
