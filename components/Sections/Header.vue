<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="logo">
				<nuxt-link to="/" exact class="logo__link">
					<div class="logo__title">Vape Master</div>
					<div class="logo__subtitle">Твой поставщик дыма</div>
				</nuxt-link>
			</div>
			<Nav :links="links" />
			<div class="user">
				<div class="user__info">
					<a class="user__link" href="#">
						<img class="user__img" src="/img/user.jpg" alt="Константин Константинов">
					</a>
					<div class="user__username">
						<div class="user__name">Константин</div>
						<div class="user__surname">Константинов</div>
					</div>
				</div>
				<div class="user__basket">
					<div class="user__wrapper">
						<span class="user__total">7</span>
						<a class="user__icon" href="#"></a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Nav from '~/components/Sections/Nav'

export default {
	components: {
		Nav
	},
	data() {
		return {
			links: [
				{ title: "Атомайзеры", url: "/atomizers" },
				{ title: "Моды", url: "/mods" },
				{ title: "Жидкости", url: "/eliquid" },
				{ title: "Аксессуары", url: "/accessories" },
				{ title: "Доставка", url: "/delivery" },
				{ title: "О нас", url: "/about" }
			]
		}
	}
}
</script>

<style lang="sass">
.header
	width: 100%
	height: 70px
	box-shadow: $headerShadow
	background-color: $block
	position: fixed
	left: 0
	top: 0
	z-index: 1
	&__wrapper
		+wrapper()
		display: flex
		justify-content: space-between

.logo
	min-width: 210px
	+sm-block
		flex-grow: 1
		min-width: 0
	+xs(min-width, 0)
	&__link
		display: block
		background: url(~assets/icons/logo.png) left 10px / 48px 67px no-repeat
		height: 70px
		max-width: 250px
		padding: 20px 0 0 63px
		margin-left: -6px
		+retina("~assets/icons/logo@2x.png")
		+sm(max-width, 210px)
		+xs(max-width, 63px)
		&:hover
			text-decoration: none
	&__title
		font-size: 16px
		font-weight: 700
		text-transform: uppercase
		color: $olive
		letter-spacing: 0.4px
		+xs(display, none)
	&__subtitle
		font-size: 12px
		color: $grey
		margin: -1px 0 0 2px
		+xs(display, none)

.user
	display: flex
	justify-content: space-between
	min-width: 180px
	+lg(min-width, 0)
	&__info
		display: flex
	&__link
	&__img
		height: 40px
		border-radius: 50%
		margin-top: 15px
	&__username
		margin: 12px 0 0 10px
		font-size: 12px
		+lg(display, none)
	&__name
		line-height: 2.5
	&__surname
		line-height: 0
	&__basket
		margin-left: 15px
	&__wrapper
		margin-top: 20px
		display: flex	
		justify-content: flex-end
		align-items: flex-end
	&__total
		color: $olive
		font-size: 12px
		line-height: 1.2
	&__icon
		width: 18px
		height: 16px
		background: url(~assets/icons/basket.svg) left top / 18px 16px no-repeat
		margin: 6px 0 0 3px
		display: block
</style>