// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/animate.css'
import store from '@/store/store.js'
//import fastClick from 'fastclick'
import vConsole from 'vconsole'
import Vuex from 'vuex'


Vue.use(Vuex)
let Console = new vConsole()
Vue.config.productionTip = false
//fastClick.attach(document.body)

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
if (htmlWidth > 750) {
	htmlWidth = 750;
}
htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
console.log(htmlWidth)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
