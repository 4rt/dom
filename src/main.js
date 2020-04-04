import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import axios from 'axios'
import ModalPlugin from "./plugins/Modal/ModalPlugin";

Vue.use(ModalPlugin);

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || "/";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
