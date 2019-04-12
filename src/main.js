// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  "./assets/css/common.css"
import  "./assets/css/color.css"
import  "./assets/css/element-m.css"
import axios from './api/http'
// import axiosMethodOverride from 'axios-method-override'

if (false) {
    console = console || {};
    console.log = function(){};
}

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./assets/svg', true, /\.svg$/);
requireAll(req)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //使用store
  components: { App },
  template: '<App/>'
})
