<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    documentClick(e) {
      this.$bus.$emit("documentClick", e);
    },
    windowResize() {
      this.$bus.$emit("windowResize");
    }
  },
  mounted() {
    document.addEventListener("click", this.documentClick);
    window.addEventListener("resize", this.windowResize);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.windowResize);
  }
};
</script>

<style lang="sass">
.wrapper
	+wrapper()

.move
	height: 0 
	transition: height .3s ease-out

.headline
	margin-top: 104px
	+md-block()
		display: flex
		justify-content: space-between
	h1
		margin: 0 0 0 -2px
		font-size: 36px
		font-weight: 700
		line-height: 1
		+to(420px)
			font-size: 32px
	.hidden-filter
		display: none
		+md(display, block)
		&__btn
			width: 40px
			height: 40px
			border-radius: 50%
			border: 0
			outline: 0
			background: $blue url(~assets/icons/filter.png) 10px 12px / 20px 16px no-repeat
			cursor: pointer
			transition: background-color .2s
			+retina("~assets/icons/filter@2x.png")
			&_active
				background-color: $olive

.container
	margin-top: 30px
	+row-flex()
	+md(flex-direction , column)

.main-container
	+col()
	+size(9)
	+size-lg(8)
	+size-md(12)

.sort
	display: flex
	justify-content: space-between
	min-width: 262px
	border: 1px solid $border
	box-shadow: $shadow
	border-radius: 4px
	background-color: $block
	padding: 12px 20px 11px
	+xs(flex-direction, column)

.search
	&__input
		width: 212px
		height: 28px
		border: 1px solid $border
		border-radius: 4px
		padding: 4px 0px 6px 30px
		background: url(~assets/icons/search.svg) 10px 7px / 12px 12px no-repeat
		color: $main
		font-size: 12px
		+xs(width, 100%)
		&::placeholder
			color: $grey
			font-size: 12px
			opacity: 1
		&:-ms-input-placeholder
			color: $grey
			font-size: 12px
		&:focus
			border: 1px solid $main
			outline: none
		&::-webkit-search-cancel-button
			display: none

main
	margin-top: 20px
	+row-flex()
</style>