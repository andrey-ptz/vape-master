<template>
  <nav class="nav">
    <div class="nav__hamburger" ref="hamburger"
			:class="{'nav__hamburger_active': hamburgerActive}"
			@click="mobileMenu"
		>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="nav__list" ref="list">
			<nuxt-link class="nav__item" active-class="nav__item_active" 
				tag="li" 
				:to="value.url" 
				v-for="(value, index) in links" 
				:key="index"
				@click.native="clearPage"
			>
				<a class="nav__link">{{ value.title }}</a>
			</nuxt-link>
      <li class="nav__item nav__item-hidden"
				:class="{'nav__item-hidden_active': hiddenMenu}"
				@click="hiddenMenu = !hiddenMenu"
			>
        Еще
        <ul class="nav__hidden-list" :class="{'nav__hidden-list_active': hiddenMenu}">
					
					<nuxt-link class="nav__hidden-item" active-class="nav__hidden-item_active" 
						tag="li" 
						:to="value.url" 
						v-for="(value, index) in hiddenLinks" 
						:key="index"
						@click.native="clearPage"
					>
						<a class="nav__hidden-link">{{ value.title }}</a>
          </nuxt-link>

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
	},
	data() {
		return {
			hiddenMenu: false,
			hamburgerActive: false
		}
	},
	methods:{
		mobileMenu() {
			this.hamburgerActive = !this.hamburgerActive
			const list = this.$refs.list, 
						move = this.$parent.$parent.$refs.move;
			
			if (list.style.maxHeight) {
				list.removeAttribute("style"), move.removeAttribute("style");
			} else {
				list.style.maxHeight = list.scrollHeight + "px";
				move.style.height = list.scrollHeight + "px";
			}
		},
		clearPage() {
			this.$bus.$emit('clearPage')
		}
	},
	computed: {
		hiddenLinks() {
			return this.links.slice(3);
		}
	},
	mounted() {
		this.$bus.$on('documentClick', (e) => {
			if (!e.target.matches('.nav__item-hidden')) {
				this.hiddenMenu = false
			}
		}),
		this.$bus.$on('windowResize', () => {
			if (window.matchMedia("(min-width: 769px)").matches) {
				this.hamburgerActive = false;
				this.$refs.hamburger.classList.remove("nav__hamburger_active");
				this.$refs.list.removeAttribute('style');
				this.$parent.$parent.$refs.move.removeAttribute('style');
			}
		})
	},
	beforeDestroy() {
		this.$bus.$off('documentClick')
		this.$bus.$off('windowResize')
	}
};
</script>

<style lang="sass">
.nav
	+sm(order, -1)
	&__hamburger
		display: none
		cursor: pointer
		margin: 26px 20px 26px 0
		+sm(display, block)
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
		+sm-block()
			position: absolute
			top: 70px
			left: 0
			width: 100%
			flex-direction: column 
			max-height: 0
			overflow: hidden
			box-shadow: $shadow
			transition: max-height .3s ease-out
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
			+sm-block()	
				background-color: $blue !important
				color: $block
				border-color: $blue !important
		&:nth-child(6), &:nth-child(5)
			+to(1024px)
				display: none
		&:nth-child(4)
			+md(display, none)	
		&:nth-child(-n+6)
			+sm-block()	
				display: block
				background-color: $block
				border-color: $block
				line-height: normal
				padding-top: 8px
				padding-bottom: 5px
				transition: none
		&-hidden
			display: none
			border: none
			position: relative
			cursor: pointer
			+to(1024px)
				display: block
			+sm(display, none)
			&::after
				content: ''
				background: url(~assets/icons/arrow.svg) right top no-repeat
				position: absolute
				width: 10px
				height: 7px
				top: 33px
				right: -2px
			&:hover
				color: $main
				border: none
			&_active
				color: $main
				&::after
					transform: rotate(180deg)
			
	&__link
		display: block
		color: inherit
		transition: color .2s
		&:hover
			text-decoration: none
			color: inherit
	&__hidden
		&-list
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
			&_active
				display: block
		&-item
			display: none
			border: none
			padding: 7px 17px 9px
			cursor: pointer
			line-height: normal
			height: auto
			text-align: right
			&:nth-child(3), &:nth-child(2)
				+to(1024px)
					display: block
			&:nth-child(1)
				+md(display, block)
			&:hover, &_active
				border: none
				color: $block
				background-color: $blue
		&-link
			color: inherit
			display: block
			transition: color .2s
			&:hover
				text-decoration: none
				color: inherit
</style>