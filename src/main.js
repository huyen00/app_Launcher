import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
// import VueTailwindElements from 'vue-tailwind-elements';
Vue.config.productionTip = false
// Vue.use(VueTailwindElements);
new Vue({
  render: h => h(App),
}).$mount('#app')
