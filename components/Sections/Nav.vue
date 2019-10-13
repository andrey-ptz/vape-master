<template>
  <nav class="nav">
    <div class="nav__hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="nav__list">
			<nuxt-link class="nav__item" active-class="nav__item_active" tag="li" 
				:to="link.url" v-for="link in links" :key="link.title">
				<a class="nav__link">{{ link.title }}</a>
			</nuxt-link>
      <li class="nav__item nav__item_hidden">
        Еще
        <ul class="nav__hidden-list">
          <li class="nav__hidden-item">
            <a class="nav__hidden-link" href="#">Аксессуары</a>
          </li>
          <li class="nav__hidden-item">
            <a class="nav__hidden-link" href="#">Доставка</a>
          </li>
          <li class="nav__hidden-item">
            <a class="nav__hidden-link" href="#">О нас</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
	props: {
		links: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="sass">
.nav
	&__hamburger
		display: none
		cursor: pointer
		margin: 26px 20px 26px 0
		span
			display: block
			background-color: $main
			width: 25px
			height: 3px
			margin: 4px 0
			transition: .3s
		&_active
			span:nth-child(1)
				transform: rotate(-45deg) translate(-5px, 5px)
			span:nth-child(2)
				opacity: 0
			span:nth-child(3)
				transform: rotate(45deg) translate(-5px, -5px)
	&__list
		margin: 0
		padding: 0
		display: flex
		&_mobile_open
			display: block
	&__item
		display: block
		max-height: 70px
		line-height: 65px
		padding: 2px 14px 0 14px
		font-size: 16px
		font-weight: 700
		border-bottom: 5px solid $block
		transition: border-color .3s
		margin-right: -.5px
		&_active, &:hover
			border-bottom: 5px solid $blue
			color: $blue
		&_hidden
			display: none
			border: none
			position: relative
			cursor: pointer
			&::after
				content: ''
				background: url(~assets/icons/arrow.svg) right top no-repeat
				position: absolute
				width: 10px
				height: 7px
				top: 33px
				right: -2px
	&__link
		display: block
		color: inherit
		transition: color .2s
		&:hover
			text-decoration: none
			color: inherit
	&__hidden-list
		display: none
		position: absolute
		top: 52px
		right: -4px
		background-color: $block
		padding: 0
		border: 1px solid $border
		box-shadow: $shadow
		border-radius: 4px
		overflow: hidden
</style>