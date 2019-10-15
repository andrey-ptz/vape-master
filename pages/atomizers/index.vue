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
				<Filters :params="filterParams" />
				<div class="main-container">
					<div class="sort">
						<div class="search">
							<input class="search__input" type="search" placeholder="Быстрый поиск" />
						</div>
						<CustomSelect />
					</div>
					<main>
						<Card 
							v-for="card in cards" 
							:key="card.name"
							:card="card"
						/>
					</main>
					<button class="btn btn_load">Показать еще</button>
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
	methods: {
		showHiddenFilter() {
			this.hiddenFilter = !this.hiddenFilter
			this.$bus.$emit('showHiddenFilter', this.hiddenFilter)
		}
	},
  mounted() {
    accordionStart();
		rangeStart();
	},
	beforeDestroy() {
		this.$bus.$off('showHiddenFilter')
  },
  data() {
    return {
			hiddenFilter: false,
      filterParams: [
        {
          title: "Объем, мл",
          type: "checkbox",
          values: [2, 3, 4, 4.5, 5, 6],
          direction: "row"
        },
        {
          title: "Стоимость, руб",
          type: "range",
          values: [1000, 2300]
        },
        {
          title: "Диаметр, мм",
          type: "checkbox",
          values: [17, 19, 21, 22, 24, 25],
          direction: "row"
        },
        {
          title: "Регулировка обдува",
          type: "checkbox",
          values: ["Да", "Нет"],
          direction: "column"
        },
        {
          title: "Бренд",
          type: "checkbox",
          values: ["Aspire", "Blitz", "Eleaf", "GeekVape", "IJOY", "SMOK"],
          direction: "column"
        }
      ],
      cards: [
        {
					img: "1.png",
          brand: "Aspire",
          name: "Nautilus X",
          volume: 2,
          diameter: 22,
					original: true,
					stock: 12,
					airflow: true,
					price: 1000
				},
				{
					img: "2.png",
          brand: "Blitz",
          name: "Spark Black",
          volume: 6,
          diameter: 24,
					original: false,
					stock: 7,
					airflow: false,
					price: 2200
				},
				{
					img: "3.png",
          brand: "Eleaf",
          name: "Melo 4",
          volume: 4.5,
          diameter: 25,
					original: true,
					stock: 10,
					airflow: true,
					price: 1100
				},
				{
					img: "4.png",
          brand: "GeekVape",
          name: "Alpha Sub",
          volume: 4,
          diameter: 25,
					original: true,
					stock: 3,
					airflow: true,
					price: 2300
				},
				{
					img: "5.png",
          brand: "IJOY",
          name: "Diamond Baby",
          volume: 4,
          diameter: 21,
					original: false,
					stock: 22,
					airflow: true,
					price: 2000
				},
				{
					img: "6.png",
          brand: "SMOK",
          name: "TFV8",
          volume: 4,
          diameter: 24,
					original: true,
					stock: 14,
					airflow: true,
					price: 1300
        }
      ]
    };
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