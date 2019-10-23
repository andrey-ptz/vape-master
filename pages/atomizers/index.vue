<template>
	<div>
		<Header />
		<div class="wrapper">
			<div class="move" ref="move"></div>
			<div class="headline">
				<h1>Атомайзеры</h1>
				<div class="hidden-filter">
					<button class="hidden-filter__btn" 
						:class="{'hidden-filter__btn_active': hiddenFilter}"
						@click="showHiddenFilter">
					</button>
				</div>
			</div>
			<div class="container">
				<Filters :pageName="pageName" />
				<div class="main-container">
					<div class="sort">
						<div class="search">
							<input class="search__input" type="search" placeholder="Быстрый поиск" />
						</div>
						<CustomSelect />
					</div>
					<main>
						<Card 
							v-for="(value, i) in items" 
							:key="i"
							:card="value"
							:pageName="pageName"
						/>
					</main>
					<button 
						class="btn btn_load" 
						v-if="itemList.length > currentSize"
						@click="loadMore"
					>
						Показать еще
					</button>
				</div>
				<Footer />
			</div>
		</div>
	</div>
</template>

<script>
import Header from '~/components/Sections/Header.vue'
import Filters from "~/components/Filters/Filters";
import CustomSelect from "~/components/Sort/CustomSelect";
import Card from "~/components/Sections/Card";
import Footer from "~/components/Sections/Footer";

export default {
  components: {
		Header,
    Filters,
		CustomSelect,
		Card,
		Footer
	},
	data() {
    return {
			pageName: 'atomizers',
			hiddenFilter: false,
			defaultSize: 6,
			currentSize: 6,
			loadMoreSize: 6
    }
  },
	computed: {
		// call getter with page name param and get cards list
		itemList() {
      return this.$store.getters.itemList(this.pageName);
		},
		// show only currentSize cards
		items() {
			return this.itemList.slice(0, this.currentSize);
		}
	},
	methods: {
		showHiddenFilter() {
			this.hiddenFilter = !this.hiddenFilter
			this.$bus.$emit('showHiddenFilter', this.hiddenFilter)
		},
		// show more cards when load more button clicked
		loadMore() {
			this.currentSize += this.loadMoreSize
		}
	},
  mounted() {

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