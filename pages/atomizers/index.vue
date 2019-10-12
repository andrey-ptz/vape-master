<template>
  <div class="wrapper">
    <div class="headline">
      <h1>Атомайзеры</h1>
      <div class="hidden-icon">
        <button></button>
      </div>
    </div>
    <div class="container">
      <aside>
        <filters :params="filterParams" />
      </aside>
    </div>
  </div>
</template>

<script>
import filters from "~/components/Filters/Filters";

export default {
  components: {
    filters
  },
  mounted: function() {
		accordionStart()
		rangeStart()
	},
	data() {
		return {
			filterParams: [
				{
					title: 'Объем, мл',
					type: 'checkbox',
					values: [2, 3, 4, 4.5, 5, 6],
					direction: 'row'
				},
				{
					title: 'Стоимость, руб',
					type: 'range',
					values: [1000, 2300]
				},
				{
					title: 'Диаметр, мм',
					type: 'checkbox',
					values: [17, 19, 21, 22, 24, 25],
					direction: 'row'
				},
				{
					title: 'Регулировка обдува',
					type: 'checkbox',
					values: ['Да', 'Нет'],
					direction: 'column'
				},
				{
					title: 'Бренд',
					type: 'checkbox',
					values: ['Aspire', 'Blitz', 'Eleaf', 'GeekVape', 'IJOY', 'SMOK'],
					direction: 'column'
				}
      ]
		}
	}
};
</script>

<style lang="sass">
@import "~/assets/sass/utils/vars"
@import "~/assets/sass/utils/smart-grid"

.wrapper
	+wrapper()

.headline
	margin-top: 104px
	h1
		margin: 0 0 0 -2px
		font-size: 36px
		font-weight: 700
		line-height: 1
	.hidden-icon
		display: none

.container
	margin-top: 30px
	+row-flex()

aside
	+col()
	+size(3)
</style>