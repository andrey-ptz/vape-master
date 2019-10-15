<template>
  <footer class="footer">
    <div class="footer__copy">
      &copy;&nbsp;VAPE MASTER,<br />2018
    </div>
    <div class="footer__info">
      <a class="footer__info-link" href="#">Новости сайта</a>
      <a class="footer__info-link" href="#">Отзывы и предложения</a>
      <a class="footer__info-link" href="#">Контакты</a>
    </div>
    <div class="footer__more">
      <div class="footer__social">
        <a class="footer__social-link footer__social-link_vk" href="#"></a>
        <a class="footer__social-link footer__social-link_fb" href="#"></a>
      </div>
      <div class="footer__about">
        <a class="footer__about-link" href="#">О нас</a>
        <a class="footer__about-link" href="#">Гарантия</a>
        <a class="footer__about-link" href="#">Помощь</a>
        <a class="footer__about-link" href="#">Партнеры</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass">
.footer
	width: 100%
	margin: 50px 0
	padding: 0 15px
	display: flex
	justify-content: space-between
	flex-wrap: wrap
	&__copy
		margin: 3px 0 20px 17px
		padding-left: 34px
		font-size: 12px
		line-height: 1.3
		color: $olive
		height: 35px
		background: url(~assets/icons/footerLogo.png) left top / 24px 33px no-repeat
		+retina("~assets/icons/footerLogo@2x.png")
		+to(1024px)
			margin-left: 0
		+xs(min-width, 40%)
	&__info
		margin-top: 4px
		+md(max-width, 220px)
		+xs-block()
			order: -1
			min-width: 100%
			margin-bottom: 20px
		&-link
			display: inline-block
			color: $main
			font-weight: 700
			margin-right: 24px
			margin-bottom: 5px
			border-bottom: 1px solid $footer-border
			&:last-child
				margin-right: 0
			&:hover
				color: $main
				border-color: $body
				text-decoration: none
	&__more
		display: flex
		margin-right: 10px
		+to(1024px)
			margin-right: 0
	&__social
		margin-top: 5px
		display: flex
		+sm(flex-direction, column)
		+xs(flex-direction, row)
		&-link
			width: 30px
			height: 30px
			border-radius: 50%
			margin-bottom: 3px
			&_vk
				margin-right: 5px
				background: $main url(~assets/icons/vk.png) center center / 20px 12px no-repeat
				+retina("~assets/icons/vk@2x.png")
			&_fb
				background: $main url(~assets/icons/fb.png) 11px bottom / 12px 22px no-repeat
				+retina("~assets/icons/fb@2x.png")
	&__about
		margin-left: 14px
		line-height: 1
		max-width: 125px
		min-width: 65px
		+to(1024px)
			max-width: 65px
		+sm(margin-left, 7px)
		+xs-block()
			max-width: 125px
			margin-left: 14px
		&-link
			display: inline-block
			color: $main
			font-size: 12px
			margin-right: 5px
			border-bottom: 1px solid $footer-border
			&:hover
				border-color: $body
				color: $main
				text-decoration: none
				



// 	.copy


// 	.link

// 		a


// 	.more

// 		.socials


// 			a


// 				&.vk

// 				&.fb


// 		.about
			margin-left: 14px
			line-height: 1
			max-width: 125px
			min-width: 65px
// 			+to(1024px)
// 				max-width: 65px
// 			+sm(margin-left, 7px)
// 			+xs-block()
// 				max-width: 125px
// 				margin-left: 14px

// 			a
				display: inline-block
				color: $main
				font-size: 12px
				margin-right: 5px
				border-bottom: 1px solid #b7c4cb

// 				&:hover
// 					border-color: $body
</style>