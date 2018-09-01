<template>
  <div id="app">
    <div class="grey">
        <transition enter-active-class="animated fadeIn"
                    leave-active-class="animated.faster fadeOut">
          <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </transition>
        <transition enter-active-class="animated fadeIn"
                    leave-active-class="animated.faster fadeOut"
                    >
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
  	/*回到主界面记忆位置，回到文章顶部*/
   	$route(to, from) {
      if(to.name==="NewsMain")
   		{
   		   setTimeout(function(){
            window.scroll(0,0)
         },0)
   		}			
   	}
},
}
</script>

<style type="text/css" scoped>
</style>
