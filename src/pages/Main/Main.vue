<template>
	<div class="grey">
		<transition name="animateHeader"
					enter-active-class="animated fadeInDown"
					leave-active-class="animated fadeOutUp"
					>
			<main-header v-show="showheader" @emitSearch="handlesearch" :message="clearSearch"></main-header>
		</transition>
        <keep-alive>
        	<component  
                :is="nowCom"
                :message="searchText"
                @sback="handleback"  
            >
            </component>
        </keep-alive>
	</div>
</template>

<script>
import MainHeader from './components/MainHeader'
import NewsTitle from './components/NewsTitle'
import SearchTitle from './components/SearchTitle'
import store from '@/store/store.js'
import axios from 'axios'
export default{
	name:'Main',
	components:{
		MainHeader,
		NewsTitle,
		SearchTitle
	},
	data () {
    return {
    	showheader: true,
    	starty: '',
    	endy: '',
    	passbook:false,
    	nowCom:'NewsTitle',
    	isSaveposition:true,
        searchText:'',
        clearSearch:false
      }
    },
	methods:{
		/*ajax数据请求*/
		runaxios(){
			axios.get('')
			.then(this.axiossucc)
		},
		axiossucc(res){
			res = res.data
		},
		/*获取当前滚动位置*/
		handleScroll(){
    		var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    		if(top>60)
    		{
    			this.passbook = true
    		}
    		else
    		{
    			this.showheader = true
    			this.passbook =false
    		}
    	},
    	handlestart(e){
    		this.starty = e.touches[0].clientY
    	},
    	handleend(e){
    		this.endy = e.changedTouches[0].clientY;
			if(this.endy<this.starty&&this.passbook)
			{
			this.showheader = false
			}
			else if(this.endy>this.starty)
			{
			this.showheader = true
			}
    		
    	},
    	handlesearch(searchText){
            if(this.isSaveposition)
            {
                let position = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if (position == null) position = 0
                this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来
            }
            
    		this.nowCom = 'SearchTitle',
    		this.isSaveposition = false,
    		this.searchText = searchText,
            setTimeout(function(){
                window.scrollTo(0,0)
            },0)

    	},
    	handleback(){
    		this.nowCom = 'NewsTitle',
    		this.isSaveposition = true,
            this.clearSearch = !this.clearSearch
    	}

	},
    activated(){
    	window.addEventListener('scroll',this.handleScroll)
    	window.addEventListener('touchstart',this.handlestart)
    	window.addEventListener('touchend',this.handleend)
    },
    beforeRouteLeave(to, from, next) {
    	if(this.isSaveposition)
    	{
    		let position = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    		if (position == null) position = 0
    		this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来
    		next()

    	}
    	else
    	{
    		let position = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    		if (position == null) position = 0
    		this.$store.commit('changesearchtitle', position) //离开路由时把位置存起来
    		next()
    	}
    	
  	},
	mounted(){
		this.runaxios() /*执行阿贾克斯数据请求*/
	},
  	destroyed () {
  		//销毁节省资源以及减少冲突
  		window.removeEventListener('scroll', this.handleScroll)
  		window.addEventListener('touchstart',this.handlestart)
    	window.addEventListener('touchend',this.handleend)  
	}
}
</script>
<style lang="stylus" scoped="">	
</style>