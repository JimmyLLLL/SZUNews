<template>
		<div class="mainheader">
			<div class="headerwrapper">
				<div class="leftwrapper border-bottom">
				<input class="header-left" type="text" name="" v-model="searchText" placeholder="输入关键字，搜索公文通" @keyup.enter="search" @focus="handlefocus" @blur="handleblur">
				</div>
			<button class="header-right" @click="search">确 定</button>
			</div>
			<div class="greyBG" v-if="isGrey"></div>
		</div>
</template>

<script>
export default{
	name : 'MainHeader',
	props:['message'],
	methods:{
		search(){
			if(this.searchText!='')
			{
				this.$emit('emitSearch',this.searchText),
				this.$store.commit('changesearchtitle', 0)
			}
			this.isGrey = false
				
		},
		handlefocus(){
			this.isGrey = true
		},
		handleblur(){
			this.isGrey = false
		}
	},
	data () {
    return {
      searchText:'',
      isGrey:false
      }
    },
    watch:{
    	message:function(){
    		this.searchText=''
    	}

    }
}
</script>

<style lang="stylus" scoped>
	.mainheader
		background-color #FFFFFF
		position fixed
		width:100%
		box-shadow: 0px 0px 10px #909090
		.greyBG
			position fixed
			top 1.06rem
			left 0
			width 100%
			height 100%
			background-color rgba(0, 0, 0, .5)
			z-index 99
		.headerwrapper
			padding .18rem 0rem .20rem  .19rem
			display flex			
			.leftwrapper
				flex 1	
				float left
				.header-left
					width 95%
					padding .11rem 0rem 0rem .32rem
					font-size .28rem
					font-family PingFang-SC-Regular
					color rgba(102,102,102,1)
			.header-right
				width 1.23rem
				font-weight 430
				background-color #FFFFFF
				font-size .3rem
				padding .11rem 0 .12rem 0
				font-family NotoSansHans-Medium
				color rgba(102,102,102,1)
			
</style>