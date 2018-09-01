/*
* @Author: Venus-Lin
* @Date:   2018-08-10 10:36:22
* @Last Modified by:   Venus-Lin
* @Last Modified time: 2018-08-13 11:11:48
*/
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    recruitScrollY:0,
    searchtitle:0
  },
  getters: {
    recruitScrollY:state => state.recruitScrollY,
    searchtitle:state => state.searchtitle
  },
  mutations: {
    changeRecruitScrollY(state,recruitScrollY) { 
      state.recruitScrollY = recruitScrollY
    },
    changesearchtitle(state,searchtitle) { 
      state.searchtitle = searchtitle
    }
  },

})