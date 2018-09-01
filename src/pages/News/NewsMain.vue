<template>
	<div class="wrapper">
		<div class="title">
			校工会与招商银行愉康支行联谊，共同举办“2018荔园相约”交友活动
		</div>
		<div class="microinfo">
			<div class="microtype">校工会</div>
			<div class="microtime">07-03 16:45</div>
		</div>
		<div class="article">
					为了给单身教职工搭建交友平台，创建和谐幸福的校园生活，7月6日（星期五）晚上7：00～9：00校工会与招商银行愉康支行联谊，共同举办“2018荔园相约”交友活动，欢迎全校未婚和单身教职工光临。招商银行愉康支行带来“招行闪电贷，办理即送”活动。本周五晚19：00-21：00可到深圳大学综合楼活动现场咨询。

	目前，报名正在火热进行中，并专门建立了活动微信群，深圳市其它兄弟院校单身人士也纷纷报名参加。报名请加微信zhangyf919，提交报名表，7月5日截止报名，工会活动联系人张彦芳老师，26732896

	2018荔园相约报名表及“招行闪电贷，办理即送”活动方案请见附件！
校工会
2018.07.03

		</div>
		<div class="adjunct">
			<img src="@/assets/img/adjunct.png" class="adjunctimg">
			<span class="adjunctword">附件</span>
			<div class="adjunctcon">·2018荔园相约报名表.xlsx</div>
			<div class="adjunctcon">·2018荔园相约报名表.xlsx</div>
		</div>
		<news-footer></news-footer>
		<div class="backwrapper" @click="handleclick"><img src="@/assets/img/back.png" class="backimg"></div>
	</div>
	
</template>

<script>
import NewsFooter from './NewsFooter'

export default{
	name:'NewsMain',
	components:{
		NewsFooter
  	},
  	methods:{
  		handleclick()
  		{
			this.$router.push({path:'/'})
  		}
  	},
  		destroyed(to, from, next) {
    		setTimeout(function(){
				window.scrollTo(0,0)
			},0)
  	},
}
	
</script>

<style lang="stylus" scoped>
	.wrapper
		background-color white
		padding .4rem .3rem .17rem .3rem
		.title
			font-size .42rem 
			font-family NotoSansHans-Bold
			color rgba(67,67,67,1)
			line-height .6rem;
		.microinfo
			display flex
			margin-top .2rem
			.microtime
				font-size .26rem
				font-family PingFang-SC-Medium
				color rgba(136,136,136,1)
				line-height .36rem
				margin-left .21rem
			.microtype
				font-size .26rem
				font-family PingFang-SC-Medium
				color rgba(136,136,136,1)
				line-height .36rem
		.article
			margin-top .25rem
			font-size .3rem
			font-family PingFang-SC-Medium
			color rgba(67,67,67,1)
			line-height .52rem
		.adjunct
			margin-top .1rem
			.adjunctimg
				width .28rem
				height .24rem
			.adjunctword
				font-size .26rem
				font-family PingFang-SC-Medium
				color rgba(67,67,67,1)
				margin-left .075rem
			.adjunctcon
				font-size .26rem
				font-family NotoSansHans-DemiLight
				color rgba(87,107,149,1)
				margin-top .2rem
		.backwrapper
			position fixed
			right .2rem
			bottom .4rem
			.backimg
				width 1.2rem
				height 1.2rem
</style>