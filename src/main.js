import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment";
import VueMomentJS from "vue-momentjs";

Vue.use(VueMomentJS, moment);
moment.locale('ru', {
  week: {
    dow: 1
  }
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
