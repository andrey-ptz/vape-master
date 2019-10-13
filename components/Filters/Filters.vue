<template>
  <div class="filter">

		<div v-for="param in params" :key="param.title">
			<div class="accordion accordion_active">
				<div class="accordion__title">{{ param.title }}</div>
				<span class="accordion__arrow"></span>
			</div>
			<CheckboxFilter
				v-if="param.type === 'checkbox'"
				:values="param.values" 
				:direction="param.direction"/>
			<RangeFilter
				v-else-if="param.type === 'range'"
				:values="param.values"/>
		</div>

    <div class="filter__buttons">
      <button class="btn btn_apply">Применить</button>
      <button class="filter__reset">Сбросить</button>
    </div>
  </div>
</template>

<script>
import CheckboxFilter from "~/components/Filters/CheckboxFilter";
import RangeFilter from "~/components/Filters/RangeFilter";

export default {
  components: {
		CheckboxFilter,
		RangeFilter
	},
	props: {
		params: {
			type: Array,
			required: true
		}
	},
  data() {
    return {}
  }
};
</script>

<style lang="sass">
@import "~/assets/sass/nouislider"

.filter
	margin-bottom: 40px
	border: 1px solid $border
	box-shadow: $shadow
	border-radius: 4px
	background-color: $block
	overflow: hidden
	&__wrapper
		padding: 0 18px
		background-color: $panel
		overflow: hidden
		transition: max-height .2s ease-out
		&_active
			border-bottom: 1px solid $border
	&__buttons
		padding: 20px
		display: flex
		justify-content: space-between
	&__reset
			color: $blue
			border: none
			outline: 0
			padding: 0
			margin-left: 10px
			background-color: $block
			font-size: 12px
			text-transform: uppercase
			cursor: pointer
			letter-spacing: .5px
			transition: color .15s
			&:hover
				color: $olive
			&:active, &:focus
				outline: none

.accordion
	width: 100%
	text-align: left
	background-color: $block
	border: none
	outline: none
	border-bottom: 1px solid $border
	padding: 16px 0 17px 19px
	position: relative
	cursor: pointer
	&__title
		color: $main
		font-weight: 500
	&__arrow
		position: absolute
		width: 10px
		height: 7px
		top: 22px
		right: 19px
		background: url(~assets/icons/arrow.svg) left top / 10px 7px no-repeat
	&_active
		.accordion__arrow
			transform: rotate(180deg)
</style>