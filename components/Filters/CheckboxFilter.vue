<template>
  <div class="filter__wrapper filter__wrapper_active">
    <div class="checkboxes" :class="directionClass">
      <label class="checkboxes__label" v-for="value in values" :key="value">
        {{ value | replaceBoolean }}
        <input 
					type="checkbox" 
					class="checkboxes__input" 
					v-model="checkboxValues"
          @change="filterValues"
          :value="value"
				/>
        <span class="checkboxes__checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		filterName: {
      type: String,
      required: true
    },
		values: {
			type: Array,
			required: true
		},
		activeValues: {
      type: Array,
      required: true
    },
		direction: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			directionClass: 'checkboxes_' + this.direction,
			checkboxValues: this.activeValues
		}
	},
	methods: {
		// add or remove parameters from filter to URL
    filterValues() {
			let arr;
			this.checkboxValues.length 
				? arr = this.checkboxValues.sort().join('-').toLowerCase() 
				: arr = []
			
			this.$router.push({ query: { ...this.$route.query, [this.filterName]: arr } });
		}
	},
	mounted() {
		// add a listener for the clearPage event
		this.$bus.$on('clearPage', () => {
			this.checkboxValues = [];
		})
	},
	filters: {
		// replaces some values
    replaceBoolean(value) {
      return value === true ? 'Да' : ( value === false ? 'Нет' : value )
		}
	},
	beforeDestroy() {
		// destroy the listener
    this.$bus.$off("clearPage");
  }
};
</script>

<style lang="sass">
.checkboxes
	&_row
		display: flex
		flex-wrap: wrap
		margin: 20px 0 10px
	&_column
		margin: 20px 0
	&__label
		display: block
		position: relative
		padding: 1px 4px 0 29px
		margin-bottom: 12px
		min-width: 53px
		cursor: pointer
		font-size: 12px
		line-height: 1.3
		user-select: none
	&__input
		position: absolute
		opacity: 0
		height: 0
		width: 0
		cursor: pointer
		&:checked ~ .checkboxes__checkmark:after
			display: block
	&__checkmark
		position: absolute
		top: 0
		left: 2px
		height: 18px
		width: 18px
		background-color: $block
		border: 1px solid $border
		border-radius: 4px
		&:after
			content: ''
			position: absolute
			display: none
			left: 3px
			top: 4px
			width: 11px
			height: 9px
			background: url(~assets/icons/switch.svg) left top / 11px 9px no-repeat
</style>