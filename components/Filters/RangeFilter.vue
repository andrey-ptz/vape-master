<template>
  <div class="filter__wrapper filter__wrapper_active">
    <div class="range">
      <div class="range__inputs">
        <div class="range__from">
          <label class="range__label">От</label>
          <input
            class="range__input"
            type="text"
            maxlength="10"
						@change="changeValues"
            v-model="minVal"
          />
        </div>
        <div class="range__to">
          <label class="range__label">До</label>
          <input 
						class="range__input" 
						type="text"
						maxlength="10" 
						@change="changeValues"
						v-model="maxVal"
					/>
        </div>
      </div>

      <div class="range__container">
        <div class="range__custom" ref="slider"></div>
      </div>
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
    }
	},
	data() {
		return {
			defaultValues: this.values,
			minVal: this.values[0],
			maxVal: this.values[1]
		}
	},
	mounted() {
		if (this.activeValues.length) {
			this.minVal = this.activeValues[0];
			this.maxVal = this.activeValues[1];
		}

    noUiSlider.create(this.$refs.slider, {
      start: [this.minVal, this.maxVal],
      connect: true,
      range: {
        min: this.defaultValues[0],
        max: this.defaultValues[1]
      }
		});

		this.$refs.slider.noUiSlider.on('update', (values) => {
			this.minVal = parseInt(values[0]);
			this.maxVal = parseInt(values[1]);
		});

		this.$refs.slider.noUiSlider.on('change', this.changeValues)
	},
	methods: {
		changeValues() {
			const arrValues = [this.minVal, this.maxVal];
			this.$refs.slider.noUiSlider.set(arrValues);
    }
	},
};
</script>

<style lang="sass">
.range
	&__inputs
		margin-top: 13px
		display: flex
		justify-content: space-between
	&__from, &__to
		width: 50%
	&__to
		margin-left: 10px
	&__label
		font-size: 12px
		font-weight: bold
		margin-left: 10px
		margin-bottom: 0
	&__input
		margin-top: 2px
		border: 1px solid $border
		border-radius: 4px
		background-color: $block
		color: $main
		font-size: 12px
		padding: 0px 3px 1px 9px
		width: 100%
		height: 28px
		&::placeholder
			color: #bec8cd
			font-size: 12px
			opacity: 1
		&:-ms-input-placeholder
			color: #bec8cd
			font-size: 12px
		&:focus
			border: 1px solid $main
			outline: none
		&::-ms-clear
			display: none
	&__container
		height: 28px
		margin: 16px 0 2px
		width: calc(100% - 1px)
</style>