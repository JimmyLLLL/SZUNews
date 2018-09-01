<template>
	<div ref="wrapper" class="wrapper">
		<div class="blankfix"></div>
		<router-link to="/NewsMain" tag="div" class="totalwrapper" v-for="(item,key) of dataList" :key="key">
			<div class="innerwrapper">
				<div class="title" :style="twoellipsis">
					{{item.title}}
				</div>
				<div class="bottomwrappper">
					<div class="classify">
					{{item.classify}}
					</div>
					<div class="institute">
						{{item.institute}}
					</div>
					<div class="readnum">
						{{item.readnum}}
					</div>
					<div class="day">
						{{item.day}}
					</div>
				</div>
			</div>	
		</router-link>
            <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
                  <span slot="no-more">没有更多数据啦 :-)</span>
            </infinite-loading>
	</div>
  
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'NewsTitle',
  components:{
      InfiniteLoading
  },
  data () {
    return {
      twoellipsis:'display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;',
      wrapper:[],
      pulldown:true,
      dataList:[{
      	id:1,
      	title:'1大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:2,
      	title:'2大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:3,
      	title:'3大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:4,
      	title:'4大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:5,
      	title:'5大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:6,
      	title:'6大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:7,
      	title:'7大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:8,
      	title:'8大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:9,
      	title:'9大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:10,
      	title:'10大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:11,
      	title:'11大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
       	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:12,
      	title:'12大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:13,
      	title:'13大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:14,
      	title:'14大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:15,
      	title:'15大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:16,
      	title:'16大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:17,
      	title:'17大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:18,
      	title:'18大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      },{
      	id:19,
      	title:'19大家好我是周杰伦阿斯利康大家阿拉山口理解拉客的阿萨德的萨达萨拉升撒打算打算打算打算啊深大飒飒撒打算打算asdasdasd',
      	classify:'「生活」',
      	institute:'土木工程学院',
      	readnum:'310阅读',
      	day:'7月30日'
      }]
      }
    },
	activated(){
	var sthis = this //存取指针指向
	setTimeout(function(){
			let recruitScrollY = sthis.$store.state.recruitScrollY
			window.scrollTo(0,recruitScrollY)
		},0)

	},
      methods:{
            infiniteHandler($state) {
                  setTimeout(() => {
                        const temp = [];
                        for (let i = 0; i <= 18; i++) {
                              temp.push(this.dataList[i]);
                        }
                        this.dataList = this.dataList.concat(temp);
                        $state.loaded();
                        }, 1000);
                  }

      }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
	.wrapper
		margin 0
		z-index -1
		padding .12rem .2rem .12rem .2rem
		background-color #f2f2f2
		height 100%
		.blankfix
			height 1rem
		.totalwrapper
			margin-bottom .03rem               
			.innerwrapper
				background-color #ffffff
				padding .2rem .3rem .3rem .3rem
				.title
					overflow hidden
					text-overflow ellipsis
					font-size .3rem
					font-family NotoSansHans-Medium
					color rgba(88,88,88,1)
					line-height .4rem
					font-weight 500
				.bottomwrappper
					display flex
					.classify
						margin-left -.1rem
						font-size .22rem
						margin-top .3rem
						color #888888
					.institute
						margin-top .3rem
						color #888888
						font-size .22rem
						margin-left .1rem
					.readnum
						margin-top .3rem
						color #888888
						font-size .22rem
						margin-left .23rem
					.day
						margin-top .3rem
						color #888888
						font-size .22rem
						flex 1
						text-align right
					

</style>



