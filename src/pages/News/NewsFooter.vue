<template>
	<div>
		<div class="wrapper">
			<div class="line border-bottom"></div>
			<div class="source">
				<img class="sourceimg" src="@/assets/img/source.png">
				<span class="sourceword">查看原文</span>
			</div>
		</div>
		<div class="footerword">更多消息和福利</div>
		<div class="footerword">请关注<span class="wordspan">『深大荔知』</span>(szu_lz) ！</div>
		<div class="footerword"> 长按下图，识别二维码即可关注</div>
		<div class="imgwrapper"><img src="@/assets/img/qrcode.png" class="qrcodeimg"></div>
	</div>
	
</template>

<script>
export default{
	name:'NewsFooter'
}
</script>

<style lang="stylus" scoped>
	.wrapper
		display flex
		margin 0
		padding 0
		.line
			height .05rem
			margin-top .25rem
			flex 1
		.border-bottom
			&:before
				border-color #a7a7a7
			&:after
				border-color #a7a7a7
		.source
			width 1.38rem
			margin-left .05rem
			.sourceimg
				width .26rem
				height .26rem
			.sourceword
				font-size .26rem
				font-family PingFang-SC-Medium
				color rgba(153,153,153,1)
				line-height .56rem
	.footerword
		text-align center
		font-size .26rem
		font-family PingFang-SC-Medium
		color rgba(119,119,119,1)
		line-height .44rem
		.wordspan
			color #576B95
	.imgwrapper
		text-align center
		.qrcodeimg
			width 2.42rem
			height 2.42rem
	
</style>