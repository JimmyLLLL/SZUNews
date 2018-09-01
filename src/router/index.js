import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main/Main'
import NewsMain from '@/pages/News/NewsMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/NewsMain',
      name: 'NewsMain',
      component: NewsMain,
    }
  ]

})
